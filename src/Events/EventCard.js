import React from 'react'

const EventCard = (props) => {
  return (
    <div class="min-h-[300px] bg-white w-[90%] h-fit mb-28 mx-auto py-2 pt-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)]">
        <div class="italic font-yerk text-2xl font-bold mt-2">{props.title}</div>
        <div class="rounded-lg text-white bg-NAFPurple mx-5 p-1 mt-3">{props.date}</div>
        <div class="mt-3 mx-3 text-md">{props.content}</div>
    </div>
  )
}

export default EventCard