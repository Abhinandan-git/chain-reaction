import FlexCenter from "@/components/FlexCenter";
import { SelectedContext } from "@/context/NavbarContext";
import { useTheme } from "@mui/material";
import { useContext } from "react";

const Game = () => {
	const location = window.location.pathname;
	const { selected, setSelected } = useContext(SelectedContext);
	const { palette } = useTheme();

	if (location === "/game") {
		setSelected("game");
	}

	

	return (
		<FlexCenter color={palette.grey[300]}>
			<p className="turn">Player 1's Turn (Red)</p>
			<FlexCenter>
				<div id="game-board"></div>
			</FlexCenter>
		</FlexCenter>
	)
}

export default Game;