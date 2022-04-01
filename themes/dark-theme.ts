import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkThem = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        }
    },
    components: {
        
    }
});