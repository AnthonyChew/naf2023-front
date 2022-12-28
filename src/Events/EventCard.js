import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = (props) => {
  const textColorCondition = (props.bgColor == "bg-NAFYellow" ? " text-black" : " text-white")
    return (
        <div class="min-h-[300px] bg-white w-[100%] lg:w-[90%] h-fit pb-5 mb-10 lg:mb-28 mx-auto py-2 pt-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)]">
            <div class="italic font-yerk text-2xl font-bold mt-2">{props.title}</div>
            <div className={"rounded-lg mx-5 p-1 mt-3 " + props.bgColor + textColorCondition}>{props.date}</div>
            <div className={"mt-3 mx-3 text-md "}>{props.content}</div>
            {
                props.button ?
                    <div class="mt-7 mx-3">
                        <Link to={props.href} type="button"
                            className={"inline-block px-6 py-2.5 h-[45px] text-white rounded-lg shadow-md " + props.bgColor}>
                            {props.button}
                        </Link>
                    </div> : <div></div>
            }
        </div>
    )
}

export default EventCard