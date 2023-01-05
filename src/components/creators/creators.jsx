import React, { useEffect, useState } from "react";
import rocket from "../../assets/collection/icons/RocketLaunch2.svg";
import { data } from "../../creators.Js";
import "./creators.scss";

export default function creators() {
	return (
		<div className="creators-section">
			<div className="container">
				<div className="headen">
					<div className="left">
						<h4>Top creators</h4>
						<p>Checkout Top Rated Creators on the NFT Marketplace</p>
					</div>
					<div className="right">
						<button className="creator-btn">
							<img src={rocket} alt="rankings" /> <p>View Rankings</p>
						</button>
					</div>
				</div>
				<div className="creators">
					{data.map((data, index) => {
						return (
							<div key={data.img} className="box">
								<div className="left">
									<span className="number">{index + 1}</span>
									<img src={data.img} alt="" />
								</div>
								<div className="right">
									<p>{data.name}</p>
									<p className="sales">
										Total Sales: <span>{data.sales}</span>
									</p>
								</div>
							</div>
						);
					})}
					<button className="creator-btn">
						<img src={rocket} alt="rankings" /> <p>View Rankings</p>
					</button>
				</div>
			</div>
		</div>
	);
}
