import Link from "next/link";
import { useTranslation } from "../../i18n";
import styles from "./project.module.scss";
import { Metadata } from "next";

import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";

interface ProjectProps {
  params: {
    lng: string;
    slug: string;
  };
}

interface WorkItem {
  task: string;
  descTask: string;
  mediaTask: string;
}

interface Project {
  MyWorkTitle: string;
  Work?: WorkItem[];
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = params;
  return {
    title: `Project | ${slug}`,
  };
}

export default async function Page({
  params: { lng, slug },
}: {
  params: { lng: string; slug: string };
}) {
  const { t } = await useTranslation(lng);

  const projectData = require(`../../i18n/locales/${lng}/translation.json`);

  const project = projectData.whatIDO.projects.find(
    (project: any) => project.link === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <header>
        <TopBar />
        <div className={styles.titleSection}>
          <div className={styles.titleSectionText}>
            <h1 className={styles.b}>{project.myTasks}</h1>
            <h2 className={`${styles.b} ${styles.xpTitle}`}>{project.name}</h2>
          </div>
          <img src={project.image} alt={project.name} />
        </div>
      </header>
      <main>
        <div>
          <div className={styles.projectInfos}>
            <div className={styles.projectInfosImages}>
              {project.description.images.map(
                (image: string, index: number) => (
                  <img key={index} src={image} alt={project.name} />
                )
              )}
            </div>
            <div className={styles.projectInfosDescription}>
              <h2 className={styles.b}>{t(project.stacks.title)}</h2>
              <p className={`${styles.r} ${styles.stacks}`}>
                {project.stacks.content.map((stack: string) => (
                  <span key={stack}>{stack}</span>
                ))}
              </p>
              <h2 className={styles.b}>{t(project.description.title)}</h2>
              <p className={styles.r}>{project.description.content}</p>
              <Link
                href={`${project.externalLink.link}`}
                text-area={`See ${project.name} Project`}
              >
                <button
                  className={`${styles.projectInfosDescriptionExternalLink} ${styles.b}`}
                >
                  {t(project.externalLink.title)}
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.myWorkOnProject}>
            <h2 className={styles.b}>{t(project.MyWorkTitle)}</h2>
            <div className={styles.work}>
              {project.Work?.map((item: WorkItem, tagIndex: number) => (
                <div key={tagIndex} className={`${styles.workDetail} ${tagIndex % 2 === 0 ? '' : styles.rowReverse}`}>
                  <div className={styles.workDetailText}>
                  <h3 className={`${styles.b} ${styles.TaskTitle}`}>{item.task}</h3>
                  <p className={`${styles.r} ${styles.TaskDesc}`}>{item.descTask}</p>
                  </div>
                  {item.mediaTask && (
                    <img
                      src={item.mediaTask}
                      alt={item.task}
                      className={styles.TaskMedia}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <NavBar lng={lng} />
      </main>
    </>
  );
}
