import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" flex flex-col  h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(110,86,207,0.5),rgba(255,255,255,0))] md:flex md:flex-col text-white  justify-center items-center    ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
