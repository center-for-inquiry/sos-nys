import React from "react";
import SingleMeeting from "./single-meeting";
import { useMondayMeetings } from "../hooks/meetings/useMondayMeetings";
import { useTuesdayMeetings } from "../hooks/meetings/useTuesdayMeetings";
import { useWednesdayMeetings } from "../hooks/meetings/useWednesdayMeetings";
import { useThursdayMeetings } from "../hooks/meetings/useThursdayMeetings";
import { useFridayMeetings } from "../hooks/meetings/useFridayMeetings";


const Meetings = () => {

        const meetList = {
            "Monday": useMondayMeetings(),
            "Tuesday": useTuesdayMeetings(),
            "Wednesday": useWednesdayMeetings(),
            "Thursday": useThursdayMeetings(),
            "Friday": useFridayMeetings()
        }

        function getMeetingDay(day){
            if (meetList[day].edges.length < 1){
                return null;
            } else {
               return(
                    meetList[day].edges.map(edge => {
                        let nd = edge.node;

                        return(
                            <SingleMeeting
                            key={nd.postId} 
                            city={nd.title} 
                            time={`${nd.meetings.startTime} - ${nd.meetings.endTime}`} 
                            addressName={nd.meetings.location} 
                            addressLoc={nd.meetings.mapLink} />
                        );
                    })
                ); 
            }
        }

        function getMeetingHeader(day){
            if (meetList[day].edges.length < 1){
                return null;
            } else {
                return (
                    <h5 className="blue-background mt-4">
                        <strong>
                            {meetList[day].edges[0].node.categories.edges[0].node.name}
                        </strong>
                    </h5>
                );
            }
        }

        return (
            <>
            <h3 className="mb-4">SOS Meetings in New York State</h3>
            <div className="row" id="meetings-row">
                <div className="col-12 col-sm-6">
                
                    {getMeetingHeader("Monday")}
                    {getMeetingDay("Monday")}

                    {getMeetingHeader("Tuesday")}
                    {getMeetingDay("Tuesday")}

                    {getMeetingHeader("Wednesday")}
                    {getMeetingDay("Wednesday")}

                </div>
                <div className="col-12 col-sm-6"> 
                    
                    {getMeetingHeader("Thursday")}
                    {getMeetingDay("Thursday")}

                    {getMeetingHeader("Friday")}
                    {getMeetingDay("Friday")}

                </div>
            </div>

            <p className="mx-auto mt-4"><em>*CLOSED MEETINGs may only be attended by the facilities' residents and SOS volunteers.</em></p>
                
            </>
        )

}

export default Meetings;