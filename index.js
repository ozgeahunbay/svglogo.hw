const inquirer= require('inquirer')
const jest= require('jest')
const{Circle, Square, Triangle} = require('./lib/shapes')
const fs= require('fs')




inquirer.prompt([
    {
        type: 'input',
        message: 'input a 3 letter logo',
        name: 'logo',
    },
    {
        type:'input',
        message: 'choose the color of your text',
        name: 'text',
        
    },
    {
        type:'list',
        message: 'choose the shape of your background',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type:'input',
        message: 'choose your background color',
        name: 'color'
        
    }
])

.then((response) => {
    switch(response.shape){
        case 'circle':
        response.shape= new Circle()
        response.shape.setColor(response.color)
        break
        case 'square':
        response.shape= new Square()
        response.shape.setColor(response.color)
        break
        case 'triangle':
        response.shape= new Triangle()
        response.shape.setColor(response.color)
        break

    }
    const svg=
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${response.shape.render()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.text}">${response.logo}</text>
  
  </svg>`


fs.writeFile("logo.svg", svg, function(err){
    if( err ) return console.log("Oooops")
    console.log("The logo is ready")
})
})

	


