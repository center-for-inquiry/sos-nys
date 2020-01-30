import React from "react";

const SingleMeeting = (props) => {
    
    function createCityTimeMarkup(){
        return {__html: `${props.city} / ${props.time}`}
    }

    function createAddressMarkup(){
        return {__html: props.addressName};
    }

    return (
        <>
            <p className="mt-4 mb-2">
                <strong dangerouslySetInnerHTML={createCityTimeMarkup()}></strong>
            </p>
            
            <a rel="noopener noreferrer" target="_blank" href={props.addressLoc}>
                <span className="meet-address" dangerouslySetInnerHTML={createAddressMarkup()}></span>
            </a>
        </>
    )
}

export default SingleMeeting;