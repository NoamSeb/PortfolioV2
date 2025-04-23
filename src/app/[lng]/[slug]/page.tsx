import Link from "next/link";
import { useTranslation } from "../../i18n";
import styles from "./project.module.scss";
import { Metadata } from 'next';

import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";

interface ProjectProps {
  params: {
    lng: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
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
          <h1 className={styles.b}>{project.name}</h1>
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
              <Link href={`${project.externalLink.link}`} text-area={`See ${project.name} Project`}>
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
            </div>
        </div>
        <NavBar lng={lng}/>
      </main>
    </>
  );
}
