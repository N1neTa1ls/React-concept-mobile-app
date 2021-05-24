import React from 'react'
import './date.css'

function time() {
  let curTime = new Date();
  let hours = (curTime.getHours()) < 10?("0" + curTime.getHours()):(curTime.getHours());
  let minutes = (curTime.getMinutes()) < 10?("0" + curTime.getMinutes()):(curTime.getMinutes());;
  let seconds = curTime.getSeconds() < 10?("0" + curTime.getSeconds()):(curTime.getSeconds());;

  return `${hours}:${minutes}:${seconds}`
}

export default function date() {
  setInterval(function () {
    document.getElementById('current-time').innerHTML = time();
}, 1000);
  return (
    <div className="date">
      <div className="clock">
        <p className="time" id="current-time"></p>
      </div>
    </div>
  )
}