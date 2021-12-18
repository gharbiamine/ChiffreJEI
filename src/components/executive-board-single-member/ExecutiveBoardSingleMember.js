
import styles from "./executiveBoardSingleMember.module.css";
import {ExecutiveBoardSingleMemberInfos} from "../executive-board-single-member-infos/ExecutiveBoardSingleMemberInfos";




export const ExecutiveBoardSingleMember = ( {member }) => {




    return (
        <>
    <div className={styles.bureau} >


                <img
                    src={`assets/executive-board-images/${member}_colored_1500.png`}
                    alt="executive board "

                />



            <ExecutiveBoardSingleMemberInfos name={member}/>



    </div>



        </>
    )
}