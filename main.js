cars = ['Ford', 'Mustang', 'Toyota', 'BMW']
console.log(cars.length)
moreCars = ['Bentley', 'Cadillac', 'Dodge', 'Honda']
totalCars = cars.concat(moreCars)
console.log(totalCars)
console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))
stringOfCars = totalCars.join()
console.log(stringOfCars)
carsFromString =stringOfCars.split(",")
console.log(carsFromString)
carsInReverse = totalCars.reverse()
console.log(carsInReverse)
totalCars.sort()
console.log(carsInReverse.indexOf('BMW'))
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)
removedReptiles = pets.splice(4, 2, "hamster")
console.log(removedReptiles)
console.log(pets)
removedPet = pets.pop()
console.log(removedPet)
console.log(pets)
pets.push(removedPet)
console.log(pets)
firstPet = pets.shift()
console.log(firstPet)
pets.unshift('turtle')
console.log(pets)
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(addTwo = (num, index) => {
    return numbers[index]= num + 2

})
console.log(numbers)