// components/Projects.tsx
import styles from "./projects.module.scss";
import Link from "next/link";

const Projects: React.FC<{ lng: string }> = ({ lng }) => {
  // Fetching Projects data from JSON
  const projectData = require(`../../app/i18n/locales/${lng}/translation.json`);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projects}>
        {projectData.whatIDO &&
          projectData.whatIDO.projects &&
          projectData.whatIDO.projects.map((project: any, index: number) => (
            <div key={index} className={styles.project}>
              <img src={project.image} alt="" />
              <Link href={`/${lng}/${project.link}`}>
                <div className={styles.sail}>
                  <p>{project.name}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
