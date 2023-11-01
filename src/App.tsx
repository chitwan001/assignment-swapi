import {ChakraProvider} from "@chakra-ui/react";
import Layout from "./components/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import CharactersList from "./components/CharactersList.tsx";
import CharacterInfo from "./components/CharacterInfo.tsx";

function App() {
  return (
    <ChakraProvider>
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
