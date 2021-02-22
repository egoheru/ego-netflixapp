import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;

// 1cc144c85fb59fdbd68d346ce4201476
