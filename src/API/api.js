import axios from "axios";

const API_KEY = "AIzaSyC6pPTwqITrqVkxdsuhNH9OGTnjOudI21U";

export default axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params: {
        key: API_KEY,
        part: 'snippet',
        maxResults: 25
    }
})