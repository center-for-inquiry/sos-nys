import { useStaticQuery, graphql } from 'gatsby';

const useLinksSection = () => {

    const sectionData = useStaticQuery(graphql`
        {
            wpgraphql {
                pages(where: {id: 36}) {
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

export default useLinksSection;