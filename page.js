const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGYwYjhiNDUxMzA5ZGU4YzhiMWJiMTU4MTJlMzI0OCIsIm5iZiI6MTc2NTgyOTA3Mi40NjU5OTk4LCJzdWIiOiI2OTQwNjlkMGNiYmVmYjQ4Njg4YzdhOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9QzmtnpAhK6FnP3Gdjv324JWlQsoz2Y--bdIrJn5W44'
  }
  };
const hamburgerPress = document.querySelector('.hamburger-pess'); //nbyn sidebar
const hamburger = document.querySelector('.hamburger');
const homepage= document.querySelector('.homepage');
const mainpage= document.querySelector('.mainpage');
const homebutton= document.querySelector('.Home');
const movies = document.querySelector(".movies");
const genre=document.querySelector(".genres");
const pages=document.querySelector(".pages");







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

fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options)//awwal page
    .then(response => response.json())
        .then(d => {
          d.results.forEach(movie => {
            movies.innerHTML+=
            `<div class="mvelement">
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
                <div class="mvname"><p>${movie.title}</p></div>
            </div>`
            });
        })
    .catch(error => console.error(error));

fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options) //pagenumberthingy
    .then(res=>res.json())
    .then(d=> {
        let currentpage=1;
        const lastpage=d.total_pages;
        for(let i=currentpage-3;i<currentpage;++i){
            if (i<=1){break;}
            pages.innerHTML+=`<button class="page-number">${i}</button>`;
        }
        for(let i=currentpage;i<currentpage+4;++i){
            if (i==lastpage){break;}
            pages.innerHTML+=`<button class="page-number">${i}</button>`;
        }
        const pagebuttons=document.querySelectorAll(".page-number");// bttons yllh ki tcreaw f had fetch so maghaykhdmoch brra must be declared hna darori
        pagebuttons.forEach(pagebutton => { // cuz pagebuttons returns object so darori boucle bach nparcouri f kolla elem
        pagebutton.addEventListener("click",function(){
        const pagenumber =pagebutton.textContent;
        movies.innerHTML="";
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pagenumber}`,options)
        .then(response => response.json())
        .then(d => {
          d.results.forEach(movie => {
            movies.innerHTML+=
            `<div class="mvelement">
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
                <div class="mvname"><p>${movie.title}</p></div>
            </div>`
            });
        })
    .catch(error => console.error(error));
})//mn ftch l hna haja whda btw
});
    })
    .catch(error => console.error(error));

fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",options)//genres part
    .then(res => res.json())
        .then(data => {
            data.genres.forEach(el => {
                genre.innerHTML+=
                    `<option>${el.name} </option>`
            });
        })
    .catch(error => console.error(error));

