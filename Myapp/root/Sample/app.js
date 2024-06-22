const express = require('express')
const app = express()
const cors = require('cors')
const people = require('./people')
const auth = require('./auth')
const path = require('path');

//app.use(express.static('./methods-public'))

app.use(express.urlencoded({ extended: false }))

//app.use('/images',express.static(path.join(__dirname,'images')));

app.use('/photos', express.static('images'));

// root\assets\images
// parse json
app.use(express.json())
app.use(cors())
app.use('/people', people)
app.use('/login', auth)

const dealsOfTheDay = [
  {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      imageUrl: 'http://localhost:5000/photos/MaskGroup24@2x.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, ipsum at convallis posuere.',
      quantity: 2
  },
  {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      imageUrl: 'http://localhost:5000/photos/MaskGroup92@2x.png',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      quantity: 2
  },
  {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup107@2x.png",
      description: "Suspendisse potenti. Sed aliquam varius mauris, ut interdum ligula suscipit quis.",
      quantity: 2
  },
  {
      id: 4,
      name: "Product 4",
      price: 49.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup111@2x.png",
      description: "Fusce scelerisque tortor nec nisi sollicitudin, vitae sodales turpis tempus.",
      quantity: 2
  },
  {
      id: 5,
      name: "Product 5",
      price: 59.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup112@2x.png",
      description: "Integer sit amet nisi eget nisl pulvinar consequat.",
      quantity: 2
  },
  {
      id: 6,
      name: "Product 6",
      price: 69.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup113@2x.png",
      description: "Curabitur sit amet consectetur magna. Sed bibendum lobortis metus id mattis.",
      quantity: 2
  },
  {
      id: 7,
      name: "Product 7",
      price: 79.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup118@2x.png",
      description: "Nunc vehicula augue in nulla feugiat luctus.",
      quantity: 2
  },
  {
      id: 8,
      name: "Product 8",
      price: 89.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup120@2x.png",
      description: "Pellentesque eget tortor eu mi luctus dictum.",
      quantity: 2
  },
  {
      id: 9,
      name: "Product 9",
      price: 99.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup121@2x.png",
      description: "Aenean vehicula tellus sed justo tempor, sed volutpat sapien mattis.",
      quantity: 2
  },
  {
      id: 10,
      name: "Product 10",
      price: 109.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup122@2x.png",
      description: "Phasellus sit amet semper dui, id finibus turpis.",
      quantity: 2
  },
  {
      id: 11,
      name: "Product 11",
      price: 119.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup123@2x.png",
      description: "Vestibulum tristique quam a risus vehicula, nec malesuada nisl fermentum.",
      quantity: 2
  },
  {
      id: 12,
      name: "Product 12",
      price: 129.99,
      imageUrl: "http://localhost:5000/photos/MaskGroup124@2x.png",
      description: "In auctor libero nec vehicula. Praesent vestibulum leo vel vehicula tristique.",
      quantity: 2
  },
];

const categories = {
    "categories": [
      {
        "name": "Category 1",
        "imageUrl": "http://localhost:5000/photos/catImages/Group87@2x.png"
      },
      {
        "name": "Category 2",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup52@2x.png"
      },
      {
        "name": "Category 3",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup53@2x.png"
      },
      {
        "name": "Category 4",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup54@2x.png"
      },
      {
        "name": "Category 5",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup55@2x.png"
      },
      {
        "name": "Category 6",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup56@2x.png"
      },
      {
        "name": "Category 7",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup57@2x.png"
      },
      {
        "name": "Category 8",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup88@2x.png"
      },
      {
        "name": "Category 9",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup55@2x-Copy.png"
      },
      {
        "name": "Category 10",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup56@2x-Copy.png"
      },
      {
        "name": "Category 11",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup57@2x-Copy.png"
      },
      {
        "name": "Category 12",
        "imageUrl": "http://localhost:5000/photos/catImages/MaskGroup88@2x-Copy.png"
      }
    ],
  }
  
app.get('/deals', (req, res) => {
  res.json(dealsOfTheDay);
});

app.get('/categories', (req, res)=>{
    res.json(categories);
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')

})
