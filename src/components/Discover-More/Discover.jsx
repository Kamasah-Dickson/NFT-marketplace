import React from "react";
import "./discover.scss";

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
							<img className="seen" src="" alt="" />
							<p>See All</p>
						</button>
					</div>
				</div>
				<div className="discover">
					<div className="card">
						<div className="img">
							<img src="" alt="" />
						</div>
						<div className="bottom">
							<h5 className="name"></h5>
							<div className="user">
								<div className="img"></div>
								<p>See All</p>
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
	);
}
