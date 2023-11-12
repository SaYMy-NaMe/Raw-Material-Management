import Footer from "../../components/Footer";
import heroIMG from "../../../src/assets/imgs/heroImg.jpg";
import "./landing.css";

const Landing = () => {
  return (
    <div id="landing">
      <main id="main">
        <h1>Build Faster, Smarter and More Profitable</h1>
        <div></div>
        <img src={heroIMG} />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
