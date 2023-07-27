import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import NavbarFile from "./components/NavbarFile";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./components/Footer";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import LoginPages from "./Pages/Login/LoginPages";
import WishlistPage from "./Pages/Wishlist/WishlistPage";

function App() {
  return (
    <>
      <NavbarFile />
      {/* <HomePage /> */}
      {/* <CreateAccount /> */}
      {/* <LoginPages /> */}
      <WishlistPage/>
      <Footer />
    </>
  );
}

export default App;
