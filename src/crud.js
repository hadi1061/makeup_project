const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnCreate1 = document.getElementById('btnCreate1')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
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


btnRead.addEventListener('click', function(){ //read contents of the created text file
    let file = path.join(pathName, singleFileName)

    fs.readFile(file, function(err, data) { 
        if(err) {
            return console.log(err)
        }
        fileContents.value = data
        console.log("The file was read!")
    })
})
    
btnDelete.addEventListener('click', function() {
    let file = path.join(pathName, singleFileName)

    fs.writeFile(file, '', function(err) {
        if (err) {
            alert("An error occurred deleting the file contents: " + err.message)
            return console.log(err)
        }

        alert(singleFileName + " text file contents were deleted")
        fileContents.value = ""
        console.log("The file contents were deleted!")
    })
})



btnUpdate.addEventListener('click', function() { //update contents of the created text file
    let file = path.join(pathName, singleFileName)
    let contents = fileContents.value

    fs.writeFile(file, contents, function(err) { //param1: text file yg kita nak write, param2: apa yg kita nk write ke text file
        if(err) {
            return console.log(err)
        }
        alert(fileName.value + "text file was updated")
        console.log("The contents of file was updated")   
    })
})