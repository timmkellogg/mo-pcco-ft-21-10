import axios from 'axios';
import { useState } from 'react';

function SearchPage() {
    const [input, setInput] = useState('');

    const search = async () => {
        if (!input) return;

        const res = await axios.get(`gifs/search/?input=${input}`);
        console.log(res.data.data);
    }
    
    return (
        <div>
            search page

            <input onChange={(e) => setInput(e.target.value)} />
            <button onClick={search}>search</button>
            <ul>

            </ul>
        </div>
    )
}

export default SearchPage;