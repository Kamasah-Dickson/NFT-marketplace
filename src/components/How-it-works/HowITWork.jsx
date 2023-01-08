import React from "react";
import "./how-it-works.scss";
import setupWallet from "../../assets/collection/collections/setUpWallet.svg";
import createCollection from "../../assets/collection/collections/createCollection.svg";
import startEarning from "../../assets/collection/collections/startEarning.svg";

export default function HowITWork() {
	return (
		<div className="how-it-works-section">
			<div className="container">
				<div className="headen">
					<h5>How it works</h5>
					<p>Find out how to get started</p>
				</div>
				<div className="cards">
					<div className="card" tabIndex="0">
						<div className="img">
							<img src={setupWallet} alt="setup your wallet" />
						</div>
						<div className="details">
							<h5>Setup Your wallet</h5>
							<p>
								Set up your wallet of choice. Connect it to the Animarket by
								clicking the wallet icon in the top right corner.
							</p>
						</div>
					</div>
					<div className="card" tabIndex="0">
						<div className="img">
							<img src={createCollection} alt="create collection" />
						</div>
						<div className="details">
							<h5>Create Collection</h5>
							<p>
								Upload your work and setup your collection. Add a description,
								social links and floor price.
							</p>
						</div>
					</div>
					<div className="card" tabIndex="0">
						<div className="img">
							<img src={startEarning} alt="setup your wallet" />
						</div>
						<div className="details">
							<h5>Start Earning</h5>
							<p>
								Choose between auctions and fixed-price listings. Start earning
								by selling your NFTs or trading others.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
