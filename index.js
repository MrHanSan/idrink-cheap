const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const apkData = JSON.parse(fs.readFileSync('apk_data.json', 'latin1'))
const pug = require('pug');

app.set('view engine', 'pug')
app.set('title', 'Drink Cheap')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/low/:page', (req, res) => {
    res.render('tableView', {data: apkData.low_alk.slice((100*req.params.page), (100*req.params.page)+100), page: req.params.page})
});

app.get('/low/', (req, res) => {
    res.render('tableView', {data: apkData.low_alk})
});

app.get('/medium/:page', (req, res) => {
    res.render('tableView', {data: apkData.med_alk.slice((100*req.params.page), (100*req.params.page)+100), page: req.params.page})
});

app.get('/medium/', (req, res) => {
    res.render('tableView', {data: apkData.med_alk})
});

app.get('/med-high/:page', (req, res) => {
    res.render('tableView', {data: apkData.med_high_alk.slice((100*req.params.page), (100*req.params.page)+100), page: req.params.page})
});

app.get('/med-high/', (req, res) => {
    res.render('tableView', {data: apkData.med_high_alk})
});

app.get('/high/:page', (req, res) => {
    res.render('tableView', {data: apkData.high_alk.slice((100*req.params.page), (100*req.params.page)+100), page: req.params.page})
});

app.get('/high/', (req, res) => {
    res.render('tableView', {data: apkData.high_alk})
});


app.listen(80, () => {
  console.log('Example app listening on port 80!')
});
