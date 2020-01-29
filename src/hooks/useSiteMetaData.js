import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetaData = () => {

    const metaData = useStaticQuery(graphql`
        {
            wpgraphql {
                generalSettings {
                    title
                    description
                }
            }
        }
    `); 

    return metaData.wpgraphql.generalSettings;
}

export default useSiteMetaData;