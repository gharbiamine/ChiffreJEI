import styles from "./executiveBoardSingleMemberCroppedImage.module.css"
import { useState} from "react";

export const ExecutiveBoardSingleMemberCroppedImage= ( {member , setMember }) => {
    const {id} = member;
const [handle,setHandle] = useState(id);
    const mouseOver = ()=> {
        if(handle){
        clearTimeout(handle);
        setHandle( undefined) ;
        setMember(id)
        }
    }

    const mouseLeave=()=> {
        const localHandle = setTimeout(() => {
            setMember("")
        }, 100);
        setHandle( localHandle) ;

    }


    return (
        <>
<div

onMouseOver={()=>mouseOver()}

onMouseLeave={()=>mouseLeave()}

          className={styles.bureau}
>
            <img
                src={`assets/executive-board-images/cropped-members-images/${member.id}.png`}
                alt= "executive board members"


                className={styles.singleCroppedImage}
            />
</div>
        </>
    )
}