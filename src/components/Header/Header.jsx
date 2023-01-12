import React, { useRef, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/collection/icons/User2.svg";
import marketplace from "../../assets/collection/icons/Storefront.svg";
import burger from "../../assets/collection/icons/Burger.svg";

export default function Header() {
	const [toggle, setToggle] = useState(false);
	const navMove = useRef(null);

	return (
		<header>
			<div className="container">
				<div className="logo-details">
					<img src={marketplace} alt="NFT marketplace" />
					<p>NFT Marketplace</p>
				</div>
				<div className="navigation">
					<nav>
						<ul>
							<Link to="marketplace">MarketPlace</Link>
							<Link to="rankings">Rankings</Link>
							<Link to="wallet">Connect a wallet</Link>
						</ul>
						<Link to="signup">
							<button>
								<img src={user} alt="signup" />
								Sign Up
							</button>
						</Link>
					</nav>
				</div>

				{toggle && (
					<div ref={navMove} className="mobile-navigation">
						<div className="close" onClick={() => setToggle(false)}>
							<span className="left"></span>
							<span className="right"></span>
						</div>
						<nav>
							<ul>
								<Link to="marketplace">MarketPlace</Link>
								<Link to="rankings">Rankings</Link>
								<Link to="wallet">Connect a wallet</Link>
							</ul>
							<Link to="signup">
								<button>
									<img src={user} alt="signup" />
									Sign Up
								</button>
							</Link>
						</nav>
					</div>
				)}
				<div onClick={() => setToggle(true)} className="mobile-nav">
					<img src={burger} alt="menu" />
				</div>
			</div>
		</header>
	);
}
