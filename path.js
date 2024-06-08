const path=require('path')

//Utility dat joins multiple files and folders using /
const pathURL=path.join('dir1','dir2','text1.txt')
console.log(pathURL)

//PWD- present working directory gives absolute path
const absPath='F:/BackEnd/inbuilt_modules/f1.txt'
const baseName=path.basename(absPath)
const dirName=path.dirname(absPath)
const extName=path.extname(absPath)
console.log({baseName,dirName,extName})

const allInfo=path.parse(absPath)
console.log(allInfo)