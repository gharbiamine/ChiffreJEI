import styles from "./homePage.module.css";
import {ExecutiveBoard} from "../../components/executive-board/ExecutiveBoard";


export const HomePage = ()=> {


    return(
        <>

            <div className={styles.global}>
                <ExecutiveBoard/>

            </div>
        </>
    )
}