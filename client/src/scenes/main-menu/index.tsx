import FlexCenter from "@/components/FlexCenter";
import { PlayArrow } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material"
import { SelectedContext } from "@/context/NavbarContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

type Props = {}

const MainMenu = (props: Props) => {
	const { palette } = useTheme();
	const { selected, setSelected } = useContext(SelectedContext);
	
	return (
		<FlexCenter height="100%" id="main-menu-img">
			<Box color={palette.grey[300]}>
				<Link to="/game" onClick={() => setSelected("game")}>
					<PlayArrow />
				</Link>
			</Box>
		</FlexCenter>
	)
}

export default MainMenu;