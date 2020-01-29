import { useStaticQuery, graphql } from 'gatsby';


export const useWednesdayMeetings = () => {

    const meetingData = useStaticQuery(graphql`
        {
            wpgraphql {
            posts(where: {categoryName: "Wednesday"}) {
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