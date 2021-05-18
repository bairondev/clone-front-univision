import React from 'react'

const MsgForm = ({type, msg}:iMsgForm) => {
    return (
        <div className={`bg-c1 text-white rounded py-1 px-2 mt-2 font-bold animate-bounce  ${type}`}>
            <p>{msg}</p>
        </div>
    )
}

interface iMsgForm {
    type: string;
    msg: string;
}

export default  MsgForm;