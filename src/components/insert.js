import React from "react";
import usePromoSection from "../hooks/sections/usePromoSection";

const Insert = () => {
    const content = usePromoSection().content;
    
    function createMarkup(){
        return {__html: content};
    }
    
    return (
        <div dangerouslySetInnerHTML={createMarkup()}></div>
    );
}

export default Insert;
