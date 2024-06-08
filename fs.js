const fs=require('fs')

//Read a file
const context=fs.readFileSync('f1.txt','utf-8')
console.log(context)

//Write a file
const newContext='This is content to be written'
fs.writeFileSync('f3.txt',newContext)

//Append a file
fs.appendFileSync('f2.txt','This is appended text')

//Delete a file
fs.unlinkSync('f3.txt')

//Make a new directory from this folder
//fs.mkdirSync("newDirectory")

//fs.mkdirSync("recursiveDir/test1/newFolder",{recursive:true})

//Existence of a file
const doesExist=fs.existsSync('f1.txt')
console.log(doesExist)