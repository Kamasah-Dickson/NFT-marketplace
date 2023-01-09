import "./news.scss";
import React from "react";
import Astro from "../../assets/collection/collections/Astronaught.svg";
// import { useState } from "react";
// import * as Yup from "yup";
// import formik, { useFormik, validateYupSchema } from "formik";

export default function NewsLetter() {
	// const formik = useFormik({
	// 	email:'';
	// 	validateYupSchema:
	// })
	// const [data, setData] = useState({
	// 	email: "",
	// });
	return (
		<div className="newsLetter-section">
			<div className="container">
				<div className="left">
					<div className="img">
						<img src={Astro} alt="weekly news letter" />
					</div>
				</div>
				<div className="right">
					<h4>Join our weekly digest</h4>
					<p>Get exclusive promotions & updates straight to your inbox.</p>
					<div className="form-section">
						{/* <form>
							<input type="email" name={data.email} />
						</form> */}
					</div>
				</div>
			</div>
		</div>
	);
}
