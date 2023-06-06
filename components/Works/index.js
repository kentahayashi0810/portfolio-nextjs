import styles from "@/components/Works/Works.module.css";

export function Works() {
  return (
    <>
      <section className={styles.frontWorks} id="frontWorks">
        <div className={styles.inner}>
          <h3 className={styles.frontWorks__heading}>WORKS</h3>
          <p className={styles.frontWorks__description}>
            Here is a collection of websites / projects I have worked on. The
            passcode is "0000".
          </p>
          <ul className={styles.frontWorks__flexbox}>
            <li className={styles.frontWorks__flexItem}>
              <a href="https://kentahayashi.sakura.ne.jp/ajc/">
                <h4 className={styles.frontWorks__flexItemTitle}>
                  株式会社AJC
                </h4>

                <figure className={styles.frontWorks__flexItemImage}>
                  <div className={styles.frontWorks__imageWrap}></div>
                  <img src="common/front_frontWorks_1.png" alt="" />
                </figure>

                <dl className={styles.frontWorks__table}>
                  <dt>Tools I used:</dt>
                  <dd>HTML, SCSS, JQuery, PHP</dd>
                  <dt>Pages I coded:</dt>
                  <dd>All</dd>
                  <dt>Features:</dt>
                  <dd>
                    Responsive, Slider, Modal Window, Blog Post Output,
                    accordions, Flexbox
                  </dd>
                </dl>
              </a>
            </li>

            <li className={styles.frontWorks__flexItem}>
              <a href="https://kentahayashi.sakura.ne.jp/bigblue/">
                <h4 className={styles.frontWorks__flexItemTitle}>BIG BLUE</h4>

                <figure className={styles.frontWorks__flexItemImage}>
                  <div className={styles.frontWorks__imageWrap}></div>
                  <img src="common/front_frontWorks_2.png" alt="" />
                </figure>

                <dl className={styles.frontWorks__table}>
                  <dt>Tools I used:</dt>
                  <dd>HTML, SCSS, JQuery, PHP</dd>
                  <dt>Pages I coded:</dt>
                  <dd>All</dd>
                  <dt>Features:</dt>
                  <dd>
                    Responsive, Blog Post Output, Javascript Animation, Flexbox
                  </dd>
                </dl>
              </a>
            </li>

            <li className={styles.frontWorks__flexItem}>
              <a href="https://kentahayashi.sakura.ne.jp/pandablog/">
                <h4 className={styles.frontWorks__flexItemTitle}>Panda Blog</h4>

                <figure className={styles.frontWorks__flexItemImage}>
                  <div className={styles.frontWorks__imageWrap}></div>
                  <img src="common/front_frontWorks_3.png" alt="" />
                </figure>

                <dl className={styles.frontWorks__table}>
                  <dt>Tools I used:</dt>
                  <dd>HTML, SCSS, JQuery, PHP</dd>
                  <dt>Pages I coded:</dt>
                  <dd>All</dd>
                  <dt>Features:</dt>
                  <dd>
                    Responsive, Category, Tag, Search Bar, Aside Section, Blog
                    Post Output, accordion, Flexbox
                  </dd>
                </dl>
              </a>
            </li>

            <li className={styles.frontWorks__flexItem}>
              <a href="https://kentahayashi.sakura.ne.jp/luckyclover/">
                <h4 className={styles.frontWorks__flexItemTitle}>
                  Lucky Clover
                </h4>

                <figure className={styles.frontWorks__flexItemImage}>
                  <div className={styles.frontWorks__imageWrap}></div>
                  <img src="common/front_frontWorks_4.png" alt="" />
                </figure>

                <dl className={styles.frontWorks__table}>
                  <dt>Tools I used:</dt>
                  <dd>HTML, SCSS, JQuery, PHP</dd>
                  <dt>Pages I coded:</dt>
                  <dd>All except for the front page, header, and footer</dd>
                  <dt>Features:</dt>
                  <dd>Responsive, Modal Window, Blog Post Output, Flexbox</dd>
                </dl>
              </a>
            </li>

            <li className={styles.frontWorks__flexItem}>
              <a href="https://kentahayashi.sakura.ne.jp/clane-lp/">
                <h4 className={styles.frontWorks__flexItemTitle}>
                  CLANE給付金(LP)
                </h4>

                <figure className={styles.frontWorks__flexItemImage}>
                  <div className={styles.frontWorks__imageWrap}></div>
                  <img src="common/front_frontWorks_5.png" alt="" />
                </figure>
                <dl className={styles.frontWorks__table}>
                  <dt>Tools I used:</dt>
                  <dd>HTML, SCSS</dd>
                  <dt>Pages I coded:</dt>
                  <dd>All</dd>
                  <dt>Features:</dt>
                  <dd>Responsive, Flexbox</dd>
                </dl>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
