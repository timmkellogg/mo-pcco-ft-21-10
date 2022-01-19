const gifContainer = document.getElementById('gif-container');

async function fetchGifs() {
    gifContainer.innerHTML = '';

    const query = document.getElementById('gif-input').value;

    if (query) {
        const res = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=YOURAPIKEYGOESHERE&q=${query}`)

        if (!res.ok) {
            alert('something went wrong')
        }

        const json = await res.json();
        renderGifs(json.data);
    } else {
        alert('must provide search value!')
    }
}

function renderGifs(gifs) {

    gifs.forEach((gif) => {
        const newImg = document.createElement('img');
        console.log(gif)
        newImg.setAttribute('src', gif.images.original.url);
        newImg.setAttribute('alt-src', gif.images.original_still.url)

        newImg.onclick = () => {
            const currentURL = newImg.getAttribute('src'); //strings
            const altURL = newImg.getAttribute('alt-src'); //strings

            newImg.setAttribute('src', altURL);
            newImg.setAttribute('alt-src', currentURL);
        }

        gifContainer.append(newImg);
    })
}