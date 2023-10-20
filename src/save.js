const save = ({ attributes }) => {
    const images = attributes.images || [];
    const text = attributes.text || '';
    const categories = attributes.categories || '';
    const stars = attributes.stars || 0;
    const starImage = `/wp-content/uploads/${stars}.png`;


    return (
        <div className="container-all">
            <div className="starsAndCat">
                <div className="categories">
                    {categories.includes('Las Vegas') ? (
                        <a href="https://restaurantstoeatin.com/category/las-vegas/" style={{ textDecoration: 'none' }}>Las Vegas</a>
                    ) : (
                        <p>{categories}</p>
                    )}
                </div>
                <div className='stars'>
            <img src={starImage} alt={`${stars} estrellas`} />
        </div>
            </div>
            <div className="my-gallery-block">
                {images.map((img, index) => {
                    if (index === 0) {
                        return (
                            <div className="image-large" key={img.id}>
                                <img src={img.url} alt={img.alt} />
                            </div>
                        );
                    }
                })}
                <div className="small-images-container">
                    {images.map((img, index) => {
                        if (index > 0 && index < 3) {
                            return (
                                <div className="image-small" key={img.id}>
                                    <img src={img.url} alt={img.alt} />
                                </div>
                            );
                        }
                    })}
                </div>
                {images.map((img, index) => {
                    if (index >= 3) {
                        return (
                            <div className={`image-hidden`} key={img.id}>
                                <img src={img.url} alt={img.alt} />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="container-text">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default save;


