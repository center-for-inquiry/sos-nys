import React from "react";
import usePromoSection from "../hooks/sections/usePromoSection";

const Insert = () => {
    const query = usePromoSection();
    if (query.edges.length > 0){
        function createMarkup(){
            return {__html: query.edges[0].node.content};
        }
        
        return (
            <>
                <div dangerouslySetInnerHTML={createMarkup()}></div>
                <hr />
            </>
        );
    } else {
        return null;
    }
    
    
}

export default Insert;
