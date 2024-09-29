export const tokens = {
	gray: {
		100: "#f0f0f3",
		200: "#e1e2e7",
		300: "#d1d3da",
		400: "#c2c5ce",
		500: "#b3b6c2",
		600: "#8f929b",
		700: "#6b6d74",
		800: "#48494e",
		900: "#242427"
	},
	yellow: {
		100: "#fffad9",
		200: "#fff4b3",
		300: "#feef8c",
		400: "#fee966",
		500: "#fee440",
		600: "#cbb633",
		700: "#988926",
		800: "#665b1a",
		900: "#332e0d"
	},
	blue: {
		100: "#dbf4fc",
		200: "#b7e9f9",
		300: "#94dff6",
		400: "#70d4f3",
		500: "#4cc9f0",
		600: "#3da1c0",
		700: "#2e7990",
		800: "#1e5060",
		900: "#0f2830"
	},
	red: {
		100: "#fcd3d8",
		200: "#f9a7b1",
		300: "#f57b8a",
		400: "#f24f63",
		500: "#ef233c",
		600: "#bf1c30",
		700: "#8f1524",
		800: "#600e18",
		900: "#30070c"
	},
	orange: {
		100: "#ffe2cc",
		200: "#ffc599",
		300: "#ffa766",
		400: "#ff8a33",
		500: "#ff6d00",
		600: "#cc5700",
		700: "#994100",
		800: "#662c00",
		900: "#331600"
	},
	background: {
		main: "#2d2d34",
		dark: "#1f2026"
	}
};

export const themeSettings = {
	palette: {
		gray: {
			...tokens.gray,
			main: tokens.gray[400],
			dark: tokens.gray[500]
		},
		yellow: {
			...tokens.yellow,
			main: tokens.yellow[400],
			dark: tokens.yellow[500]
		},
		red: {
			...tokens.red,
			main: tokens.red[400],
			dark: tokens.red[500]
		},
		blue: {
			...tokens.blue,
			main: tokens.blue[400],
			dark: tokens.blue[500]
		},
		orange: {
			...tokens.orange,
			main: tokens.orange[400],
			dark: tokens.orange[500]
		},
		background: {
			main: tokens.background.main,
			dark: tokens.background.dark
		}
	},
	typography: {
    fontFamily: ["Black Ops One", "system-ui"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Black Ops One", "system-ui"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Black Ops One", "system-ui"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Black Ops One", "system-ui"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.gray[200],
    },
    h4: {
      fontFamily: ["Black Ops One", "system-ui"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.gray[300],
    },
    h5: {
      fontFamily: ["Black Ops One", "system-ui"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.gray[500],
    },
    h6: {
      fontFamily: ["Black Ops One", "system-ui"].join(","),
      fontSize: 10,
      color: tokens.gray[700],
    },
  }
}