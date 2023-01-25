import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment';

const EventCard = (props) => {
    function calculateEndTime(startTime, duration) {
        let time = new Date();
        let timeSplit = startTime.split(':');
        time.setHours(parseInt(timeSplit[0]));
        time.setMinutes(parseInt(timeSplit[1]));

        let newTime = new Date(time.getTime() + duration * 60000); // 60,000 ms

        return (
            newTime.getHours().toString() +
            ':' +
            (newTime.getMinutes() < 10 ? '0' : '') +
            newTime.getMinutes().toString()
        );
    }

    function signUp(workshop) {
        console.log(workshop);
        history('/workshop', {
            state: { workshop} } );
    }

    const textColorCondition = (props.bgColor == "bg-NAFYellow" ? " text-black" : " text-white")
    const workshops = props.workshops ? props.workshops : false;

    const current_date = moment().format('YYYY-MM-DD');
    const history = useNavigate();
    return (
        <div class="min-h-[300px] bg-white w-[100%] h-fit pb-5 mb-10 lg:mb-[5rem] py-2 pt-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)]">
            <div class="font-syneExtraBold text-2xl font-bold mt-2">{props.title}</div>
            {!workshops && <div className={"rounded-lg p-1 mt-3 w-fit px-10 mx-auto " + props.bgColor + textColorCondition}>{props.date}</div>}
            <div className={"mt-3 mx-3 text-md whitespace-pre-wrap"}>{props.content}</div>
            {
                props.button ?
                    <div class="mt-7 mx-3">
                        <Link to={props.href} type="button"
                            className={"inline-block px-6 py-2.5 h-[45px] text-white rounded-lg shadow-md " + props.bgColor}>
                            {props.button}
                        </Link>
                    </div> : <div></div>
            }
            {
                workshops &&
                <div class='flex md:flex-wrap md:flex-row flex-col justify-around gap-10 mt-5'>
                    {
                        workshops.map((workshop) => {
                            return (
                                <div class='flex flex-col md:flex-row md:w-[40%] md:h-[30%] gap-10 items-center  min-w-0 justify-around p-3 border-2 border-black ml-1 mr-1 bg-NAFOrange md:shadow-[10px_10px_0_0_rgba(0,0,0)]'>
                                    <img class='basis-1/3 w-[200px] h-[200px]' src={workshop.images[0]} />
                                    <div class='basis-2/3 flex flex-col max-w-[90%] md:max-w-full min-w-0'>
                                        <p class="text-2xl font-syne text-ellipsis overflow-hidden whitespace-nowrap md:max-w-fit max-w-[90%]">{workshop.name}</p>
                                        <p class="bg-white w-fit text-xl font-syne pl-2 pr-2 mt-2 mb-2 self-center md:self-start">
                                            Vacancies:
                                            {workshop.maxParticipants - workshop.numRegistered > 1000
                                                ? 'Unlimited'
                                                : workshop.maxParticipants - workshop.numRegistered}
                                        </p>
                                        <p class="font-syne self-center md:self-start text-ellipsis overflow-hidden whitespace-nowrap max-w-[90%]">
                                            Category:{workshop.category}
                                        </p>
                                        <p class="font-syne self-center md:self-start">
                                            Organisor: {workshop.organizer}
                                        </p>
                                        <p class="font-syne self-center md:self-start">
                                            Date: {workshop.date && workshop.date.substr(0, 10)}
                                        </p>
                                        <p class="font-syne self-center md:self-start">
                                            Time: {workshop.startTime} - {calculateEndTime(workshop.startTime, workshop.duration)}
                                        </p>
                                        <p class="font-syne self-center md:self-start">
                                            Duration: {workshop.duration} minutes
                                        </p>
                                        <button
                                            onClick={() => signUp(workshop)}
                                            class=" md:w-auto bg-blue-600 h-[30px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                        >
                                            <p class="font-syne self-center md:self-start">
                                                Sign Up
                                            </p>
                                        </button>
                                    </div>
                                    {
                                        current_date <= workshop.date &&
                                        <button onClick={() => history('/workshop')} />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div >
    )
}

export default EventCard