import "./App.css";
import HeroSection from "./assets/Hero";
import Navigation from  "./components/Navigation";

const App = () => {
  return (
    <div>
       <Navigation />    
       <HeroSection/>
    </div>
  );
};

export default App;