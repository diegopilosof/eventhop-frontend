import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from "./Pages/MainApp";
import axios from "axios";
import { config } from "./Config/constants";

export const server = axios.create({
  baseURL: config.API_URL,
});

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<MainApp />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
