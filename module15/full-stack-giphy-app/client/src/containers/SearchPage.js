import axios from 'axios';
import { useState } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';

import GifViewer from '../components/GifViewer.js';

function SearchPage() {
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);

    const auth = useProvideAuth();

    const search = async () => {
        if (!input) return;

        const res = await axios.get(`gifs/search/?input=${input}`, { headers: auth.authHeader() });
        console.log(res.data);
        setGifs(res.data);
    }

    const save = (url) => {
        axios.post('gifs', { url }, { headers: auth.authHeader() })
    }
    
    return (
        <div>
            search page

            <input onChange={(e) => setInput(e.target.value)} />
            <button onClick={search}>search</button>
            <GifViewer 
                gifs={gifs}
                buttonAction={save}
                buttonText='Save'
            />
        </div>
    )
}

export default SearchPage;