import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './App.less'
import '_video-react@0.14.1@video-react/dist/video-react.css';
import { Provider } from 'react-redux'
import store from './store/index'




ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('root')
);
