const btn = document.getElementById('fetch-btn');

btn.onclick = () => fetchGifs();

function fetchGifs() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&limit=10')
    .then(response => response.json())
    .then(json => console.log(json))
}

function renderGifs(gifs) {
    const gifContainer = document.getElementById('gif-container');

    gifs.forEach((x) => {
        const newImg = document.createElement('img');
        console.log(x.images.original.url)
        newImg.setAttribute('src', x.images.original.url)

        gifContainer.append(newImg);
    })
}


// setTimeout((x) => {
//     console.log('two seconds passed')
// }, 2000)


//map, forEach, reduce

//map returns a new array
//const newArr = oldArr.map(num => num + 1)

//forEach
const oldArr = [1, 2, 3, 4, 5];
const newArr = [];
oldArr.forEach(num => newArr.push(num + 1));
console.log(newArr);


// oldArr.forEach(num => {
//     console.log(num)
// })