const search = document.getElementById('search')
const button = document.getElementById('btn')
const box = document.getElementById('box')
let Card = document.querySelectorAll('.card')
let favorite = []
let myResult = {}
let MovieList = []
function Send(value) {
  const myObject = { hello:value };
const myObjectString = JSON.stringify(myObject);
localStorage.setItem('objectGreeting', myObjectString);
}


function showData(value) {
    console.log(value.Search)
     MovieList = value.Search
  let txt = ""
  let link = "this.href='./moreDetail.html?"
  let click = "AddFavorite('"
  function myFunction(value,index, array){
    txt += "<div class='card'><p>"+(index+1)+"</p><a class='link' onclick="+link+value.imdbID+"'"+">"+value.Title+"</a><button class='favorite' id='"+value.imdbID+"'"+"onclick="+click+value.imdbID+"')"+">Add to Favorite</button></div>";
  }
    MovieList.forEach(myFunction)
    box.innerHTML = txt
}

function Search() {
    let searchTerm = search.value
    console.log(searchTerm)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://www.omdbapi.com/?s=".concat(searchTerm,"&apikey=9598adea"), requestOptions)
        .then(response => response.json())
        .then((result) => {  console.log(result.Response)
         if (result.Response == "True" ){
          showData(result)
         }
         else {
          alert(result.Error) 
          Card.forEach(element => {
            element.remove()
          })
         }
        })
        .catch(error => console.log('error', error));
        
}

search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {  
     Search()
  }
});

function AddFavorite(id) {
  favorite.push(id)
  console.log(favorite)
   const mybutton = document.getElementById(id)
   mybutton.style.backgroundColor ="#85FFBD"
   mybutton.style.backgroundImage="linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
   mybutton.style.color = "black"
   localStorage.setItem("id", JSON.stringify(favorite));
   console.log(favorite)
}

