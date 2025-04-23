// components/Projects.tsx
import styles from "./projects.module.scss";
import Link from "next/link";

const Projects: React.FC<{ lng: string }> = ({ lng }) => {
  // Fetching Projects data from JSON
  const projectData = require(`../../app/i18n/locales/${lng}/translation.json`);

  const selectedProjects = projectData.whatIDO?.projects?.filter(
    (project: any) => project.selected === true
  );

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projects}>
        {projectData.whatIDO &&
          projectData.whatIDO.projects &&
          selectedProjects.map(
            (project: any, index: number, selected: boolean) => (
              <div key={index} className={styles.project}>
                <img src={project.image} alt="" />
                <Link href={`/${lng}/${project.link}`}></Link>
                <div className="projectInfos">
                  <p className={styles.b}>{project.myTasks}</p>
                  <p className={styles.r}>
                    {project.year} - {project.type} {""}
                    {project?.engine && project?.platform && (
                      <>
                        {" "}
                        - {project.engine} - {project.platform}
                      </>
                    )}
                    - {project.duration} - {project.teamSize}
                  </p>

                  <div className={styles.tags}>
                    {project.tags?.map((tag: string, tagIndex: number) => (
                      <div key={tagIndex} className={styles.tag}>
                        <p className={styles.b}>{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Projects;
