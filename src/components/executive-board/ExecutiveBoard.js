
import styles from "./executiveBoard.module.css"
import {useState} from "react";
import {ExecutiveBoardSingleMember} from "../executive-board-single-member/ExecutiveBoardSingleMember";

import {ExecutiveBoardSingleMemberCroppedImage} from "../executive-board-single-member-cropped-image/ExecutiveBoardSingleMemberCroppedImage";
import {EXECUTIVE_BOARD_DATA_ID} from "../executive-board-single-member-cropped-image/dataId";
import {ExecutiveBoardAnimatedTitle} from "../executive-board-animated-title/ExecutiveBoardAnimatedTitle";



export const ExecutiveBoard = ()=> {
  const [member ,setMember] = useState("") ;
    console.log("member " + member)
    return (
        <>
            <div className={styles.global}>
                    <div className={styles.globalImg}>
                        {
                            EXECUTIVE_BOARD_DATA_ID.map(id => <ExecutiveBoardSingleMemberCroppedImage
                                member={id}
                                setMember={setMember}
                                key={id.id}
                            />)
                        }
                        <ExecutiveBoardAnimatedTitle/>
                        {
                            member!=="" && (<ExecutiveBoardSingleMember member={member}  />
                            )
                        }

                    </div>
            </div>
        </>

    )
}

