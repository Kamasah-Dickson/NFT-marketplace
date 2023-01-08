import React from "react";
import "./discover.scss";
import discover from "../../assets/collection/Discover/Image Placeholder-1.svg";
import discover2 from "../../assets/collection/Discover/Image Placeholder-2.svg";
import discover3 from "../../assets/collection/Discover/Image Placeholder.svg";
import seen from "../../assets/collection/Discover/Eye.svg";
import profile1 from "../../assets/collection/Discover/Avatar Placeholder-1.svg";
import profile2 from "../../assets/collection/Discover/Avatar Placeholder-2.svg";
import profile3 from "../../assets/collection/Discover/Avatar Placeholder.svg";
export default function Discover() {
	return (
		<div className="discover-section">
			<div className="container">
				<div className="headen">
					<div className="left">
						<h4>Discover More NFTs</h4>
						<p>Explore new trending NFTs</p>
					</div>
					<div className="right">
						<button>
							<img className="seen" src={seen} alt="see all" />
							<p>See All</p>
						</button>
					</div>
				</div>
				<div className="discover">
					<div className="card" tabIndex="0">
						<div className="img">
							<img src={discover} alt="discover" />
						</div>
						<div className="bottom-card">
							<div className="bottom">
								<h5 className="name">Life On Edena</h5>
								<div className="user">
									<div className="img">
										<img src={profile1} alt="nebula kid" />
									</div>
									<p>NebulaKid</p>
								</div>
							</div>
							<div className="footer">
								<div className="left">
									<span>Price</span>
									<p>1.63 ETH</p>
								</div>
								<div className="right">
									<span>Highest Bid</span>
									<p>0.33 wETH</p>
								</div>
							</div>
						</div>
					</div>
					<div className="card" tabIndex="0">
						<div className="img">
							<img src={discover2} alt="discover" />
						</div>
						<div className="bottom-card">
							<div className="bottom">
								<h5 className="name">AstroFiction</h5>
								<div className="user">
									<div className="img">
										<img src={profile2} alt="nebula kid" />
									</div>
									<p>Spaceone</p>
								</div>
							</div>
							<div className="footer">
								<div className="left">
									<span>Price</span>
									<p>1.63 ETH</p>
								</div>
								<div className="right">
									<span>Highest Bid</span>
									<p>0.33 wETH</p>
								</div>
							</div>
						</div>
					</div>
					<div className="card" tabIndex="0">
						<div className="img">
							<img src={discover3} alt="discover" />
						</div>
						<div className="bottom-card">
							<div className="bottom">
								<h5 className="name">Distant Galaxy</h5>
								<div className="user">
									<div className="img">
										<img src={profile3} alt="nebula kid" />
									</div>
									<p>Spaceone</p>
								</div>
							</div>
							<div className="footer">
								<div className="left">
									<span>Price</span>
									<p>1.63 ETH</p>
								</div>
								<div className="right">
									<span>Highest Bid</span>
									<p>0.33 wETH</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
