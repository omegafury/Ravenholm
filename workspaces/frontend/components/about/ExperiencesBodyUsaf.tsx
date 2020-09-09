import styles from "components/about/about.module.scss";

export default function ExperiencesBodyUsaf() {
  return (
    <>
      <img className={styles.bodyLogo} src={"/images/usafLogoText.png"}></img>
      <hr />
      <section className={styles.sectionSummary}>
        <h3>Summary:</h3>
        <p>
          I joined the US Air Force in 2007 at the age of 19. My career field
          was 2W1X1, which is Aircraft Armament Systems (otherwise known simply
          as "weapons"), and essentially entails the loading and maintenance of
          the weapons systems of the various airframes in the USAF inventory. I
          happened to be stationed at 2 F-15 bases during the 6 years I was in,
          but I could just as easily been switched to another air frame if I was
          stationed at a different base either of those times.
        </p>
        <p>
          The job entailed working in close knit 3 or 4 man teams, depending on
          the air frame. Each person on the team had a specific job, and we
          trained at length on weapons loading/unloading until each member of
          the team knew exactly where each other member was at any point during
          a highly choreographed 20-50 minute loading procedure.
        </p>
      </section>
      <section className={styles.sectionEvents}>
        <h3>Noteworthy Events</h3>
        <ul>
          <li>
            Recognized as a distinguished graduate (top 10% of class) in Airment
            Leadership School, a 192 hour course that focuses on developing
            leadership abilities, the profession of arms, and building effective
            communication.
          </li>
          <li>
            Recognized as an experienced loader, and transferred into "load
            barn", whose job it is to train/certify all weapons personal on
            base.
          </li>
          <li>
            Attained Staff Sergeant (SSgt) at earliest possible promotion cycle.
          </li>
          <li>Carried a top secret security clearance.</li>
          <li>
            Certified in the loading/unloading of nuclear weapons, specifically
            the B-61 nuclear bomb.
          </li>
          <li>
            Participated in the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Personnel_Reliability_Program"
              target="_blank"
            >
              Personal Reliability Program
            </a>{" "}
            as a pre-requisite for the aforementioned nuclear weapons
            certification.
          </li>
          <li>
            Substantial world travel, including 5.5 years living overseas and
            travel to 16 other countries during this time.
          </li>
        </ul>
      </section>
      <section className={styles.sectionPositions}>
        <h3>Positions:</h3>
        <ul>
          <li>
            <div>
              <h5>Texas</h5>
              <h5>Apr 2007 - Sept 2007</h5>
            </div>
            <ul>
              <li>
                I first had a 6 week basic training at Lackland AFB. I was
                fairly lucky here, as within 1-2 years of my going through basic
                training the process switched to an 8.5 week course. Highlights
                include grueling physical fitness activities, fighting to stay
                awake during classes introducing various miltary culture and
                history, and getting gassed in the gas chamber.
              </li>
              <li>
                I then had technical job training for ~4 months at Sheppard AFB.
                Highlights here included 3 hour lunch breaks, but since it was
                the middle of the day we weren't allowed to go anywhere but the
                school building or the chow hall, so we would take naps in the
                bathroom stalls. It was a decidedly different atmosphere from
                basic training.
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>Okinawa, Japan</h5>
              <h5>Sept 2007 - Sept 2009</h5>
            </div>
            <ul>
              <li>
                I was stationed Kadena Air Base in Okinawa, Japan, working on
                F-15C/D's. Okinawa is a small island ~3 hours south of the
                mainland. Unfortunately this means that travel to the mainland
                is difficult, and I was only able to make a single trip there in
                the 2 years I was stationed in Okinawa. I travelled to Alaska on
                2 occasions for Temporary Duty Assignments (TDY) for a full
                month each time during this period. On my second trip I was
                lucky enough to be selected for an incentive flight, and got to
                ride along in an F-15.
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h5>England</h5>
              <h5>Sept 2009 - Apr 2013</h5>
            </div>
            <ul>
              <li>
                I was stationed at RAF Lakenheath in England. Spread out over
                the 3.5 years I was stationed here I was TDY for something like
                9-10 months, including time in Iceland, Bulgaria, Turkey, The
                Netherlands, and a full 7 months in the United Arab Emirates.
              </li>
              <li>
                I spent roughly a year in the F-15C/D squadron working on the
                flightline before being transferred into Load Barn, where I
                spent the remaining ~2.5 years training and certifying both the
                C/D model squadron and the 2 E model squadrons on the full
                compiment of bombs and missiles that the airframe supports.
              </li>
              <li>
                When I was getting out I had 2.5 months of terminal leave to
                take, so I backpacked around Europe, starting in England and
                progressing counter clockwise through a majority of the Western
                and Central European countries before ending my trip in the
                Netherlands. I did this with no pre-prepared itinerary,
                generally deciding only a day or two ahead of time what city I
                would go to next. The scheduling of this was made dramatically
                easier as I had a 2 month duration unlimited rail travel ticket,
                so I could generally simply walk onto a train going anywhere at
                any time, with some restrictions. I stayed in hostels most of
                the time, except for when I stayed in an old monestary for a few
                days in the Netherlands with some friends I'd met about a month
                earlier. I highly recommend this form of solitary travel if one
                gets the chance.
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
