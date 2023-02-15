import Navbar from './components/Navbar';
import Home from './components/Home';
import Emojis from './components/Emojis';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import MainButton from './components/MainButton'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <MainButton />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Emojis" element={<Emojis />}/>
          <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
