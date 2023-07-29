import "./App.css";
import Cta from "./Components/CTA/Cta";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";

import Header from "./Components/Header/Header";
import HeroBanner from "./Components/HeroBanner/HeroBanner";



function App() {
  return (
    <>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <Cta></Cta>

      <Gallery></Gallery>

      <Footer></Footer>
    </>
  );
}

export default App;
