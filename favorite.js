let storedId = JSON.parse(localStorage.getItem("id"));
console.log(storedId)
const box = document.getElementById('box')
let txt = ""
let i=0
storedId.forEach(element => {
      getData(element)
});

function getData(id) {
  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://www.omdbapi.com/?i=".concat(id,"&apikey=9598adea"), requestOptions)
        .then(response => response.json())
        .then((result) => {  console.log(result.Response)
         if (result.Response == "True" ){
         console.log(result.Title)
         showData(result)
         }
         else {
          alert(result.Error) 
         }
        })
        .catch(error => console.log('error', error));
   
}

function showData(value) { 
    i++
  let link = "this.href='./moreDetail.html?"
  let click = "RemoveFavorite('"
    txt += "<div class='card'><p>"+i+"</p><a class='link' onclick="+link+value.imdbID+"'"+">"+value.Title+"</a><button class='favorite' id='"+value.imdbID+"'"+"onclick="+click+value.imdbID+"')"+">Remove Favorite</button></div>";
    box.innerHTML = txt
}

function RemoveFavorite(id) {
   storedId.pop(id)
   localStorage.setItem("id", JSON.stringify(storedId));
   console.log(storedId)
   const mybutton = document.getElementById(id)
   mybutton.style.background ="red"
   mybutton.style.color = "white"

}