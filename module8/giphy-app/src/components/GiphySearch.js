import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/style.css';

function GiphySearch() {
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [savedGifs, setSavedGifs] = useState([]);
    useEffect(() => {
        console.log('do something on load!')
    })

    const search = async (event) => {
        event.preventDefault();
        if (!input) return;

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&rating=g&limit=10`);
        console.log(res.data.data);
        setGifs(res.data.data);
    };

    const save = (gif) => {
        setSavedGifs([...savedGifs, gif])
    };

    const remove = (index) => {
        // const newArray = [...savedGifs];
        // newArray.splice(index, 1);
        const newArray = savedGifs.filter((gif, key) => key !== index)
        console.log(newArray)

        setSavedGifs(newArray);
    }

    return (
        <div>
            <div className='gifs-container'>
                <h3>Saved Gifs</h3>
                {savedGifs.map((gif, key) => {
                    return (
                        <div key={key} className='gif-container'>
                            <img src={gif.images.fixed_width.url} />
                            <button onClick={(gif) => remove(key)}>delete</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <h3>Gif Search</h3>
                <form onSubmit={search}>
                    <input value={input} onChange={(event) => setInput(event.target.value)} />
                    <button>search</button>
                </form>
                <div className='gifs-container'>
                    {gifs.map((gif, key) => {
                        return (
                            <div key={key} className='gif-container'>
                                <img src={gif.images.fixed_width.url} />
                                <button onClick={() => save(gif)}>save</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GiphySearch;