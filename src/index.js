import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

let propsObj = {
    items: [
        {
            src: require("./img/001.jpg"),
            alt: "img1",
            money: 100.00
        },
        {
            src: require("./img/002.jpg"),
            alt: "img2",
            money: 200.00
        },
        {
            src: require("./img/003.jpg"),
            alt: "img3",
            money: 300.00
        },

    ],
};

ReactDOM.render(<App {...propsObj}/>, document.getElementById('root'))
registerServiceWorker()
