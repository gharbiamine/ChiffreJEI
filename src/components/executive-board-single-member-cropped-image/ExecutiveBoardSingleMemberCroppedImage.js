import styles from "./executiveBoardSingleMemberCroppedImage.module.css"

export const ExecutiveBoardSingleMemberCroppedImage= ( {name , setMember}) => {


    return (
        <>
<div
          onMouseOver={()=>setMember(name.id)}

          onMouseLeave={()=>setMember("")}
          className={styles.bureau}
>
            <img
                src={`assets/executive-board-images/images/${name.id}1.png`}
                alt= ""



                className={styles.singleCroppedImage}
            />
</div>
        </>
    )
}