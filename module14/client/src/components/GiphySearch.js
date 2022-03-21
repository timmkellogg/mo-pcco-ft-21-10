import { useEffect, useState } from 'react';
import axios from 'axios';

import GifViewer from './GifViewer';

import '../styles/style.css';

function GiphySearch() {
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [savedGifs, setSavedGifs] = useState([]);
    useEffect(() => {
        const savedGifs = localStorage.getItem('savedGifs');

        if (savedGifs) setSavedGifs(JSON.parse(savedGifs));
    }, [])

    const search = async (event) => {
        event.preventDefault();
        if (!input) return;

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&rating=g&limit=10`);
        console.log(res.data.data);
        setGifs(res.data.data);
    };

    const save = (gif) => {
        const newArray = [...savedGifs, gif];

        setSavedGifs(newArray);
        localStorage.setItem('savedGifs', JSON.stringify(newArray));
    };

    const remove = (index) => {
        const newArray = savedGifs.filter((gif, key) => key !== index)

        setSavedGifs(newArray);
        localStorage.setItem('savedGifs', JSON.stringify(newArray));
    }

    return (
        <div>
            <h3>Saved Gifs</h3>
            <GifViewer
                gifs={savedGifs}
                buttonAction={remove}
                buttonText={'delete'}
            />
            <div>
                <h3>Gif Search</h3>
                <form onSubmit={search}>
                    <input value={input} onChange={(event) => setInput(event.target.value)} />
                    <button>search</button>
                </form>
                
                <GifViewer
                    gifs={gifs}
                    buttonAction={save}
                    buttonText={'save'}
                />
            </div>
        </div>
    )
}

export default GiphySearch;