import TopBar from "@/components/top-bar";
import styles from "@/styles/support.module.scss";

export default async function Support() {
  return (
    <div className={styles.support}>
      <TopBar />
      <h1 className={styles.title}>Support</h1>
      <div className={styles.content}>
        <p>
          We are sorry to announce that there has been a delay in shipping of
          pre-order sales. This was due to our team wanting to perfect the color
          and packaging of the product prior to shipping them out.
        </p>
        <p>
          Our team has been working on making Zipp - Green Cherry Menthol since
          Spring 2023 and the last thing we want to provide is a mediocre
          product that doesn&apos;t send you to the moon. We greatly appreciate
          your patience and we have set up a special distribution team that will
          be working day and night to ship out all pre-order sales once
          received.
        </p>
        <p>
          If you would like to share your thoughts or have other concerns
          regarding your order please email us:
        </p>
        <p>
          <a href="mailto:support@zipp.rip">support@zipp.rip</a>
        </p>
      </div>
    </div>
  );
}
