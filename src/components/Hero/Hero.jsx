import React from "react";
import "./hero.scss";
import rocket from "../../assets/collection/icons/RocketLaunch.svg";
import hero from "../../assets/collection/Discover/Image Placeholder.png";

export default function Hero() {
	return (
		<div className="hero">
			<div className="container">
				<div className="left-container">
					<h1>Discover digital art & Collect NFTs</h1>
					<p>
						NFT marketplace UI created with Anima for Figma. Collect, buy and
						sell art from more than 20k NFT artists.
					</p>
					<button style={{ display: "none" }}>
						<img src={rocket} alt="get started" />
						<p>Get started</p>
					</button>
					<div className="stats" style={{ display: "none" }}>
						<div className="sale">
							<h2>240k+</h2>
							<span>Total Sale</span>
						</div>
						<div className="auctions">
							<h2>100k+</h2>
							<span>Auctions</span>
						</div>
						<div className="artists">
							<h2>240k+</h2>
							<span>Artists</span>
						</div>
					</div>
				</div>
				<div className="right-container">
					<div className="card">
						<img src={hero} alt="Animakid" />
						<div className="bottom">
							<h5>Space Walking</h5>
							<div className="owner">
								<div className="img"></div>
								<span>Animakid</span>
							</div>
						</div>
					</div>
					<button className="mobile-button">
						<img src={rocket} alt="get started" />
						<p>Get started</p>
					</button>
					<div className="stats">
						<div className="sale">
							<h2>240k+</h2>
							<span>Total Sale</span>
						</div>
						<div className="auctions">
							<h2>100k+</h2>
							<span>Auctions</span>
						</div>
						<div className="artists">
							<h2>240k+</h2>
							<span>Artists</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
