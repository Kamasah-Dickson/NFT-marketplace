import React from "react";
import nftDog from "../../assets/collection/collections/Primary Photo Placeholder.svg";
import nftMushroom from "../../assets/collection/collections/Primary Photo Placeholder-1.jpg";
import mrFox from "../../assets/collection/collection-mini/Secondary Photo Placeholder.svg";
import mrFox2 from "../../assets/collection/collection-mini/Secondary Photo Placeholder-1.svg";
import magicMush from "../../assets/collection/collection-mini/Secondary Photo Placeholder-2.svg";
import magicMush2 from "../../assets/collection/collection-mini/Secondary Photo Placeholder-3.svg";
import machines from "../../assets/collection/collections/Primary Photo Placeholder3.svg";
import user1 from "../../assets/collection/collections/Avatar Placeholder2.svg";
import user2 from "../../assets/collection/collections/Avatar Placeholder1.svg";
// import user3 from "../../assets/collection/collections/";
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
						<div className="profile">
							<h4>DSGN Animals</h4>
							<div className="user">
								<img src={user2} alt="" />
								<p>MrFox</p>
							</div>
						</div>
					</div>
					<div className="card hide-card hide-card2">
						<img src={machines} alt="Magic mushrooms" />
						<div className="bottom">
							<div className="img">
								<img src={magicMush} alt="magic mushroom" />
							</div>
							<div className="img">
								<img src={magicMush2} alt="magic mushroom" />
							</div>
							<div className="more">6+</div>
						</div>
						<div className="profile">
							<h4>Disco Machines</h4>
							<div className="user">
								{/* <img src={user3} alt="be kind to robots" /> */}
								<p>BeKind2Robots</p>
							</div>
						</div>
					</div>
					<div className="card hide-card">
						<img src={nftMushroom} alt="Magic mushrooms" />
						<div className="bottom">
							<div className="img">
								<img src={magicMush} alt="magic mushroom" />
							</div>
							<div className="img">
								<img src={magicMush2} alt="magic mushroom" />
							</div>
							<div className="more">6+</div>
						</div>
						<div className="profile">
							<h4>Magic Mushrooms</h4>
							<div className="user">
								<img src={user1} alt="shroomie" />
								<p>Shroomie</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
