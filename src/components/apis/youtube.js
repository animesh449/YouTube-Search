import axios from 'axios';

const KEY="AIzaSyDiMWfiLhGc5jzkWxXTLza5oTxrzj9rYhE";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
