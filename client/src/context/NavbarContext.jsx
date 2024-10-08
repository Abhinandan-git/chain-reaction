import { createContext, useState } from "react";

export const SelectedContext = createContext();

export const SelectedContextProvider = ({ children }) => {
	const [selected, setSelected] = useState("main-menu");

	return (
		<SelectedContext.Provider value={{ selected, setSelected }}>
			{children}
		</SelectedContext.Provider>
	)
}