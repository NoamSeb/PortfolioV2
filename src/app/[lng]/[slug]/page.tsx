import Link from "next/link";
import { useTranslation } from "../../i18n";
import TopBar from "@/components/topBar/TopBar";
import styles from "./project.module.scss";

interface ProjectProps {
  lng: string;
  slug: string;
}

export default async function Page({
  params: { lng, slug },
}: {
  params: ProjectProps;
}) {
  const { t } = await useTranslation(lng);

  const projectData = require(`../../i18n/locales/${lng}/translation.json`);

  // Find the project based on the slug
  const project = projectData.whatIDO.projects.find(
    (project: any) => project.link === slug
  );

  if (!project) {
    // If project not found, you can handle this case, like redirecting to a 404 page
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
