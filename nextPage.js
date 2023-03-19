  const Poster = document.getElementById('poster')
  const Title = document.getElementById('title')
  const Director = document.getElementById('director')
  const Actor = document.getElementById('actor')
  const Date = document.getElementById('rdate')
  const Genre = document.getElementById('genre')
  const Plot = document.getElementById('plot')
   const path = window.location.search.slice(1) // geeting the Id from the Url
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://www.omdbapi.com/?i=".concat(path,"&apikey=9598adea"), requestOptions)
        .then(response => response.json())
        .then((result) => {  console.log(result.Response)
         if (result.Response == "True" ){
          Plot.innerText = result.Plot
          Actor.innerText = result.Actors
          Director.innerText = result.Director
          Poster.src = result.Poster
          Title.innerText = result.Title
          Date.innerText = result.Released
          Genre.innerText = result.Genre
         console.log(result)
         }
         else {
          alert(result.Error) 
         }
        })
        .catch(error => console.log('error', error));
   
 
