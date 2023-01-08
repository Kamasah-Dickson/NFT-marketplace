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
import user3 from "../../assets/collection/collections/Avatar Placeholder3.svg";
import machine1 from "../../assets/collection/collections/Machine Photo Placeholder1.svg";
import machine2 from "../../assets/collection/collections/Machine Photo Placeholder2.svg";
import { Link } from "react-router-dom";
import "./collections.scss";

export default function collections() {
	return (
		<div className="collection-section">
			<div className="container">
				<h3>Trending Collection</h3>
				<p>Checkout our weekly updated trending collection.</p>
				<div className="collections">
					<div className="card show-card">
						<Link to="/orbitians">
							<img src={nftDog} alt="DSGN Animals" />
						</Link>
						<div className="bottom">
							<div className="img">
								<Link to="/orbitians">
									<img src={mrFox} alt="mr fox" />
								</Link>
							</div>
							<div className="img">
								<Link to="/orbitians">
									<img src={mrFox2} alt="mr fox" />
								</Link>
							</div>
							<div className="more" tabIndex="0">
								1025+
							</div>
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
						<Link to="/orbitians">
							<img src={machines} alt="disco machines" />
						</Link>
						<div className="bottom">
							<div className="img">
								<Link to="/orbitians">
									<img src={machine1} alt="disco machines" />
								</Link>
							</div>
							<div className="img">
								<Link to="/orbitians">
									<img src={machine2} alt="disco machines" />
								</Link>
							</div>
							<div className="more" tabIndex="0">
								1025+
							</div>
						</div>
						<div className="profile">
							<h4>Disco Machines</h4>
							<div className="user">
								<img src={user3} alt="be kind to robots" />
								<p>BeKind2Robots</p>
							</div>
						</div>
					</div>
					<div className="card hide-card">
						<Link to="/orbitians">
							<img src={nftMushroom} alt="Magic mushrooms" />
						</Link>
						<div className="bottom">
							<div className="img">
								<Link to="/orbitians">
									<img src={magicMush} alt="magic mushroom" />
								</Link>
							</div>
							<div className="img">
								<Link to="/orbitians">
									<img src={magicMush2} alt="magic mushroom" />
								</Link>
							</div>
							<div className="more" tabIndex="0">
								6+
							</div>
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
