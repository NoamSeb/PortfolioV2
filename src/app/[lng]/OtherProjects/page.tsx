// components/Projects.tsx
import styles from "./OtherProjects.module.scss";
import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Metadata } from "next";

import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";

interface OtherProjectProps {
  params: {
    lng: string;
  };
}

export async function generateMetadata({
  params,
}: OtherProjectProps): Promise<Metadata> {
  return {
    title: `Game projects`,
  };
}

export default async function OtherProjects({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  // Fetching Projects data from JSON
  const projectData = require(`../../i18n/locales/${lng}/translation.json`);

  const OtherProjects = projectData.whatIDO?.projects?.filter(
    (project: any) => project.type != "Game" && project.type != "Jeu",
  );

  return (
    <>
      <TopBar />
      <div className={styles.projectContainer}>
        <h2 className={`${styles.b} ${styles.title}`}>
          {t("whatIDO.otherProjectPageTitle")}
        </h2>
        <div className={styles.projects}>
          {projectData.whatIDO &&
            projectData.whatIDO.projects &&
            OtherProjects.map(
              (project: any, index: number, selected: boolean) => (
                <Link href={`/${lng}/${project.link}`}>
                  <div key={index} className={styles.project}>
                    <img src={project.image} alt="" />
                    <div className={styles.projectInfos}>
                      <p className={styles.b}>{project.myTasks}</p>
                      <p className={styles.r}>
                        {project.year} -{" "}
                        {project.preciseType
                          ? project.preciseType
                          : project.type}{" "}
                        {""}
                        {project?.engine && project?.platform && (
                          <>
                            {" "}
                            - {project.engine} - {project.platform} {""}
                          </>
                        )}
                        - {project.duration} - {project.teamSize}
                      </p>

                      <div className={styles.tags}>
                        {project.tags?.map((tag: string, tagIndex: number) => (
                          <div key={tagIndex} className={styles.tag}>
                            <p className={`${styles.b} ${styles.tagText}`}>
                              {tag}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ),
            )}
        </div>
      </div>
      <NavBar lng={lng} />
    </>
  );
}
