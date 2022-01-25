const GifViewer = ({ gifs, buttonAction, buttonText }) => (
    <div className='gifs-container'>
        {gifs.map((gif, key) => {
            return (
                <div key={key} className='gif-container'>
                    <img src={gif.images.fixed_width.url} />
                    <button onClick={(gif) => buttonAction(key)}>{buttonText}</button>
                </div>
            )
        })}
    </div>
);

export default GifViewer;