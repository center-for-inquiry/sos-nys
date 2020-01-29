import { useStaticQuery, graphql } from 'gatsby';


export const useTuesdayMeetings = () => {

    const meetingData = useStaticQuery(graphql`
        {
            wpgraphql {
            posts(where: {categoryName: "Tuesday"}) {
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
                      postId
                    }
                  }
                }
              }
            }
    `);

    return meetingData.wpgraphql.posts;

}