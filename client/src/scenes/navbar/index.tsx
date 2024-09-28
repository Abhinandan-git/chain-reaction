import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Logo from '@/assets/logo512.jpeg';

type Props = {}

const Navbar = (props: Props) => {
	const { palette } = useTheme();
	const [selected, setSelected] = useState("main-menu");

	return (
		<FlexBetween mb="0.25rem" p="0.5rem 0" color={palette.grey[300]}>
			{/* Left Side */}
			<FlexBetween gap="0.75rem">
				<Link to="/" onClick={() => setSelected("main-menu")} style={{
					color: selected === "main-menu" ? "inherit" : palette.grey[700],
					textDecoration: "inherit",
					all: "inherit",
					cursor: "pointer"
				}}>
					<img src={Logo} alt="Chain Reaction Logo" width="45px" height="45px" id="nav-logo" />
					<Typography variant="h4" fontSize="26px">
						Chain Reaction
					</Typography>
				</Link>
			</FlexBetween>

			{/* Right Side */}
			<FlexBetween gap="2rem">
				<Box sx={{ "&:hover": { color: palette.grey[100] } }}>
					<Link to="/" onClick={() => setSelected("main-menu")} style={{
						color: selected === "main-menu" ? "inherit" : palette.grey[700],
						textDecoration: "inherit"
					}}>
						Home
					</Link>
				</Box>
				<Box sx={{ "&:hover": { color: palette.grey[100] } }}>
					<Link to="/history" onClick={() => setSelected("history")} style={{
						color: selected === "history" ? "inherit" : palette.grey[700],
						textDecoration: "inherit"
					}}>
						History
					</Link>
				</Box>
			</FlexBetween>
		</FlexBetween>
	)
}

export default Navbar