import styles from "@/components/Contact/Contact.module.css";

export function Contact() {
  return (
    <>
      <section className={styles.frontContact} id="frontContact">
        <div className={styles.inner}>
          <h3 className={styles.frontContact__heading}>CONTACT</h3>
          <p className={styles.frontContact__description}>
            If you are interested in <span>me</span>,
            <br className={styles.spOnly} />
            contact <span>me</span>!
          </p>
          <table className={styles.frontContact__table}>
            <tbody>
              <tr>
                <th>Email address:</th>
                <td>kenta0810hayashi@gmail.com</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Phone Number:</th>
                <td>+33 7 83 98 78 83</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
