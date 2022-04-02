
const URL_API = "https://api.themoviedb.org/3";
const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmU2OGZjZDdhN2FmOTI4MTcyZmE4MTg2MTY5ZjY1MyIsInN1YiI6IjYyNDc4NWY5NDIwMjI4MDA2NDQwNTE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZOAEn4vwHnif_67ie_JtSvhFVg8bVkjAq-TzhFTpa6E'

export function get(path) {
    return fetch(URL_API + path, {
    headers: {
        Authorization:
        "Bearer "+ ACCESS_KEY,
        "Content-Type": "application/json;charset=utf-8",
    },
    }).then((result) => result.json());
}

