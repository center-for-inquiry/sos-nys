import React from 'react';
import useNyContact from '../hooks/sections/useNyContact';

const NYContactInfo = (props) => {
    
    const content = useNyContact().content;

    function contentMarkup(){
        return {__html: content};
    }

    return(
        <>
            <span dangerouslySetInnerHTML={contentMarkup()}></span>
        </>
    );

}

export default NYContactInfo;