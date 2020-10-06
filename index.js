// index.js

// (4) pemanggilan pustaka yang telah diintall untuk
// dihubungkan pada file index.js
const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const { Agent } = require("http")
const app = express()


// (5)pemanggilan fungsi yang terdapat pada pustaka express, body-
// parser, dan cors

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// (6) membuat end-point pertama menggunakan method GET dengan url
// “/test”
// // (6.1)endpoint "/test" dengan method GET
// app.get("/test", (req,res) => {
//     // req merupakan variabel yang berisi data request
//     // res merupakan variabel yang berisi data response dari end-point

//     //membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         message: "ini end-point pertama ku",
//         method : req.method,
//         code: res.statusCode
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })

// // (6.2)endpoint "/profil/nama/umur" dengan method GET
// app.get("/profil/:name/:age", (req,res) => {
//     // :name dan :age -> diberikan titik dua didepan menunjukkan "name" & "age"
//     // bersifat dinamis yang dapat diganti nilainya saat melakukan request

//     // menampung data yang dikirimkan
//     let name = req.params.name // mengambil nilai pada parameter name
//     let age = req.params.age // mengambil nilai pada parameter age

//     // membuat objek yang berisi data yang akan dijadikan response 
//     // response berisi data nama dan umur sesuai dengan nilai parameter
//     let response = {
//         nama: name,
//         umur: age
//     }

//     // memberikan  response dengan format JSON yg berisi objek diatas
//     res.json(response)
// })

// (6.3)end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// (7) menambahkan fungsi untuk menjalankan server pada port tertentu.

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})