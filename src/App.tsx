import Body from "./components/Body";
import Features from "./components/Features";
import Navbar from "./components/Navbar";

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

  </>
  );
}

export default App;
