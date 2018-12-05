var fs = require('fs');

//Challenge 1
fs.readFile("./challenge1/info.txt","utf8", (err, data)=> {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});

//Challenge 2
let names = ['Eddy', 'Rico', 'Nancy', 'Jun'];
fs.appendFileSync("./challenge2/info.txt", names);
fs.appendFile("./challenge2/info.txt", names, (err, data)=> {
    if (err) {
        throw err;
    } else {
        console.log("Success!");
    }
});

//Challenge 3
fs.renameSync("./challenge3/binfo.txt", "./challenge3/info.txt");
or
fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt",(err, data)=>{
    if(err) {
        throw err;
    } else {
        console.log('file changed')
    }
});

//Challenge 4
fs.mkdir('./challenge4/copyfolder',(err,data)=>{
    if (err) {
        throw err
    } else {
        fs.copyFileSync('./challenge4/info.txt','./challenge4/copyfolder/info.txt')
    }
})

//Challenge 5
let text = fs.readFileSync('./challenge5/info.txt','utf8');
let newText = ""
for (let i = 0; i < text.length; i++) {
    if(text[i] === '-') {
        newText += ' ';
    } else {
        newText += text[i]
    }
}
fs.writeFileSync('./challenge5/info.txt', newText)

//Challenge 6
let files = fs.readdirSync("./challenge6/");
console.log(files);
let txtFiles = files.filter(file => file.endsWith(".txt"));
console.log(txtFiles);