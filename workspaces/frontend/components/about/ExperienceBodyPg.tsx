import styles from "components/about/about.module.scss";

export default function ExperienceBodyPg() {
  return (
    <>
      <img className={styles.bodyLogo} src={"/images/pgWideLogo.png"}></img>
      <hr />
      <section className={styles.sectionSummary}>
        <h3>Summary:</h3>
        <p>
          Prometheus Group is a software company headquartered in Raleigh, NC
          that specializes in Enterprise Resource Planning (ERP) software
          solutions. They started out developing extensions for SAP, but are now
          a leader in the industry with solutions focusing on SAP, Oracle
          Primavera P6, Maximo, and more. Their customers include many of the
          largest companies in the world in the Oil and Gas, Energy, and Heavy
          Industrial sectors.
        </p>
      </section>
      <section className={styles.sectionStack}>
        <h3>My Stack</h3>
        <ul>
          <li>Frontend - Javascript, React, Redux, D3</li>
          <li>Backend - Java, Spring Farmework</li>
          <li>Database - PostgreSQL</li>
          <li>Misc - Python, Shell</li>
        </ul>
      </section>
      <section className={styles.sectionEvents}>
        <h3>Noteworthy Events</h3>
        <ul>
          <li>
            Successful development and implementation of a new real time
            business intelligence (BI) solution deployment to 16 oil refineries.
            New software displaced an established system whose information
            influences business decisions measuring billions of dollars per
            year.
          </li>
          <li>
            Extensive experience writing and optimizing SQL queries for the
            aforementioned BI solution, as well as extensive experience
            architecting the system that made it possible to filter and group by
            in real time on datasets measuring tens of millions of rows.
          </li>
          <li>
            Combined multiple Git repos into a single monorepo while preserving
            5 years of commit history.
          </li>
          <li>
            Took on major rewrite as intern to port functionality from a legacy
            ExtJS page of the application to the new react-redux repository.
          </li>
        </ul>
      </section>
      <section className={styles.sectionPositions}>
        <h3>Positions:</h3>
        <ul>
          <li>
            <div>
              <h5>Lead Software Engineer</h5>
              <h5>May 2019 - July 2020</h5>
            </div>
            <ul>
              <li>
                Managed 4-6 person development team working on a web based
                analytical reporting solution primarily deployed in AWS, and
                with several thousand active users.
              </li>
              <li>
                Responsibilities included: All of the below, Sprint planning,
                Interdepartmental coordination, Project management for
                aforementioned real time reporting project.
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>Software Engineer</h5>
              <h5>Aug 2018 - May 2019</h5>
            </div>
            <ul>
              <li>
                Responsibilities included: All of the below, Architecture for
                frontend/backend/database, Mentoring junior devs
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>Associate Software Engineer</h5>
              <h5>Jan 2018 - Aug 2018</h5>
            </div>
            <ul>
              <li>
                Responsibilities included: Nothing new, interns were essentially
                just part time junior devs.
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>Intern Software Engineer</h5>
              <h5>Jan 2017 - Dec 2017</h5>
            </div>
            <ul>
              <li>
                Responsibilities included: Code reviews, Development for
                frontend/backend/database
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
