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

    return sectionData.wpgraphql.pages.edges[0].node;
}

export default usePromoSection;