import styles from "@/components/Greeting/Greeting.module.css";

export function Greeting() {
  return (
    <>
      <section className={styles.frontGreeting}>
        <div className={styles.inner}>
          <div className={styles.frontGreeting__box}>
            <p className={styles.frontGreeting__intro}>Hi, My name is</p>
            <h2 className={styles.frontGreeting__heading1}>Kenta Hayashi.</h2>

            <h3 className={styles.frontGreeting__heading2}>
              I work with Passion.
            </h3>

            <p className={styles.frontGreeting__text}>
              I am a Front End Developer, and an Enthusiastic Learner.
            </p>

            <button className={styles.frontGreeting__button}>
              <a href="#frontWorks">Check Out My Works!</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
