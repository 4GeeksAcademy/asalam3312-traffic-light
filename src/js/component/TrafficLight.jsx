import React, { useState } from 'react'

const TrafficLight = () => {
const [light,setLight]=useState('yellow');

  return (
    <div clasName="father">
        <div onclick={()=> setLight("red")} className={"red"+(light === red ? "On" : "")}></div>
        <div onclick={()=> setLight("yellow")} className={"yellow"+(light === yellow ? "On" : "")}></div>
        <div onclick={()=> setLight("green")} className={"green"+(light === green ? "On" : "")}></div>
    </div>
  )
}

export default TrafficLight