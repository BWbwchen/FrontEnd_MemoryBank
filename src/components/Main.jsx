import React, {useState} from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Home from 'components/Home.jsx';
import SideBar from 'components/SideBar.jsx';
import Content from 'components/Content.jsx';
import './Main.css';






export default(Main) => {
    const [isOpen, setOpen] = useState(true)
    const toggle = () => setOpen(!isOpen)

    return (
    <Router>
        <div className="main">
            <SideBar toggle={toggle} isOpen={isOpen}/>
            <Content toggle={toggle} isOpen={isOpen}/>

        </div>
    </Router>
    );
}
