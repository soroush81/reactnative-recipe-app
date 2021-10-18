import { DefaultTheme } from "@react-navigation/native";
import Colors from "../contants/Colors";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.secondary,
        background: 'white',
    }
}