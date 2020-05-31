import React, { Component } from 'react';
import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'

import 'antd/dist/antd.css'; 


class App extends Component {
    render() { 
        return ( 
            <div>
                <Router>
                    <Home></Home>
                </Router>
            </div>
        );
    }
}
 
export default App;