import React from "react";
import signupImg from "../../assets/collection/collections/signup.svg";
import inputNameImg from "../../assets/collection/icons/User.svg";
import inputPassImg from "../../assets/collection/icons/LockKey.svg";
import inputPassImg2 from "../../assets/collection/icons/LockKey.svg";
import inputMailImg from "../../assets/collection/icons/EnvelopeSimple.svg";
import "./signup.scss";

export default function Signup() {
	return (
		<div className="signup-section">
			<div className="left-section">
				<img src={signupImg} alt="signup" />
			</div>
			<div className="right-section">
				<h5>Create account</h5>
				<p>
					Welcome! enter your details and start creating, collecting and selling
					NFTs.
				</p>
				<form>
					<div className="name">
						<img src={inputNameImg} alt="" />
						<input type="text" placeholder="Username" />
					</div>
					<div className="email">
						<img src={inputMailImg} alt="email" />
						<input type="email" placeholder="Email address" />
					</div>
					<div className="password">
						<img src={inputPassImg} alt="password" />
						<input type="password" placeholder="Password" />
					</div>
					<div className="password-confirm">
						<img src={inputPassImg2} alt="confirm password" />
						<input type="password" placeholder="Confirm password" />
					</div>
					<button>Create account</button>
				</form>
			</div>
		</div>
	);
}
