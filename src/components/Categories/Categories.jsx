import React from "react";
import { categoryData } from "../../categories";
import "./categories.scss";
export default function Categories() {
	return (
		<div className="categories-section">
			<div className="container">
				<h4>Browse Categories</h4>
				<div className="browse-categories">
					{categoryData.map((data, index) => {
						return (
							<div key={index} className="card">
								<div className="overlay">
									<div className="icon">
										<img src={data.overlay} alt="category" />
									</div>
									<div className="img">
										<img src={data.img} alt="category" />
									</div>
								</div>
								<p className="category">{data.cat}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
