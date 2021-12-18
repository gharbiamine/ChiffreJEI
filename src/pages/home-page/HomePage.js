import React, {useState, useEffect} from "react";
import {ExecutiveBoard} from "../../components/executive-board/ExecutiveBoard";
import Timeline from "../../components/timeline/Timeline";
import OurServices from "../../components/our-services/OurServices";
import JeiPresentation from "../../components/jei-presentation/JeiPresentation";
import styles from "./homePage.module.css";
import Panel from "../../components/panels/foreground-panels/Panel";
import Loader from "../../components/loader/Loader";
import {ContactFrame} from "../../components/contact-page/contact-frame/ContactFrame";
import Sidebar from "../../components/sidebar/Sidebar";

function HomePage() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
      var button = document.getElementById("loader");
      button.addEventListener("click", (event) => {
        setLoader(false);
      });
    }, []);
    return loader ? (
      <Loader />
    ) :(
        <div>
            <Sidebar/>
            <div className={styles.parallax}>
                <div className={styles.empty} id="presentation"></div>
                <JeiPresentation/>
                <div className={styles.empty}></div>
                <OurServices/>
                <div className={styles.empty}></div>
                <div className={styles.global} id="board">
                    <ExecutiveBoard/>
                </div>
                <div className={styles.empty} id="timeline"></div>
                <Timeline/>
                <div className={styles.empty}></div>
                <div className={styles.App} id="numbers">
                    <div className={styles.fullscreen}>
                        <div className={styles.panelContainer}>
                            <Panel
                                side={"left"}
                                title={"Projets réalisés"}
                                stat={{start: 1, end: 20, delay: 0, duration: 2}}
                            />
                            <Panel
                                side={"right"}
                                title={"Pourcentage el rojla"}
                                stat={{
                                    start: 50,
                                    end: 100,
                                    delay: 0,
                                    duration: 2,
                                    suffix: "%",
                                }}
                            />
                        </div>
                        <div className={styles.vl}></div>
                    </div>
                </div>
                <div className={styles.empty}></div>
                <div id="contact"><ContactFrame/></div>
                <div className={styles.empty}></div>
            </div>
        </div>
    );
}

export default HomePage;
