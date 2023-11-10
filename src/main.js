//function buttonClick(){
    
//    const query = document.getElementById("searchdata").value
//   fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
//    .then((response) => response.json ())
//    .then ((data) => {
//        
//        console.log (data)
//        const brand = data[0].brand;
//        const category = data[query].category ;
//        const name =data[query].name
//        document.getElementById('city-name').innerHTML = `brand : ${brand}`;
//        document.getElementById('category').innerHTML = `category ; ${category}`;
//        document.getElementById('name').innerHTML=`name ; ${name}`;
//    }
//    )  // output the API into console.innner
//}

//function brand(){
//    const category = document.getElementById('searchcategory').value
//    fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${category}`)
//    .then((response) => response.json())
//    .then ((data) => {
//        console.log (data)
//        var product = []
//        for (var i=0 ; i<3 ; i++)
//        {
//            product.push(data[i])
//        }
//        const p1 = product[0].name;
//      const p2 = product[1].name;
 //       const p2 = product[2].name;
//        document.getElementById('p1').innerHTML = `product1 ; ${p1}`;
//        document.getElementById('p2').innerHTML = `product2 ; ${p2}`;
//        document.getElementById('p3').innerHTML=`product3 ; ${p3}`;

//    }
//    )
//}

function buttonClicked(){
    
    var brand = document.getElementById('brand_input').value
    var productType = document.getElementById('productType').value
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var myproduct = []
       
        for (var i=0; i<54 ; i++){
            if(data[i].product_type == productType){
                    console.log(data[i])
                    myproduct.push(data[i])
                
                
                //document.getElementById("idno").innerHTML = myproduct[i].id
                //document.getElementById("brand").innerHTML = myproduct[i].brand
                //document.getElementById("product").innerHTML = myproduct[i].name
                
            } 


        }
                var image1 = myproduct[0].image_link    
                var image2 = myproduct[1].image_link 
                var image3 = myproduct[2].image_link 
                var image4 = myproduct[3].image_link 
                var image5 = myproduct[4].image_link   
                
                var web1 = myproduct[0].website_link
                var web1 = myproduct[1].website_link
                var web1 = myproduct[2].website_link
                var web1 = myproduct[3].website_link
                var web1 = myproduct[4].website_link

                document.getElementById("brand1").innerHTML = brand
                document.getElementById("product1").innerHTML = myproduct[0].name
                document.getElementById("price1").innerHTML = myproduct[0].price
                document.getElementById("desc1").innerHTML = myproduct[0].description
                document.getElementById("web1").innerHTML = `<a href=${web1}>more info</a>`
                document.getElementById("image1").innerHTML = `<image src="${image1}" alt="" Image>`
                document.getElementById('rate1').innerHTML = myproduct[0].rating

                
                
                document.getElementById("brand2").innerHTML = brand
                document.getElementById("product2").innerHTML = myproduct[1].name
                document.getElementById("price2").innerHTML = myproduct[1].price
                document.getElementById("desc2").innerHTML = myproduct[1].description
                document.getElementById("web2").innerHTML = `<a href=${web2}>more info</a>`
                document.getElementById('rate2').innerHTML = myproduct[1].rating
                document.getElementById("image2").innerHTML = `<image src="${image2}" alt="" Image>`
                
                document.getElementById("brand3").innerHTML = brand
                document.getElementById("product3").innerHTML = myproduct[2].name
                document.getElementById("price3").innerHTML = myproduct[2].price
                document.getElementById("desc3").innerHTML = myproduct[2].description
                document.getElementById("web3").innerHTML = `<a href=${web3}>more info</a>`
                document.getElementById('rate3').innerHTML = myproduct[2].rating
                document.getElementById("image3").innerHTML = `<image src="${image3}" alt="" Image>`

                document.getElementById("brand4").innerHTML = brand
                document.getElementById("product4").innerHTML = myproduct[3].name
                document.getElementById("price4").innerHTML = myproduct[3].price
                document.getElementById("desc4").innerHTML = myproduct[3].description
                document.getElementById("web4").innerHTML = `<a href=${web4}>more info</a>`
                document.getElementById('rate4').innerHTML = myproduct[3].rating
                document.getElementById("image4").innerHTML = `<image src="${image4}" alt="" Image>`

                document.getElementById("brand5").innerHTML = brand
                document.getElementById("product5").innerHTML = myproduct[4].name
                document.getElementById("price5").innerHTML = myproduct[4].price
                document.getElementById("desc5").innerHTML = myproduct[4].description
                document.getElementById("web5").innerHTML = `<a href=${web5}>more info</a>`
                document.getElementById('rate5').innerHTML = myproduct[4].rating
                document.getElementById("image5").innerHTML = `<image src="${image5}" alt="" Image>`

                btnCreate1.addEventListener('click', function() {
                    let file = path.join(pathName, singleFileName)
                    let contents = myproduct[0].name
                
                    fs.appendFile(file, contents + '\n', function(err) {
                        if(err) {
                            alert("An error occurred creating the file" + err.message)
                            return console.log(err)
                        }
                
                        alert(singleFileName + " text file was updated")
                        console.log("The file was updated")   
                    })
                })
                btnCreate2.addEventListener('click', function() {
                    let file = path.join(pathName, singleFileName)
                    let contents = myproduct[1].name
                
                    fs.appendFile(file, contents + '\n', function(err) {
                        if(err) {
                            alert("An error occurred creating the file" + err.message)
                            return console.log(err)
                        }
                
                        alert(singleFileName + " text file was updated")
                        console.log("The file was updated")   
                    })
                })
                btnCreate3.addEventListener('click', function() {
                    let file = path.join(pathName, singleFileName)
                    let contents = myproduct[2].name
                
                    fs.appendFile(file, contents + '\n', function(err) {
                        if(err) {
                            alert("An error occurred creating the file" + err.message)
                            return console.log(err)
                        }
                
                        alert(singleFileName + " text file was updated")
                        console.log("The file was updated")   
                    })
                })
                btnCreate4.addEventListener('click', function() {
                    let file = path.join(pathName, singleFileName)
                    let contents = myproduct[3].name
                
                    fs.appendFile(file, contents + '\n', function(err) {
                        if(err) {
                            alert("An error occurred creating the file" + err.message)
                            return console.log(err)
                        }
                
                        alert(singleFileName + " text file was updated")
                        console.log("The file was updated")   
                    })
                })
                btnCreate5.addEventListener('click', function() {
                    let file = path.join(pathName, singleFileName)
                    let contents = myproduct[4].name
                
                    fs.appendFile(file, contents + '\n', function(err) {
                        if(err) {
                            alert("An error occurred creating the file" + err.message)
                            return console.log(err)
                        }
                
                        alert(singleFileName + " text file was updated")
                        console.log("The file was updated")   
                    })
                })
                
    })

}


