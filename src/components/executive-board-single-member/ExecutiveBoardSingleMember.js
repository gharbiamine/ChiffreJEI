
import styles from "./executiveBoardSingleMember.module.css";




export const ExecutiveBoardSingleMember = ( {member ,setMember}) => {




    return (
        <>
    <div className={styles.bureau}>


                <img
                    src={`assets/executive-board-images/${member}_colored_1500.png`}


                />




    </div>


        </>
    )
}