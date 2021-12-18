import video from '../../assets/videos/IntroductiveVideo/JuniorEntreprise.mp4';
import styles from "./introductiveVideo.module.css";
import poster from "../../assets/images/JeiPresentation/jei_team.jpg";
function IntroductiveVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <video
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
          className={styles.video}
          poster={poster}
        />
      </div>
    </div>
  );
}
export default IntroductiveVideo;
