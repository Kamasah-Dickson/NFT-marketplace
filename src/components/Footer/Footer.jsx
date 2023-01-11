import React from "react";
import market from "../../assets/collection/icons/Storefront.svg";
import discord from "../../assets/collection/collections/DiscordLogo.svg";
import youtube from "../../assets/collection/collections/YoutubeLogo.svg";
import twitter from "../../assets/collection/collections/TwitterLogo.svg";
import instagram from "../../assets/collection/collections/InstagramLogo.svg";
import mail from "../../assets/collection/icons/EnvelopeSimple.svg";
import "./footer.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRef } from "react";

export default function Footer() {
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
		<div className="footer-section">
			<div className="container">
				<div className="marketplace">
					<h5>
						<img src={market} alt="marketplace" />
						NFT Marketplace
					</h5>
					<ul>
						<li>NFT marketplace UI created with Anima for Figma.</li>
						<li>Join our community</li>
						<li className="last">
							<img src={discord} alt="discord" />
							<img src={instagram} alt="instagram" />
							<img src={twitter} alt="twitter" />
							<img src={youtube} alt="youtube" />
						</li>
					</ul>
				</div>
				<div className="explore">
					<h5>Explore</h5>
					<ul>
						<li>Marketplace</li>
						<li>Rankings</li>
						<li>Connect a wallet</li>
					</ul>
				</div>
				<div className="join">
					<h5>Join our weekly digest</h5>
					<ul>
						<li>Get exclusive promotions & updates straight to your inbox.</li>
					</ul>

					<form onSubmit={formik.handleSubmit}>
						<div className="mail">
							<input
								ref={mailRef}
								type="email"
								name="email"
								placeholder="Enter your email here"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<button>
								<img src={mail} alt="subScribe" />
								<p>Subscribe</p>
							</button>
						</div>
						<button className="button2">
							<img src={mail} alt="subScribe" />
							<p>Subscribe</p>
						</button>
						{formik.touched.name && formik.errors.email && (
							<p className="error">{formik.errors.email}</p>
						)}
					</form>
				</div>
			</div>
			<div className="container2">
				<p className="template">Ⓒ NFT Market. Use this template freely.</p>
			</div>
		</div>
	);
}
