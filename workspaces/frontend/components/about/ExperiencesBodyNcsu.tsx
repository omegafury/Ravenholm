import styles from "components/about/about.module.scss";

export default function ExperiencesBodyNcsu() {
  return (
    <>
      <img className={styles.bodyLogo} src={"/images/ncsuWideLogo.png"}></img>
      <hr />
      <section className={styles.sectionSummary}>
        <h3>Summary:</h3>
        <div className="quote">
          <p>
            NC State University began as a land-grant institution grounded in
            agriculture and engineering. Today, we’re a leading public research
            university that excels across disciplines. NC State is a powerhouse
            in science, technology, engineering and math. We lead in
            agriculture, education, textiles, business and natural resources.
            We’re at the forefront of teaching and research in design, the
            humanities and the social sciences. And we’re home to one of the
            planet’s best colleges of veterinary medicine.
          </p>
          <p>
            Our more than 36,000 undergraduate and graduate students learn by
            doing. They pursue research and start new companies. They forge
            connections with top employers and serve local and global
            communities. And they enjoy an outstanding return on investment.
          </p>
        </div>
      </section>
      <section className={styles.sectionEvents}>
        <h3>Noteworthy Events</h3>
        <ul>
          <li>Bachelor of Science in Computer Science</li>
          <li>Graduated Sumna Cum Laude with a 3.9 GPA</li>
        </ul>
      </section>
      <section className={styles.sectionClasses}>
        <h3>Interesting Classes:</h3>
        <ul>
          <li>
            <div>
              <h5>CSC 405</h5>
              <h5>Intro to Computer Security</h5>
            </div>
            <ul>
              <li>
                <div className="quote">
                  <p>
                    This course provides a graduate-level introduction to
                    computer and network security. Students successfully
                    completing this class will be able to evaluate works in
                    academic and commercial security, and will have rudimentary
                    skills in security research. The course begins with a
                    tutorial of the basic elements of exploitation and defences,
                    and systems security, and continues by covering a number of
                    seminal papers and monographs in a wide range of security
                    areas.
                  </p>
                  <p>
                    Topics covered include network security, program safety,
                    intrusion detection, DDoS detection and mitigation,
                    architecture/operating systems security, security policy,
                    web security, and other emerging topics.
                  </p>
                </div>
              </li>
              <li>
                Homework consisted of SSHing into a prepared server and
                attempting a series of hacks to escelate the users privelege.
                Each level cleared represented one or more different
                vulnerabilities, such as stack overflows, sql injection and
                steganography.
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>CSC 440</h5>
              <h5>Database Management Systems</h5>
            </div>
            <ul>
              <li>
                <div className="quote">
                  Introduction to database concepts. This course examines the
                  logical organization of databases: the entity-relationship
                  model; the relational data model and its languages. Functional
                  dependencies and normal forms. Design, implementation, and
                  optimization of query languages; security and integrity,
                  concurrency control, transaction processing, and distributed
                  database systems.
                </div>
              </li>
              <li>
                <p>
                  Coursework centered around providing the skills necessary to
                  complete a 3 part semester long group project revolving around
                  database design and systems architecture for a hypothetical
                  hotel management system, given a proscribed API surface area.
                </p>
                <p>
                  <a href="CSC440_ProjectPart1.pdf" target="_blank">
                    Part1.pdf
                  </a>{" "}
                  |
                  <a href="CSC440_ProjectPart2.pdf" target="_blank">
                    {" "}
                    Part2.pdf
                  </a>{" "}
                  |
                  <a href="CSC440_ProjectPart3.pdf" target="_blank">
                    {" "}
                    Part3.pdf
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>ARS 306</h5>
              <h5>Music Composition with Computers</h5>
            </div>
            <ul>
              <li>
                <div className="quote">
                  Survey of the theory and history of computer music,
                  compositional algorithms, digital synthesis techniques,
                  composition of at least one computer music work -- a
                  computer-assisted composition for traditional instruments, a
                  piece for computer music on tape, a real-time piece, or a
                  piece that combines tape and instrument(s).
                </div>
              </li>
              <li>
                <p>
                  This was my final project that I got an A on. Warning: It's
                  rather loud
                </p>
                <p>
                  Program Notes: The piece is titled concrete microscope.
                  Concrete because it is a Musik Concrete piece, and microscope
                  because the entire piece involves layering progressively more
                  zoomed in sections of a single short audio sample. The
                  original audio sample is of the composer speaking the words
                  “Musik Concrete”, and as such is only about a second or two
                  long. The piece is divided into two distinct sections. The
                  first part involves zooming in on the word “Musik”, while the
                  second involves zooming in on the word “Concrete”. Each
                  section is approximately 2 minutes long, though there is a
                  small amount of overlap with some of the different audio
                  tracks.
                </p>
                <a
                  className={styles.audioControlsAnchor}
                  href="concrete_microscope.mp3"
                  target="_blank"
                >
                  concrete_microscope.mp3
                </a>
                <audio controls>
                  <source src="concrete_microscope.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
