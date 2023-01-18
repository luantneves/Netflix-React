const key = '&api_key=8bcde99c6e97cb22d6f089bf2e600aa8';
const baseList = 'https://api.themoviedb.org/3';
const baseImg = 'https://image.tmdb.org/t/p/w300';
const moviesTheatres = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';

export default {
    getMovies: async () =>{

        const res = await fetch(`${baseList}${moviesTheatres}${key}`)
        const json = await res.json()
        const results = json.results;
        console.log(results);
        return results;
        
    }
    
}


