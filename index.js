// Code your solution here
function findMatching(drivers, name) {
const listOfDrivers = drivers.filter(string => string.toLowerCase() === name.toLowerCase()) // the () is the callback function
return listOfDrivers
}


function fuzzyMatch(drivers, letters) {
const listOfLetters = drivers.filter(string => string.startsWith(letters))
return listOfLetters
}

function matchName(drivers, string){
const newName = drivers.filter(object => object.name === string)
return newName
}

/*
// original code
function findMatching(drivers){
    if (drivers === 'Bobby')
    return drivers
}

// need a callback function?
function findMatching(drivers, name) {

}
*/