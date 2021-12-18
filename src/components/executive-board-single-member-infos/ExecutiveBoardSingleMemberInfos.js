 import {EXECUTIVE_BOARD_DATA} from "./data";
import styles from "./executiveBoardSingleMemberInfos.module.css"
export const ExecutiveBoardSingleMemberInfos = ( {name})=> {

 const member =  EXECUTIVE_BOARD_DATA.find( member => member.id === name) ;

    return (
        <>


            <div className={styles.infos} >
            <div className={styles.memberName} style={{left:member.memberNamePosition.left,top:member.memberNamePosition.top}}>
                {member.name}
            </div>

            <div className={styles.memberRole} style={{left:member.memberRolePosition.left,top:member.memberRolePosition.top}}>
                {member.role}
            </div>

            </div>


        </>
    )
}
