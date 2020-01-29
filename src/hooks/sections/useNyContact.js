import { useStaticQuery, graphql } from 'gatsby';

const useNyContact = () => {

    const sectionData = useStaticQuery(graphql`
        {
            wpgraphql {
                pages(where: {id: 38}) {
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

export default useNyContact;