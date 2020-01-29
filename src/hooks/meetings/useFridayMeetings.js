import { useStaticQuery, graphql } from 'gatsby';


export const useFridayMeetings = () => {

    const meetingData = useStaticQuery(graphql`
        {
            wpgraphql {
            posts(where: {categoryName: "Friday"}) {
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