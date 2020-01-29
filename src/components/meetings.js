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

        return (
            <>
            <h3 className="mb-4">SOS Meetings in New York State</h3>
            <div className="row" id="meetings-row">
                <div className="col-12 col-sm-6">
                    <h5 className="blue-background"><strong>Monday</strong></h5>
                    {getMeetingDay("Monday")}
                    
                    <h5 className="blue-background"><strong>Tuesday</strong></h5>
                    {getMeetingDay("Tuesday")}
                    
                    <h5 className="blue-background"><strong>Wednesday</strong></h5>
                    {getMeetingDay("Wednesday")}
                    
                </div>
                <div className="col-12 col-sm-6"> 
                    <h5 className="blue-background"><strong>Thursday</strong></h5>
                    {getMeetingDay("Thursday")}

                    <h5 className="blue-background"><strong>Friday</strong></h5>
                    {getMeetingDay("Friday")}

                </div>
            </div>

            <p className="mx-auto mt-4"><em>*CLOSED MEETINGs may only be attended by the facilities' residents and SOS volunteers.</em></p>
                
            </>
        )

}

export default Meetings;