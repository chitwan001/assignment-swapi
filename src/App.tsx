import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Layout from "./components/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import CharactersList from "./components/CharactersList.tsx";
import CharacterInfo from "./components/CharacterInfo.tsx";

function App() {
    const theme = extendTheme({
        colors: {
            darkBlue: {
                50: '#e2f1ff',
                100: '#b3d6fe',
                200: '#84bafa',
                300: '#569ef9',
                400: '#2d83f7',
                500: '#0a3a7c',
                600: '#000c1d',
                700: '#0a3a7c',
                800: '#01234c',
                900: '#000c1d',
            }
        }
    })
    return (
        <ChakraProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index={true} element={<CharactersList/>}/>
                    <Route path={'people/:id'} element={<CharacterInfo/>}/>
                </Route>
            </Routes>
        </ChakraProvider>
    )
}

export default App
