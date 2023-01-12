import "./news.scss";
import React from "react";
import { useRef } from "react";
import Astro from "../../assets/collection/collections/Astronaught.svg";
import mail2 from "../../assets/collection/icons/EnvelopeSimple2.svg";

import * as Yup from "yup";
import { useFormik } from "formik";

export default function NewsLetter() {
	const mailRef = useRef(null);
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
		}),
		onSubmit: (values) => {
			console.log(formik.values);
			mailRef.current.value = "";
		},
	});

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
						<form onSubmit={formik.handleSubmit}>
							<div className="mail">
								<input
									ref={mailRef}
									type="email"
									name={formik.values.email}
									placeholder="Enter your email here"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<button>
									<img src={mail2} alt="subScribe" />
									<p>Subscribe</p>
								</button>
							</div>
							<button className="button2">
								<img src={mail2} alt="subScribe" />
								<p>Subscribe</p>
							</button>
							{formik.touched.name && formik.errors.email && (
								<p className="error">{formik.errors.email}</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
