import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import Home from "./components/Home";

function App() {
  useEffect(()=> {
    Aos.init({duration: 700}); 
    Aos.refresh();
  }, [])
  return (
    <div className="text-white scroll-pt-32">
      <Home></Home>
    </div>
  );
}

export default App;
