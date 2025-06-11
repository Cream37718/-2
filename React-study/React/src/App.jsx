import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import home from "./component/Homes";
import contactus from "./component/contactus";
import webboard from "./component/webboard";
import urlnotfound from "./component/urlnotfound";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/">Thaivb.NET</a>
                <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navMain" 
                aria-controls="navMain"
                aria-expanded="false"   
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navMain" className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">หน้าเเรก</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/webboard/1234">เว็บบอร์ด</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contactus">ติดต่อเรา</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={home}></Route>
                <Route exact path="/webboard/:cat" component={webboard}></Route>
                <Route exact path="/contactus" component={contactus}></Route>
                <Route component={urlnotfound} ></Route>
            </Switch>

        </BrowserRouter>
    )
}
export default App;