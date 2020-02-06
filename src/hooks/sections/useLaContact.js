import { useStaticQuery, graphql } from 'gatsby';

const useLaContact = () => {

    const sectionData = useStaticQuery(graphql`
        {
            wpgraphql {
                pages(where: {id: 64, status: PUBLISH}) {
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

export default useLaContact;