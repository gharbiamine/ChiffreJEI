import styles from "./executiveBoardDismissInfosButton.module.css" ;
import {IoCloseCircle} from "react-icons/all";


export const ExecutiveBoardDismissInfosButton = ( {setMember}) => {

    return (
        <IoCloseCircle
            className={styles.dismissButton}
            onClick={()=>setMember("")}

        />
    )
}