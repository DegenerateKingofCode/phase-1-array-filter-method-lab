// const findMatching = (arr, string) => {
//    const newArray =[]
//    const result = arr.filter(element => element === string);
//    return result.name;
// }

function findMatching(listDrivers, nameDriver){
    let newArr = listDrivers.filter( element => element.toUpperCase() === nameDriver.toUpperCase());
    return newArr
}

function fuzzyMatch(listDrivers, nameDriver){
    let newArr1 = listDrivers.filter(element => element[0] === nameDriver[0])
    return newArr1
}

function matchName(listDrivers, nameDriver){
    let newArr2 = listDrivers.filter( element => element.name === nameDriver)
    return newArr2
}