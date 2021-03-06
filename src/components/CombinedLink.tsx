import React from 'react';
import { Link } from "@reach/router";

export const CombinedLink: React.FC<any> = props => {
	console.log(props);
	return (
		<Link
			{...props}
			className="item"
			getProps={({isCurrent}) => {
				return {
					className: `item ${isCurrent ? ' active' : 'notActive'}`
				};
			}}
		/>
	)
};