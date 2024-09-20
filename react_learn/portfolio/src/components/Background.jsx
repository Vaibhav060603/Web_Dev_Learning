import React from 'react'
import "./Background.css";

export default function Background() {
  return (
    <>
        <div>
            <video src="./public/rotating_earth.mp4" id='idb1' autoPlay loop muted playsInline></video>

            <div id='idb2'></div>
        </div>
    </>
  )
}
