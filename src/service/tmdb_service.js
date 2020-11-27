import axios from 'axios'

class tmdbService {
  constructor() {
    this.tmdb = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
        page: 1}
    })
  }
  
  async getMovies(type) {
    const response = await this.tmdb.get(`movie/${type}`)
    return response.data.results;
  }

  async getVideoUrl(id) {
    const response = await this.tmdb.get(`movie/${id}/videos`)
    return response.data.results[0]
  }

  async searchMovie(query) {
    const response = await this.tmdb.get(`search/movie?query=${query}`)
    return response.data.results[0]
  }
}

export default tmdbService;