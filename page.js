const hamburgerPress = document.querySelector('.hamburger-pess'); //nbyn sidebar
const hamburger = document.querySelector('.hamburger');
const homepage= document.querySelector('.homepage');
const mainpage= document.querySelector('.mainpage');
const homebutton= document.querySelector('.Home');
hamburger.addEventListener("mouseover", function(){
   hamburgerPress.style.display='block';
})
hamburgerPress.addEventListener("mouseover",function(){
    hamburgerPress.style.display='block';
})
hamburger.addEventListener("mouseout",function(){
    hamburgerPress.style.display='none';
})
hamburgerPress.addEventListener("mouseout",function(){
    hamburgerPress.style.display='none';
})
homebutton.addEventListener("click",function(){
    homepage.style.display="block";
    mainpage.style.display="none";
})
fetch("https://api.themoviedb.org/3/discover/movie?api_key=d8f0b8b451309de8c8b1bb15812e3248")
    .then(response => response.json())
    .then(d => {
        let movies = document.querySelector(".movies");
        d.results.forEach(movie => {
            movies.innerHTML+=
            `<div class="mvelement">
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
                <div class="mvname"><p>${movie.title}</p></div>
            </div>`
        });
    })
    .catch(error => console.error(error));
