import { useParams } from "react-router-dom";
import { data } from "../../creators.Js";

import React from "react";

export default function NFT() {
	const { id } = useParams();
	{
		const results = data.find((data) => data.id === id);
		console.log(results);
	}
	return <div>NFT {id}</div>;
}
