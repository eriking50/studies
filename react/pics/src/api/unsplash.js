import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9RNJw2bDjpVZgMfZ_3xweo_tvHDIo-0EAtjuP_Y8JHk'
    }
})