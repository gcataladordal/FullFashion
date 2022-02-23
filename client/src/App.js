import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

class App extends Component {

constructor(props) {
    super(props);
}

render() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="App">
                <Main />              
            </div>
        </BrowserRouter>
    );
}
}
export default App;
