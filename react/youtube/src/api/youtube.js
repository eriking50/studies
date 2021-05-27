import axios from 'axios'

const KEY = 'AIzaSyBshNFfQjBWh40854Y1z1aNxOD3Bk0RyKs'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})