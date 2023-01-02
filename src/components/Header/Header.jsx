import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/collection/icons/User.svg";
import marketplace from "../../assets/collection/icons/Storefront.svg";
import burger from "../../assets/collection/icons/Burger.svg";

export default function Header() {
	const [toggle, setToggle] = useState(false);
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
				<div className="mobile-nav">
					<img src={burger} alt="menu" />
				</div>
			</div>
		</header>
	);
}
