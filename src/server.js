const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const ReactDOMServer = require('react-dom/server');
const App = require('../dist/entry-server');
app.use('/dist', express.static("dist"));
let template = fs.readFileSync('./dist/index.html','utf-8');
app.get('/', (req, res)=>{
    res.send('rs')
});
app.get('/rs', (req, res)=>{
    const html =  ReactDOMServer.renderToString(App);
    const htmlSsr = template.replace('<div>need render</div>', `<div id='qz'>${html}</div>`);
    console.log('html->', html, htmlSsr);
    res.send(htmlSsr)
});
app.listen(9999, ()=>{
    console.log('server started on 9999')
});