const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTdkNzZlMTA4MGZkNmZkOTE1NDZjMzk5NDZhMDhlNiIsIm5iZiI6MTczNDQ1ODYxNy45MTUsInN1YiI6IjY3NjFiY2Y5ZmVmY2MwNGJjYTc4YWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN9W2nTJkXNBV55yN8sIcv7X3in3h8y60WXlO64a0zc",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
