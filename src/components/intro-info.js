import React from 'react';
import useInfoSection from '../hooks/sections/useInfoSection';

const IntroInfo = (props) => {
    const content = useInfoSection().content;

    function createMarkup(){
        return {__html: content};
    }

    return (
        <>
            <div dangerouslySetInnerHTML={createMarkup()}></div>
            <hr />
        </>
    )
}

export default IntroInfo;