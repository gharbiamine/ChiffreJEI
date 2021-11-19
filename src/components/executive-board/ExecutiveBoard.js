
import styles from "./executiveBoard.module.css"
import {useState} from "react";
import {ExecutiveBoardSingleMember} from "../executive-board-single-member/ExecutiveBoardSingleMember";

import {ExecutiveBoardSingleMemberCroppedImage} from "../executive-board-single-member-cropped-image/ExecutiveBoardSingleMemberCroppedImage";
import {EXECUTIVE_BOARD_DATA_ID} from "../executive-board-single-member-cropped-image/dataId";



export const ExecutiveBoard = ()=> {
 const [member ,setMember] = useState("") ;

    return (
        <>

            <div className={styles.global}>

                    <div className={styles.globalImg}>

                        {
                            EXECUTIVE_BOARD_DATA_ID.map(id => <ExecutiveBoardSingleMemberCroppedImage
                                name={id}
                                setMember={setMember}

                            />)
                        }



                        {

                            member!=="" && (<ExecutiveBoardSingleMember member={member} setMember={setMember} />
                            )
                        }

                    </div>






            </div>

        </>

    )
}

