import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

function LogoLayout(props) {
	return (
		<Box className={"Logo"} sx={{
			maxWidth: 200
		}}>
			<Link to={'/'}>
				<img src="/uploads/Logo-Logo.svg" alt=""/>
			</Link>
		</Box>
	);
}

export default LogoLayout;
