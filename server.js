require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;


const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#image#', '<img src =' + options.image + '>')
    return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'hypatia')


app.get('/1', (req,res) => {
    res.render('template1', { title: 'Route 1', message: 'Welcome to first Route', content: 'Route 1 using Template 1'})
})

app.get('/2', (req,res) => {
    res.render('template1', { title: 'Route 2', message: 'Welcome to Second Route', content: 'Route 2 using Template 1'})
})

app.get('/3', (req,res) => {
  res.render('template1', { title: 'Route 3', message: 'Welcome to third Route', content: 'Route 3 using Template 1'})
})

app.get('/4', (req,res) => {
  res.render('template1', { title: 'Route 4', message: 'Welcome to Fourth Route', content: 'Route 4 using Template 1'})
})

app.get('/5', (req,res) => {
  res.render('template1', { title: 'Route 5', message: 'Welcome to Fifth Route', content: 'Route 5 using Template 1'})
})

app.get('/6', (req,res) => {
    res.render('template2', { title: 'Route 6', message: 'Welcome to Sixth Route', content: 'Route 6 using Template 2', image: 'https://s.yimg.com/cv/apiv2/default/ncaab/20190606/500x500/duke_wbgs.png'
        })
})

app.get('/7', (req,res) => {
  res.render('template2', { title: 'Route 7', message: 'Welcome to Seventh Route', content: 'Route 7 using Template 2', image: 'https://m.media-amazon.com/images/I/61bHbOVPhEL._AC_SX425_.jpg'
      })
})

app.get('/8', (req,res) => {
  res.render('template2', { title: 'Route 8', message: 'Welcome to Eighth Route', content: 'Route 8 using Template 2', image: 'https://www.labelvalue.com/media/catalog/product/L/V/LV-DUKE15C_2.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
      })
})

app.get('/9', (req,res) => {
  res.render('template2', { title: 'Route 9', message: 'Welcome to Ninth Route', content: 'Route 9 using Template 2', image: 'https://mobileimages.lowes.com/productimages/0b9b178b-05b0-4d0b-b7e7-ebf59e2f05c5/17079594.jpg?size=xl'
      })
})

app.get('/10', (req,res) => {
  res.render('template2', { title: 'Route 10', message: 'Welcome to Tenth Route', content: 'Route 10 using Template 2', image: 'https://1000logos.net/wp-content/uploads/2019/10/Duke-Blue-Devils-Logo-1966.jpg'
      })
})


app.listen(port,() => {
    console.log('listening on port' , port);
});
