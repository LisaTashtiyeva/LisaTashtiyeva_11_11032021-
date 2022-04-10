import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Houses from "./pages/Houses"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
        <Routes>
            <Header />
            <Route path="/" element= {<Home />} />
            <Route path="/about" element= {<About />} />
            <Route path="/house/:id" element= {(props) => <Houses {...props} />} />
            <Route path="/" element= {<Error />} />
            <Footer />
        </Routes>
    </Router>
  );
}

export default App;
