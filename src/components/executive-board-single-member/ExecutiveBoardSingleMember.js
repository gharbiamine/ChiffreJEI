
import styles from "./executiveBoardSingleMember.module.css";
import {ExecutiveBoardDismissInfosButton} from "../executive-board-dismiss-infos-button/ExecutiveBoardDismissInfosButton";



export const ExecutiveBoardSingleMember = ( {member ,setMember}) => {




    return (
        <>
    <div className={styles.bureau}>


                <img
                    src={`assets/executive-board-images/${member}_colored_1500.png`}


                />

            <ExecutiveBoardDismissInfosButton setMember = {setMember} />


    </div>


        </>
    )
}