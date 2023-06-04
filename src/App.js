// import Header from "./components/Header";
// import Prototypes from "./components/Prototypes";
// import Orders from "./components/Orders";
// import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Main from "./components/Main";
import CheckOut from "./components/Checkout";

function App() {
  return (
    <AppStateProvider>
      {/* <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </AppStateProvider>    
  );
}

export default App;
