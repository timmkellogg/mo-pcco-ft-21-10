//declaring students array (array of objects)

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


let students = [
    {
        name: 'Tim',
        favColor: 'yellow',
        location: 'Cleveland',
        likesPineapple: false
    }, {
        name: 'Daniel',
        favColor: 'blue',
        location: 'Portland',
        likesPineapple: true
    }, {
        name: 'Emily',
        favColor: 'green',
        location: 'Colorado',
        likesPineapple: true
    }, {
        name: 'Jane',
        favColor: 'purple',
        location: 'New York',
        likesPineapple: true
    },
    {
        name: 'Christina',
        favColor: 'red',
        location: 'Boulder',
        likesPineapple: false
    }
]


students = shuffleArray(students);

//declaring reference to list on page
const studentList = document.querySelector('#studentList')

// for loop
for (let i = 0; i < students.length; i++) {
    const newElement = document.createElement('li')
    newElement.textContent = `${students[i].name} - ${students[i].location}`
    newElement.classList.add(students[i].favColor)

    studentList.append(newElement)
}

// == equal
// === STRICTLY equal
// const var1 = 15;
// const var2 = "15";

// if(var1 === var2) {
//     console.log('they are equal')
// } else {
//     console.log('they are NOT equal')
// }