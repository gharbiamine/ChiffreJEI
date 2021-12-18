import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import styles from "./Sidebar.module.css";
import {Link} from 'react-scroll'


const Sidebar = () => {
    const targetName = styles.bar;
    const [reveal, setReveal] = useState(false)
    const show = reveal ? styles.reveal : styles.hide;
    return (
        <div>
            <div className={styles.drawer}>
                <div onClick={(e) => {
                    setReveal(!reveal);
                    console.log(show);
                    //tries to solve the css divider z-index value conflict when animating
                    //classname is chaotic due to the usage of css modules
                    // if (reveal) {
                    //     document.getElementsByClassName(targetName)[0].style.opacity  = "1";
                    //
                    // } else {
                    //     document.getElementsByClassName(targetName)[0].style.opacity  = "0";
                    // }
                }}><FontAwesomeIcon icon={faBars} className={styles.icon} /></div>
                <div className={`${styles.bar} ${show} `}>
                    <div className={styles.vl}/>
                    <div>
                        <ul className={styles.list}>
                            <li><Link to="presentation" spy={true} smooth={true}>Introduction</Link></li>
                            <li><Link to="numbers" spy={true} smooth={true}>Numbers</Link></li>
                            <li><Link to="timeline" spy={true} smooth={true}>Timeline</Link></li>
                            <li><Link to="blog" spy={true} smooth={true}>Blog Preview</Link></li>
                            <li><Link to="contact" spy={true} smooth={true}>Contact Form</Link></li>
                            <li><Link to="board" spy={true} smooth={true}>Executive Board</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Sidebar;
