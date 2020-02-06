import { useStaticQuery, graphql } from 'gatsby';


export const useMondayMeetings = () => {

    const meetingData = useStaticQuery(graphql`
    {
      wpgraphql {
        posts(where: {categoryName: "Monday", status: PUBLISH, orderby: {field: TITLE, order: ASC}}) {
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
              categories {
                edges {
                  node {
                    name
                  }
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