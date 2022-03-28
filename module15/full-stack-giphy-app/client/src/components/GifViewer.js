const GifViewer = ({ gifs, buttonAction, buttonText }) => (
    <div className='gifs-container'>
        {gifs.map((gif, key) => {
            console.log(gif);
            return (
                <div key={key} className='gif-container'>
                    <img src={buttonText === 'Save' ? gif.images.fixed_width.url : gif.url} />
                    <button onClick={() => buttonAction(buttonText === 'Save' ?  gif.images.fixed_width.url : gif._id)}>{buttonText}</button>
                </div>
            )
        })}
    </div>
);

export default GifViewer;