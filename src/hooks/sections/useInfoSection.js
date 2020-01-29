import { useStaticQuery, graphql } from 'gatsby';

const useInfoSection = () => {

    const sectionData = useStaticQuery(graphql`
        {
            wpgraphql {
                pages(where: {id: 4}) {
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

export default useInfoSection;