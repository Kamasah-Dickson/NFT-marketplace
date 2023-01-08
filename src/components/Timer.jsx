import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
	let interval;
	const [hours, setHours] = useState(9);
	const [minutes, setMinutes] = useState(50);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		interval = setInterval(() => {
			setSeconds((seconds) => seconds - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (seconds < 0) {
			setMinutes((minutes) => minutes - 1);
			setSeconds(59);
		}
	}, [seconds]);

	useEffect(() => {
		if (minutes < 0) {
			setHours((hours) => hours - 1);
			setMinutes(59);
		}
	}, [minutes]);

	useEffect(() => {
		if (hours === 0 && minutes === 0 && seconds === 0) {
			clearInterval(interval);
		}
	}, [hours, minutes, seconds]);

	return (
		<div className="counter">
			<div className="hours">
				<h5>{hours}</h5>
				<span className="period">Hours</span>
			</div>
			<span className="colon">:</span>
			<div className="minutes">
				<h5>{minutes}</h5>
				<span className="period">Minutes</span>
			</div>
			<span className="colon">:</span>
			<div className="seconds">
				<h5>{seconds}</h5>
				<span className="period">Seconds</span>
			</div>
		</div>
	);
}
