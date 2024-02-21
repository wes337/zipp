import { IconShoppingCart } from "@tabler/icons-react";
import TopBar from "@/components/top-bar";
import Can from "@/components/can";
import Panel from "@/components/panel";
import Button from "@/components/button";
import styles from "@/styles/home.module.scss";

const LEAD_TEXT = `Zipp™ contains highly delicious additives which stim-u-late your drinking experience and send your mind and taste buds rocketing through the roof! Your parents or landlord will need to hire a live-in contractor to do repairs for all of the roof holes you'll make after every sip! Zipp™ is that sicko nasty green gack that you can actually be proud to drink! Zipp's cracked-out research team has created a legendary formula that's super-richin flavor! Zipp™ is the future of the modern American beverage! Bust into a Zipp™ right this second or it'll be too late!`;

export default function Home() {
  return (
    <div className={styles.home}>
      <TopBar />
      <div className={styles.can}>
        <Can />
      </div>
      <div className={styles.lead}>
        <Panel>
          <p>{LEAD_TEXT}</p>
        </Panel>
        <Button>
          <IconShoppingCart stroke={4} size={40} /> Buy
        </Button>
        <div className={styles.hotline}>
          <img src="/images/hotline.png" alt="" />
        </div>
      </div>
    </div>
  );
}
