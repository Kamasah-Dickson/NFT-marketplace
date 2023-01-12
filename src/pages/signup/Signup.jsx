import React from "react";
import signupImg from "../../assets/collection/collections/signup.svg";
import inputNameImg from "../../assets/collection/icons/User.svg";
import inputPassImg from "../../assets/collection/icons/LockKey.svg";
import inputPassImg2 from "../../assets/collection/icons/LockKey.svg";
import inputMailImg from "../../assets/collection/icons/EnvelopeSimple.svg";
import showEye from "../../assets/collection/icons/showEye.svg";
import hideEye from "../../assets/collection/icons/unshowEye.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./signup.scss";

export default function Signup() {
	const navigate = useNavigate();
	const [prevent, setPrevent] = useState(false);
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPass: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("email is required"),
			name: Yup.string()
				.max(20, "Name must be at least 20 characters")
				.required("Name is required"),
			password: Yup.string()
				.required("Password is required")
				.min(10, "password must be at least 10 characters long"),
			confirmPass: Yup.string()
				.required("Password is required")
				.min(10, "password must be at least 10 characters long"),
		}),

		onSubmit: (values) => {
			handleError(values);
		},
	});

	function handleError(values) {
		if (formik.values.password !== formik.values.confirmPass) {
			setPrevent(true);
		} else {
			setPrevent(false);

			console.log(values);
			navigate("/");
		}
	}
	return (
		<div className="signup-section">
			<div className="left-section">
				<img src={signupImg} alt="signup" />
			</div>
			<div className="right-section">
				<div className="container">
					<h5>Create account</h5>
					<p>
						Welcome! enter your details and start creating, collecting and
						selling NFTs.
					</p>
					<form
						style={
							formik.errors.name &&
							formik.errors.password &&
							formik.errors.confirmPass &&
							formik.errors.email
								? { gap: "5px" }
								: { gap: "15px" }
						}
						onSubmit={formik.handleSubmit}
					>
						<div className="wrapper">
							<div className="name">
								<div className="img">
									<img src={inputNameImg} alt="" />
								</div>
								<input
									type="text"
									placeholder="Username"
									value={formik.values.name}
									name="name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
						</div>
						{formik.touched.name && formik.errors.name ? (
							<p className="errors">{formik.errors.name}</p>
						) : null}
						<div className="wrapper">
							<div className="email">
								<div className="img">
									<img src={inputMailImg} alt="email" />
								</div>
								<input
									type="email"
									placeholder="Email address"
									value={formik.values.email}
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
							{formik.touched.email && formik.errors.email ? (
								<p className="errors">{formik.errors.email}</p>
							) : null}
						</div>
						<div className="wrapper">
							<div className="password">
								<div className="img">
									<img src={inputPassImg} alt="password" />
								</div>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<div
									onClick={() => setShow((prev) => !prev)}
									className="img img2"
								>
									<img
										src={show ? showEye : hideEye}
										alt={show ? "hide password" : "show password"}
									/>
								</div>
							</div>
							{formik.touched.password && formik.errors.password ? (
								<p className="errors">{formik.errors.password}</p>
							) : null}
						</div>
						<div className="wrapper">
							<div className="password-confirm">
								<div className="img">
									<img src={inputPassImg2} alt="confirm password" />
								</div>
								<input
									type="password"
									name="confirmPass"
									value={formik.values.confirmPass}
									placeholder="Confirm password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<div
									onClick={() => setShow2((prev) => !prev)}
									className="img img2"
								>
									<img
										src={show2 ? showEye : hideEye}
										alt={show2 ? "hide password" : "show password"}
									/>
								</div>
							</div>
							{formik.touched.confirmPass && formik.errors.confirmPass ? (
								<p className="errors">{formik.errors.confirmPass}</p>
							) : null}
						</div>
						{prevent && <p className="errors">Make sure passwords do match</p>}
						<button type="submit">Create account</button>
					</form>
				</div>
			</div>
		</div>
	);
}
