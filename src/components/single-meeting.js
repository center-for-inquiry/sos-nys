import React from "react";

const SingleMeeting = (props) => {
    function createMarkup(){
        return {__html: props.addressName};
    }

    return (
        <>
            <p className="my-4"><strong>{props.city} / {props.time}</strong><br />
            <a rel="noopener noreferrer" target="_blank" href={props.addressLoc}><span className="meet-address"><span dangerouslySetInnerHTML={createMarkup()}></span>
            </span></a></p>
        </>
    )
}

export default SingleMeeting;