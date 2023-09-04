function compareArrays(arr1, arr2) {
    let string1 = JSON.stringify(arr1);
    let string2 = JSON.stringify(arr2);
    if (string1 !== string2) {
        return false;
    }
    return arr1.every((element, i) => { return element===arr2[i]});

};

function getUsersNamesInAgeRange(users, gender) {

    let result = users.filter (users => {
        return users.gender==gender;
    })
    if (result.length === 0) {
        return 0;
    }
    let result2 = result.reduce((acc, result) => {
        return acc+ result.age
    },0) 
        return result2/ result.length;
};
