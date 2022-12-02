import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-full bg-body-dark flex flex-col">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
