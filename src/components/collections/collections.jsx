import React from "react";
import nftDog from "../../assets/collection/collections/Primary Photo Placeholder.svg";
import nftMushroom from "../../assets/collection/collections/Primary Photo Placeholder-1.jpg";
import mrFox from "../../assets/collection/collection-mini/Secondary Photo Placeholder.svg";
import mrFox2 from "../../assets/collection/collection-mini/Secondary Photo Placeholder-1.svg";
import magicMush from "../../assets/collection/collection-mini/Secondary Photo Placeholder-2.svg";
import magicMush2 from "../../assets/collection/collection-mini/Secondary Photo Placeholder-3.svg";
import "./collections.scss";

export default function collections() {
	return (
		<div className="collection-section">
			<div className="container">
				<h3>Trending Collection</h3>
				<p>Checkout our weekly updated trending collection.</p>
				<div className="collections">
					<div className="card show-card">
						<img src={nftDog} alt="DSGN Animals" />
						<div className="bottom">
							<div className="img">
								<img src={mrFox} alt="mr fox" />
							</div>
							<div className="img">
								<img src={mrFox2} alt="mr fox" />
							</div>
							<div className="more">1025+</div>
						</div>
					</div>
					<div className="card hide-card">
						<img src={nftMushroom} alt="Magic mushrooms" />
						<div className="bottom">
							<img src={magicMush} alt="magic mushroom" />
							<img src={magicMush2} alt="magic mushroom" />
							<div className="more">6+</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
