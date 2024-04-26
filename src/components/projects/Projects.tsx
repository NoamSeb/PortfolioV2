import styles from "./projects.module.scss";
import Link from "next/link";

export default async function Projects({ lng }) {
  // Fetching Projects data from JSON
  const projectData = await import(
    "../../app/i18n/locales/" + lng + "/translation.json"
  );

  return (
    <div className={styles.projects}>
      {projectData.whatIDO &&
        projectData.whatIDO.projects &&
        projectData.whatIDO.projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <img src={project.image} alt="" />
            <Link href={`/${project.link}`}>
              <div className={styles.sail}>
                <p>{project.name}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
