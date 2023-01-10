import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from './FirstApp';
// import MyName from './SecondApp';
import Header from './Header';

// import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <MyName  /> */}
        {/* <CounterApp value={123}/> */}
        <Header/>
        <App/>
    </React.StrictMode>
);