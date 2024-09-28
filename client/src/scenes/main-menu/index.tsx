import FlexCenter from "@/components/FlexCenter";
import { PlayArrow } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {}

const MainMenu = (props: Props) => {
	const { palette } = useTheme();
	
	return (
		<FlexCenter height="100%" id="main-menu-img">
			<Box color={palette.grey[300]}>
				<Link to="/game" color={palette.grey[500]}>
					<PlayArrow />
				</Link>
			</Box>
		</FlexCenter>
	)
}

export default MainMenu