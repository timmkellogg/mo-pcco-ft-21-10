import axios from 'axios';
import { useState, useEffect } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';

import GifViewer from '../components/GifViewer.js';

function SavedPage() {
    const [gifs, setGifs] = useState([]);

    const auth = useProvideAuth();

    useEffect(() => {
        fetchGifs();
    }, [])

    const fetchGifs = async () => {
        const res = await axios.get('gifs', {headers: auth.authHeader()})

        console.log(res);

        setGifs(res.data);
    }

    return (
        <div>
            saved page
            <GifViewer 
                gifs={gifs}
                buttonAction={() => console.log('do this next')}
                buttonText='Remove'
            />
        </div>
    )
}

export default SavedPage;