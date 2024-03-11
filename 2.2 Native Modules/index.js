const fs = require('fs');

// fs.writeFile('message.txt' , "Hello Node from Neelima" , (err) =>{
//  if (err) throw err;
//  console.log("message saved successfully")
// })

fs.readFile("message.txt", "utf8", (err,data)=>{
    if (err) throw err;
    console.log(data)
})