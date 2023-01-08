import React from "react";
import "./mushroom.scss";
import seeNFT from "../../assets/collection/Discover/Eye.svg";
import Shroomie from "../../assets/collection/collections/shroomie.svg";
import CountdownTimer from "../../Timer";

export default function Mushroom() {
	return (
		<div className="mushroom-section">
			<div className="container">
				<div className="left">
					<div className="user">
						<div className="img">
							<img src={Shroomie} alt="shroomie" />
						</div>
						<p className="name">Shroomie</p>
					</div>
					<h5>Magic Mashrooms</h5>
					<button className="top-button">
						<img src={seeNFT} alt="see NFT" />
						<p>See NFT</p>
					</button>
				</div>
				<div className="right">
					<div className="counter-wrapper">
						<div className="counter-inner">
							<p>Auction ends in:</p>
							<CountdownTimer />
						</div>
					</div>
					<button className="bottom-button">
						<img src={seeNFT} alt="see NFT" />
						<p>See NFT</p>
					</button>
				</div>
			</div>
		</div>
	);
}
