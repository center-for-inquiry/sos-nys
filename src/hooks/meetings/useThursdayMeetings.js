import { useStaticQuery, graphql } from 'gatsby';


export const useThursdayMeetings = () => {

    const meetingData = useStaticQuery(graphql`
        {
            wpgraphql {
            posts(where: {categoryName: "Thursday"}) {
                edges {
                node {
                    title
                    meetings {
                    endTime
                    fieldGroupName
                    location
                    mapLink
                    startTime
                    zipCode
                    }
                    categories {
                    nodes {
                        name
                    }
                    }
                }
                }
            }
            }
        }
    `);

    return meetingData.wpgraphql.posts;

}