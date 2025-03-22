import Navbar from "./components/navbar/Navbar";
import Canvas from "./components/canvas/Canvas";
import Navigation from "./components/navigation/Navigation";
import Avatar from "./components/avatar/Avatar";
import Trends from "./components/trends/Trends";
import Footer from "./components/footer/Footer";
import SocialLinks from "./components/socialLinks/SocialLinks";
function App() {
  return (
    <>
      <Navbar />
      <Canvas />
      {/* <Navigation /> */}
      <Avatar />
      <Trends />
      <Footer />
      <SocialLinks/>
    </>
  );
}

export default App;
