import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { Provider } from "react-redux";
import store from "./store/index"
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);