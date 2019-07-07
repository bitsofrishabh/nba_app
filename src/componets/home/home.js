import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';

const Home = () => {

    return (
        <div>
            <NewsSlider type="featured" 
                settings={{
                    dots:false
                }}
            />
        </div>
    )

}

export default Home;