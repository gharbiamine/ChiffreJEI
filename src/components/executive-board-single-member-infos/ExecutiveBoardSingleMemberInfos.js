 import {EXECUTIVE_BOARD_DATA} from "./data";
export const ExecutiveBoardSingleMemberInfos = ( {name})=> {

 const member =  EXECUTIVE_BOARD_DATA.find( member => member.id === name) ;

    return (
        <>
            {
                !member && (
                    <h1> Bureau executif mandat 2020 -2021</h1>
                )
            }
            {member && (
            <>
            <h1>
                {member.name}
            </h1>
            <h1>
                {member.email}
            </h1>
            <h1>
                {member.role}
            </h1>
            <h1>
                {member.phoneNumber}
            </h1>
            <h1>
                {member.quote}
        </h1>
            </>
                )}

        </>
    )
}
