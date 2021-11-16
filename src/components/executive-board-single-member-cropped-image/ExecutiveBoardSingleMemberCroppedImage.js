import styles from "./executiveBoardSingleMemberCroppedImage.module.css"

export const ExecutiveBoardSingleMemberCroppedImage= ( {name , setMember}) => {


    return (
        <>

            <img
                src={`assets/executive-board-images/images/${name.id}.png`}
                alt= ""

                    onClick={()=>setMember(name.id)}

                className={styles.singleCroppedImage}
            />

        </>
    )
}