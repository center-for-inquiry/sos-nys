import { useStaticQuery, graphql } from 'gatsby';


export const useAllMeetings = () => {

    const meetingData = useStaticQuery(graphql`
        {
            wpgraphql {
            posts {
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
                }
                }
            }
            }
        }
    `);

    return meetingData.wpgraphql.posts;

}