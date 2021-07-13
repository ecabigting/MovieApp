import React, { useState } from 'react'
// load config
import { POST_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'
// load components

// hooks

// load images
import NoImage from '../images/no_image.png'

const Home = () => {
    const [state ,setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(false);

    return <div>Home</div>
};

export default Home;