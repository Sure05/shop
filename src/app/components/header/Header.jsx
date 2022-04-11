import React from 'react';
import LogoLayout from "./LogoLayout";
import MenuLayout from "./MenuLayout";
import UserLayout from "./UserLayout";
import {Box, Container} from "@mui/material";

function Header(props) {
	return (
		<Box sx={{
			borderBottom: "1px solid #0000003b",
			mb: 5,
			pt: 1,
			pb: 1
		}}>
			<Container sx={{
				// maxWidth: 1500,
				// margin: "auto",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
				<LogoLayout />
				<MenuLayout />
				<UserLayout />
			</Container>
		</Box>
	);
}

export default Header;
