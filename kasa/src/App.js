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

// <Route path="/" element= {<Header />} />
// <Route path="/" element= {<Footer />} />
//  <Route path="/" element= {<Error />} />
// <Route path="/house/:id" element= {(props) => <Houses {...props} />} />

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            
            <Route path="/" element= {<Home />} />
            <Route path="/about" element= {<About />} />
            <Route path="/house" element= {<Houses />} >
                <Route path=":id" element= {<Houses />} />
            </Route>
            <Route path="*" element= {<Error />} />
            
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
