import { useStaticQuery, graphql } from 'gatsby';

const usePromoSection = () => {

    const sectionData = useStaticQuery(graphql`
        {
            wpgraphql {
                pages(where: {id: 57, status: PUBLISH}) {
                    edges {
                    node {
                        title
                        content
                    }
                    }
                }
            }
        }
    `);

    return sectionData.wpgraphql.pages;
}

export default usePromoSection;