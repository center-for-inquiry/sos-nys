import { useStaticQuery, graphql } from 'gatsby';


export const useMondayMeetings = () => {

    const meetingData = useStaticQuery(graphql`
        {
            wpgraphql {
            posts(where: {categoryName: "Monday"}) {
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