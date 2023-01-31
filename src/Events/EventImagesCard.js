import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'


const EventImagesCard = (props) => {
    const textColorCondition = (props.bgColor == "bg-NAFYellow" ? " text-black" : " text-white")
    return (
        <div class="bg-white w-[85%] h-fit mx-auto py-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)] text-center">
            <div class="font-syneExtraBold text-2xl font-bold mt-2">{props.title}</div>
            <div className={"w-full mt-3"}>
                <div className={"w-[80%] lg:w-[30%] mx-auto rounded-lg p-1 font-syne " + props.bgColor + textColorCondition}>
                    {props.date.split('\n').map(str => <p>{str}</p>)}
                </div>
            </div>
            <div class="flex my-1 flex-wrap justify-center">
                {
                    props.imgs.map((img, index) =>
                        <div class="basis-full my-1 md:basis-[40%] lg:basis-[20%] mx-2">
                            <img src={QRCode} class="h-[300px] w-full"></img>
                        </div>
                    )
                }
            </div>
            <div className={"mt-3 mx-3 text-md font-syne"}>{props.content}</div>
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

export default EventImagesCard