function recommend(){
    
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var myproduct1 = []
        for (var i=0; i<900 ; i++){
            if(data[i].rating ==5 && data[i].rating != null){
                console.log(data[i])
                myproduct1.push(data[i])
            }   
            } 
            document.getElementById("nama1").innerHTML = myproduct1[0].name
            document.getElementById("harga1").innerHTML = myproduct1[0].price
            document.getElementById("brend1").innerHTML = myproduct1[0].brand

            document.getElementById("nama2").innerHTML = myproduct1[1].name
            document.getElementById("harga2").innerHTML = myproduct1[1].price
            document.getElementById("brend2").innerHTML = myproduct1[0].brand

            document.getElementById("nama3").innerHTML = myproduct1[2].name
            document.getElementById("harga3").innerHTML = myproduct1[2].price
            document.getElementById("brend3").innerHTML = myproduct1[0].brand

            document.getElementById("nama4").innerHTML = myproduct1[3].name
            document.getElementById("harga4").innerHTML = myproduct1[3].price
            document.getElementById("brend4").innerHTML = myproduct1[0].brand

            document.getElementById("nama5").innerHTML = myproduct1[4].name
            document.getElementById("harga5").innerHTML = myproduct1[4].price
            document.getElementById("brend5").innerHTML = myproduct1[0].brand
    })

}

const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnCreate1 = document.getElementById('btnCreate1')
var btnCreate2 = document.getElementById('btnCreate2')
var btnCreate3 = document.getElementById('btnCreate3')
var btnCreate4 = document.getElementById('btnCreate4')
var btnCreate5 = document.getElementById('btnCreate5')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')
let singleFileName = 'addcart.txt'  // Set a fixed filename for storing data

btnCreate.addEventListener('click', function() {
    let file = path.join(pathName, singleFileName)
    let contents = fileContents.value

    fs.appendFile(file, contents + '\n', function(err) {
        if(err) {
            alert("An error occurred creating the file" + err.message)
            return console.log(err)
        }

        alert(singleFileName + " text file was updated")
        console.log("The file was updated")   
    })
})

btnCreate1.addEventListener('click', function() {
    let file = path.join(pathName, singleFileName)
    let contents = myproduct[0].name

    fs.appendFile(file, contents + '\n', function(err) {
        if(err) {
            alert("An error occurred creating the file" + err.message)
            return console.log(err)
        }

        alert(singleFileName + " text file was updated")
        console.log("The file was updated")   
    })
})

