import Body from "./components/Body";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./Services";

function App() {
  return (<>

    {/* Landing */}
    <div className="h-screen w-full bg-body-dark flex flex-col">
      <Navbar />
      <Body />
    </div>


    {/* 1 */}
    <div className="h-[150vh] w-full bg-body-dark flex flex-col">
      <Features />
    </div>

    {/* 2 */}
    <div className="h-screen w-full bg-body-dark flex flex-col">
      <Services />
    </div>

    {/* 3 */}
    <div className="h-[75vh] w-full bg-body-dark">
      <Footer/>
    </div>

  </>
  );
}

export default App;
