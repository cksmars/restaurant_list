// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  const restaurantList = [
    {
      id: 1,
      name: 'Sababa 沙巴巴中東美食',
      category: '中東料理',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
      rating: '4.1'
    }, {
      id: 2,
      name: '梅子鰻蒲燒專賣店',
      category: '日本料理',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg',
      rating: '4.3'
    }, {
      id: 3,
      name: 'ZIGA ZIGA',
      category: '義式餐廳',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg',
      rating: '4.2'
    }, {
      id: 4,
      name: '艾朋牛排餐酒館',
      category: '美式',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5630/04.jpg',
      rating: '4.2'
    }, {
      id: 5,
      name: 'Gusto Pizza',
      category: '義式餐廳',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg',
      rating: '4.7'
    }, {
      id: 6,
      name: 'WXYZ Bar',
      category: '酒吧',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5632/06.jpg',
      rating: '4.3'
    }, {
      id: 7,
      name: 'Fika Fika Cafe',
      category: '咖啡',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg',
      rating: '4.3'
    }, {
      id: 8,
      name: '布娜飛比利時啤酒餐廳',
      category: '義式餐廳',
      image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5634/08.jpg',
      rating: '4.7'
    }
  ]

  res.render('index', { restaurants: restaurantList })
})

// start and listen on the Express sever
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})