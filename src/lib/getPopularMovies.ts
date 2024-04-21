const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRhODIwZGQ1MDc2MzI4MWMyZThjZjJiZmEwMmM0MSIsInN1YiI6IjY2MjU2YzEyMjIxYmE2MDE3YzE0YTcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8ZvovR7C-_DEwbqI087EaAU-JcpMkL96cQeKYph0C8'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));