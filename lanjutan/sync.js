//soal 1 B (menggunakan promise) SUCCES

// const method = "GET";
// const url = "https://jsonplaceholder.typicode.com/posts";

// const post = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();
//     ajax.open(method, url);
//     ajax.send();

//     ajax.onreadystatechange = () => {
//       if (ajax.status === 200) {
//         const result = JSON.parse(ajax.responseText);
//         resolve(result);
//       } else {
//         const error = "terjadi error bro....";
//         reject(error);
//       }
//     };
//   });
// };

// post(method, url)
//   .then((result) => {
//     result.map((item) => {
//       console.log(item.id);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//soal 1 A (menggunakan callback) SUCCES

// const method = 'GET'
// const url = 'https://jsonplaceholder.typicode.com/posts'

// const post = (method, url, callback) => {
//     const ajax = new XMLHttpRequest()
//     ajax.open(method, url)
//     ajax.send()

//     ajax.onreadystatechange = () => {
//         if (ajax.status === 200) {
//             const result = JSON.parse(ajax.responseText)
//             callback(null, result)
//         } else {
//             const error = 'terjadi error bro....'
//             callback(error, null)
//         }
//     }
// }

// post(method, url, (err, result) => {
//     if(err){
//         console.log(err);
//         return
//     } else {
//         result.map((item) => {
//         console.log(item.title);
//       });

//     }
// })

// soal 2 generate random id SUCCES

// const id = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof num !== "number") {
//                 reject('Parameter harus angka!')
//                 return
//             } else {
//                 const length = num
//                 let uniqueId = ""

//                 for (i = 0; i < length; i++) {
//                     uniqueId =+ Math.floor(Math.random() * 10)
//                 }

//                 resolve(uniqueId)
//             }

//         }, 2000)
//     })
// }

// id('dua')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// id(5)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//soal 3 menggunakan async await

// const pokemon = async () =>{
//     const url = 'https://pokeapi.co/api/v2/pokemon'
//     try {
//         const member = await fetch(url)
//         const result = await member.json()
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// pokemon()

//soal 4 menggunakan then catch

const url = 'https://pokeapi.co/api/v2/pokemon'


    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data.results);
    })
    .catch((error)=>{
        console.log(error);
    })





//soal 4

// const library = async ()=>{
//     const url = 'https://jsonplaceholder.typicode.com/posts'
//     try {
//         const identity = await fetch(url)
//         const result = await identity.json()
//         result.map((item)=>{
//             console.log(item.title);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// library()