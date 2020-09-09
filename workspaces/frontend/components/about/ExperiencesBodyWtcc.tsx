import styles from "components/about/about.module.scss";

export default function ExperiencesBodyWtcc() {
  return (
    <>
      <img className={styles.bodyLogo} src={"/images/wtccWideLogo.png"}></img>
      <hr />
      <section className={styles.sectionSummary}>
        <h3>Summary:</h3>
        <div className="quote">
          <p>
            Wake Tech is North Carolina’s largest community college, serving
            more than 74,000 adults annually, with six campuses, three training
            centers, multiple community sites, and a comprehensive array of
            online learning options. Wake Tech is accredited and offers more
            than 200 associate’s degrees, diplomas, and certificates that
            prepare students for university transfer or immediate employment.
            The college also offers short-term, non-degree programs in IT,
            healthcare, hospitality, public safety, skilled trades, and more.
            Non-degree programs include small business support, customized
            corporate training, and basic skills courses such as English as a
            Second Language and high school equivalency preparation. Wake Tech
            also serves high school students at the Wake Early College of Health
            and Sciences, Vernon Malone College and Career Academy, and North
            Wake College and Career Academy, in partnership with Wake County
            Public Schools. For more information, visit waketech.edu, and on
            social media @waketechcc.
          </p>
        </div>
      </section>
      <section className={styles.sectionEvents}>
        <h3>Noteworthy Events</h3>
        <ul>
          <li>Associate in Science</li>
          <li>Graduated with a 3.8 GPA</li>
        </ul>
      </section>
      <section className={styles.sectionClasses}>
        <h3>Interesting Classes:</h3>
        <ul>
          <li>
            <div>
              <h5>EGR 150</h5>
              <h5>Intro to Engineering</h5>
            </div>
            <ul>
              <li>
                <div className="quote">
                  <p>
                    This course is an overview of the engineering profession.
                    Topics include goal setting and career assessment, ethics,
                    public safety, the engineering method and design process,
                    written and oral communication, interpersonal skills and
                    team building, and computer applications. Upon completion,
                    students should be able to understand the engineering
                    process, the engineering profession, and utilize college
                    resources to meet their educational goals.
                  </p>
                </div>
              </li>
              <li>
                <p>
                  This class was neat primarily because our semester long group
                  prjoect consisted of designing and building a working
                  trebuchet that we tested against the other ~30 groups across
                  that semesters classes.
                </p>
                <a href="Trebuchet.pdf" target="_blank">
                  Here's our report.
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>DFT 170</h5>
              <h5>Engineering Graphics</h5>
            </div>
            <ul>
              <li>
                <div className="quote">
                  This course introduces basic engineering graphics skills and
                  applications. Topics include sketching, selection and use of
                  current methods and tools, and the use of engineering graphics
                  applications. Upon completion, students should be able to
                  demonstrate an understanding of basic engineering graphics
                  principles and practices. This course utilizes Solidworks
                  software.
                </div>
              </li>
              <li>
                <p>
                  Coursework primarily centered around introducing basic
                  solidworks modeling techiniques. I took this as an honors
                  section however, which at Wake Tech meant that the student and
                  professor decided on a semester long project on top of the
                  normal course load. I decided to model a basic manual
                  transmission. This is by no means meant to be a fully
                  realistic recreation, but IS a 4 speed transmission complete
                  with a gear shift, and all of the gears properly mesh, and
                  will therefore rotate correctly. I could only rotate them
                  manually in solidworks however, I never got a working
                  animation of it "running".
                </p>
                <p>
                  <a href="transmission.gif" target="_blank">
                    A gif showing all angles of the transmission. I don't have a
                    solidworks license anymore, so I can't update the original
                    files to remove the out of date warning in the gif
                    unfortunately.
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>ENG 112</h5>
              <h5>Writing and Research in the Disciplines</h5>
            </div>
            <ul>
              <li>
                <div className="quote">
                  This course, the second in a series of two, introduces
                  research techniques, documentation styles, and writing
                  strategies. Emphasis is placed on analyzing information and
                  ideas and incorporating research findings into documented
                  writing and research projects. Upon completion, students
                  should be able to evaluate and synthesize information from
                  primary and secondary sources using documentation appropriate
                  to various disciplines.
                </div>
              </li>
              <li>
                <p>
                  <a href="ENG112_GayMarriage.pdf" target="_blank">
                    This was a paper I wrote exploring the effects of the
                    sexuality of parents on their children.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="ENG112_Sweatshops.pdf" target="_blank">
                    This was a paper I wrote examining sweatshops. I happened to
                    be writing a paper on close to the same topic for a
                    microeconomics class at the time, and was honoestly rather
                    surprised at the conclusions I drew during the research
                    process for both of these papers.
                  </a>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
