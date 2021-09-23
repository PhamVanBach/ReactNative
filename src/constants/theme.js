import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    //base colors
    primary: "#fc6011", //orange

    //colors
    black: "#4a4b4d", //black
    white: "#ffffff",
    transparent: "transparent",
};

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height,
};

const appTheme = { COLORS, SIZES };
export default appTheme;