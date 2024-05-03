import Link from "next/link";
import { useTranslation } from "../../i18n";
import TopBar from "@/components/topBar/TopBar";
import styles from "./project.module.scss";

interface ProjectProps {
  lng: string;
  slug: string;
}

export default function Page({
  params: { lng, slug },
}: {
  params: ProjectProps;
}) {
  const { t } = useTranslation(lng);

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
      </header>
      <main>
        <div className={styles.titleSection}>
          <h1 className={styles.b}>{project.name}</h1>
          <img src={project.image} alt={project.name} />
        </div>
        <p>{project.description}</p>
      </main>
    </>
  );
}
