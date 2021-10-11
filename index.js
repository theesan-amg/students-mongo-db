const http = require('http');
const mongoose = require("mongoose");
const server = http.createServer();

// Importer uniquenamesgenerator 
const { uniqueNamesGenerator, names } = require("unique-names-generator");

const levels = ["6eme", "5eme", "4eme", "3eme", "2nds", "1ere", "trm"];
const classes = ["A", "B", "C", "D", "E"];

const students = [];
for (let i = 0; i < 10000; i++) {
    students.push({
        name: uniqueNamesGenerator({ dictionaries: [names] }),
        age: Math.floor(Math.random() * 10 + 10),
        level: levels[Math.floor(Math.random() * levels.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        gender: Math.random() > 0.5 ? "M" : "F",
        mark: Math.random() * 20
    })
}

console.log(students);

const studentModal = require("./studentModel")

studentModal.create(students).then(res => {
    console.log(students);
}).catch(error => {
    console.error(error);
})

// studentModal.aggregate()
//     .match({ level: '6eme', class: "A" })
//     .group({
//         _id: null,
//         count: { $sum: 1 }
//     })
//     .then(console.log().catch(console.error()))




// Module export sert a exporter vers un autre fichiers
module.exports = mongoose.model("Student", studentModel);



// Connecte via mongo 
mongoose.connect('mongodb://localhost:27017/listStudent', (error) => {
    if (error) {
        console.error(error);
        // Process exit permet de quitter l'application 
        process.exit(1)
    }
    console.log('Mongo DB est bien connecter');
});


// Lire le port sur localhost
server.listen(5000, () => {
    console.log("Node .js " + 5000);
});