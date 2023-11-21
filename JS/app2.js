// // 3 домашка////
 const user = prompt(`Як вас звуть? `)
 const age = prompt( `Ваш вік?`)
 const city = prompt(`Місто де ви проживаєте?`)
 const four = user + age + city
 console.log(`${four}`)


 const x = prompt(`Добавьте пятизначне число сюди`)
 const firstNumber = Math.floor ( x/10000)%10
 
 const secondNumber = Math.floor( x/1000)%10
 
 const thirdNumber = Math.floor(x/100)%10
 
 const fourNumber = Math.floor(x/10)%10
 
 const fiveNumber = Math.floor(x/1)%10
 
 
 console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourNumber} ${fiveNumber}`)