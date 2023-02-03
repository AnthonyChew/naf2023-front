import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment';
import FocusedImage from '../SharedPages/FocusImage.js';
import Modal from "react-modal";
import "../SharedPages/ModalStyle.css";
import SignUpPopup from "../Workshop/SignUpPopup.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventCard = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedWorkshop, SetSelectedWorkshop] = useState(null);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalOpen]);


    function handelToastCallback() {
        toast("Signed up for workshop! Please check your email!");
    }

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

    function info(workshop)
    {
        const workshopDate = moment(workshop.date).format('YYYY-MM-DD');

        //console.log(workshop);
        if (workshopDate <= current_date) {
            alert('Event ended!');
        }
        else {

            history('/workshop', {
                state: { workshop }
            });
        }
    }

    function signUp(workshop) {
        const workshopDate = moment(workshop.date).format('YYYY-MM-DD');

        //console.log(workshop);
        if (workshopDate <= current_date) {
            alert('Event ended!');
        }
        else {
            SetSelectedWorkshop(workshop);
            setModalOpen(true)
        }
    }

    const textColorCondition = (props.bgColor == "bg-NAFYellow" ? " text-black" : " text-white")
    const workshops = props.workshops ? props.workshops : false;

    const current_date = moment().format('YYYY-MM-DD');
    const history = useNavigate();
    return (
        <>
            <Modal isOpen={modalOpen}>
                <SignUpPopup workshop={selectedWorkshop} toastCallBack={handelToastCallback} parentCallback={() => setModalOpen(false)}></SignUpPopup>
            </Modal>
            {!workshops ?
                <div class="min-h-[300px] bg-white w-[100%] h-fit pb-5 mb-10 lg:mb-[5rem] py-2 pt-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)]">
                    <div class="font-syneExtraBold text-2xl font-bold mt-2 md:whitespace-nowrap">{props.title}</div>
                    {!workshops && <div class="md:mx-5"><div className={"rounded-lg p-1 font-syne mt-3 w-fit px-10 mx-5 sm:mx-auto " + props.bgColor + textColorCondition}>{props.date.split('\n').map(str => <p>{str}</p>)}</div></div>}
                    <div className={"mt-3 mx-3 text-md font-syne whitespace-pre-wrap"}>{props.content}</div>
                    {
                        props.button ?
                            <div class="mt-7 mx-3">
                                <Link to={props.href} type="button"
                                    className={"inline-block px-6 py-2.5 h-[45px] text-white rounded-lg shadow-md " + props.bgColor}>
                                    {props.button}
                                </Link>
                            </div> : <div></div>
                    }
                </div >
                :
                <div class="min-h-[300px] w-[100%] h-fit pb-5 mb-10 lg:mb-[5rem] py-2 pt-7">

                    <div class='flex lg:flex-wrap lg:flex-row flex-col justify-around gap-10 mt-5'>
                        {
                            workshops.map((workshop) => {
                                return (
                                    <div class='flex flex-col lg:flex-row lg:w-[40%] lg:h-[30%] gap-2 items-center  min-w-0 justify-around p-3 border-4 border-black ml-1 mr-1 bg-white md:shadow-[10px_10px_0_0_rgba(0,0,0)]'>
                                        <div class='md:w-[280px] md:h-[200px] w-[200px] h-[100px]'>
                                            <FocusedImage class='focused-image' imageSrc={workshop.images[0]} x={0} y={0} ></FocusedImage>
                                        </div>
                                        <div class='basis-2/3 flex flex-col max-w-[90%] lg:max-w-full min-w-0'>
                                            <p class="text-2xl font-syne text-ellipsis overflow-hidden whitespace-nowrap lg:max-w-fit max-w-[90%]">{workshop.name}</p>
                                            <p class=" text-bg font-syne text-NAFPurple self-center lg:self-start ">
                                                Vacancies: {workshop.maxParticipants - workshop.numRegistered > 1000
                                                    ? 'Unlimited'
                                                    : workshop.maxParticipants - workshop.numRegistered}
                                            </p>

                                            <p class="font-syne self-center lg:self-start text-ellipsis overflow-hidden whitespace-nowrap max-w-[90%]">
                                                Category:{workshop.category}
                                            </p>
                                            <p class="font-syne self-center lg:self-start text-ellipsis overflow-hidden whitespace-nowrap max-w-[90%]">
                                                Organisor: {workshop.organizer}
                                            </p>
                                            <p class="font-syne self-center lg:self-start">
                                                Date: {workshop.date && workshop.date.substr(0, 10)}
                                            </p>
                                            <p class="font-syne self-center lg:self-start">
                                                Time: {workshop.startTime} - {calculateEndTime(workshop.startTime, workshop.duration)}
                                            </p>
                                            <p class="font-syne self-center lg:self-start">
                                                Duration: {workshop.duration} minutes
                                            </p>
                                            <div class='flex lg:justify-end justify-center gap-2 mt-2 '>
                                                <button
                                                    onClick={() => signUp(workshop)}
                                                    class=" md:w-auto bg-NAFPurple h-[30px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                                >
                                                    <p class="font-syne self-center lg:self-start px-1">
                                                        Sign Up
                                                    </p>
                                                </button>
                                                <button
                                                    onClick={() => info(workshop)}
                                                    class=" lg:w-auto bg-NAFPink h-[30px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                                >
                                                    <p class="font-syne self-center lg:self-start px-1">
                                                        More Info
                                                    </p>
                                                </button>
                                            </div>

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
                </div>
            }
            <ToastContainer position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick />
        </>

    )
}

export default EventCard