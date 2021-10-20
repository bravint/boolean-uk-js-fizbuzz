for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 8 === 0 ) {
      console.log('FizzBuzzFishBus')
      break
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 7 === 0) {
        console.log('Fish')
    } else if (i % 8 === 0) {
        console.log('Bus')
    } else {
      console.log(i)
    }
}

/* challenge 2 */

for (let i = 1; i < Infinity ; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 8 === 0) {
      console.log('FizzBuzzFishBus')  
      console.log(i)
      break
    }
}

/* answer for challenge 2 = 840 */