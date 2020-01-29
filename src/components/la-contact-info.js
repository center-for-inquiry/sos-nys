import React from 'react';
import useLaContact from '../hooks/sections/useLaContact';

const LAContactInfo = (props) => {
    
    const content = useLaContact().content;

    function contentMarkup(){
        return {__html: content};
    }

    return(
        <>
            <span dangerouslySetInnerHTML={contentMarkup()}></span>
        </>
    );

}

export default LAContactInfo;