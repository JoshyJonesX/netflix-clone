import axios from 'axios'

// allow CORS request
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

// base url to make request to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default instance
