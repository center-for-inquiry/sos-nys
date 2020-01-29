import React from 'react';
import useLinksSection from '../hooks/sections/useLinksSection';

const LinksSection = () => {
    const title = useLinksSection().title;
    const content = useLinksSection().content;

    function listMarkup(){
        return {__html: content};
    }

    function headerMarkup(){
        return {__html: title};
    }

    return (
        <>
            <h5 className="blue-background mt-5 mb-3 blue-title" dangerouslySetInnerHTML={headerMarkup()}></h5>
            <span dangerouslySetInnerHTML={listMarkup()}></span>
        </>
    )
}

export default LinksSection;