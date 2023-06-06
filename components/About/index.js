import styles from "@/components/About/About.module.css";

export function About() {
  return (
    <>
      <section className={styles.frontAbout} id="frontAbout">
        <div className={styles.inner}>
          <div className={styles.frontAbout__wrap}>
            <h3 className={styles.frontAbout__heading}>About Me</h3>

            <div className={styles.frontAbout__box1}>
              <h4 className={styles.frontAbout__title}>How Did it Start?</h4>
              <div className={styles.frontAbout__flexBox1}>
                <div className={styles.frontAbout__textBox}>
                  <p className={styles.frontAbout__text}>
                    My journey as a web developer started when I dropped out of
                    my first university. I had no idea about what I would like
                    for my job. Then, at my second university, I started taking
                    online basic web development courses on HTML, CSS,
                    Javascript, JQuery. I fell in love with it instantly. As a
                    person with lots of curiosity and creativity, I figured that
                    it was perfect for me.
                  </p>
                </div>

                <div className={styles.frontAbout__skills}>
                  <h4 className={styles.frontAbout__skillsTitle}>
                    SKILLS ACQUIRED
                  </h4>
                  <ul className={styles.frontAbout__list}>
                    <li className={styles.frontAbout__listItem}>HTML</li>
                    <li className={styles.frontAbout__listItem}>CSS</li>
                    <li className={styles.frontAbout__listItem}>Javascript</li>
                    <li className={styles.frontAbout__listItem}>JQuery</li>
                  </ul>
                </div>
              </div>

              <div className={styles.frontAbout__flexBox1}>
                <div className={styles.frontAbout__textBox}>
                  <p className={styles.frontAbout__text}>
                    After finishing the online courses, I started my internship
                    with CLANE.inc, a web design company based in Japan.
                    Struggling and also having lots of fun with the tasks given,
                    I finished the internship with confidence and gained more
                    hard skills such as SCSS, PHP for wordpress as well as the
                    experience of working on a project in a team.
                  </p>
                </div>

                <div className={styles.frontAbout__skills}>
                  <h4 className={styles.frontAbout__skillsTitle}>
                    SKILLS ACQUIRED
                  </h4>
                  <ul className={styles.frontAbout__list}>
                    <li className={styles.frontAbout__listItem}>SCSS</li>
                    <li className={styles.frontAbout__listItem}>WordPress</li>
                    <li className={styles.frontAbout__listItem}>PHP</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.frontAbout__box2}>
              <h4 className={styles.frontAbout__title}>
                How about Soft Skills?
              </h4>
              <div className={styles.frontAbout__flexBox1}>
                <div className={styles.frontAbout__textBox}>
                  <p className={styles.frontAbout__text}>
                    I am taking part in projects with a Japanese design company
                    where I did an intern for 8 months. I am improving not only
                    my coding skills but also soft skills which are essential to
                    working in a team.
                  </p>
                </div>

                <div className={`${styles.frontAbout__skills} ${styles.soft}`}>
                  <h4 className={styles.frontAbout__skillsTitle}>
                    SKILLS ACQUIRED
                  </h4>
                  <ul className={styles.frontAbout__list}>
                    <li className={styles.frontAbout__listItem}>
                      Communication skills
                    </li>
                    <li className={styles.frontAbout__listItem}>
                      Lateral Thinking
                    </li>
                    <li className={styles.frontAbout__listItem}>
                      Critical Thinking
                    </li>
                    <li className={styles.frontAbout__listItem}>
                      Problem-Solving skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.frontAbout__box2}>
              <h4 className={styles.frontAbout__title}>
                So, what are you up to?
              </h4>
              <div className={styles.frontAbout__flexBox1}>
                <div className={styles.frontAbout__textBox}>
                  <p className={styles.frontAbout__text}>
                    I am currently looking for a job as a coder / web developer.
                    While doing so, I am also constantly learning; I am learning
                    Javascript to increse my market value as a developer. I am
                    planning to start on React.js as of January 2023. I love
                    learning, and I always want to be a better version of myself
                    than yesterday.
                  </p>
                </div>

                <div className={`${styles.frontAbout__skills} ${styles.soft}`}>
                  <h4 className={styles.frontAbout__skillsTitle}>
                    SKILLS TO BE ACQUIRED
                  </h4>
                  <ul className={styles.frontAbout__list}>
                    <li className={styles.frontAbout__listItem}>
                      Advanced Javascript
                    </li>
                    <li className={styles.frontAbout__listItem}>React.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
