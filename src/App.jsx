import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
