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
const homebutton= document.querySelectorAll('.Home');
const movies = document.querySelector(".movies");
const genre=document.querySelector(".genres");
const pages=document.querySelector(".pages");
const mode=document.querySelector(".mode");
const navbar=document.querySelector(".navbar");
const actorsbutton=document.querySelectorAll(".actorsbutton");
const actorspage=document.querySelector(".actorspage");
const mainstuff=document.querySelector(".mainstuff");
const accpages=document.querySelector(".accpages");
const actorsinfo=document.querySelector(".actorsinfocontain");
const searchinput=document.querySelectorAll(".search-input");
const searchsend=document.querySelectorAll(".search-submit");
const searchthing=document.querySelector(".searchthing");
const searchpagination=document.querySelector(".searchpagination");
const sccarrier=document.querySelector(".sccarrier")





//humburger thingy
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
//hope page button
homebutton.forEach(el => {
    el.addEventListener("click",function(){
    pageload(1);
    homepage.style.display="block";
    mainstuff.style.display="block";
    mainpage.style.display="none";
    actorspage.style.display="none";
    searchthing.style.display="none";
})
});

//actor page
actorsbutton.forEach(el=> {
    el.addEventListener("click",function(){
    actorload(1);
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="block";
    mainstuff.style.display="block";
    searchthing.style.display="none";
})
});

//dark mode light mode thingy
mode.addEventListener("click",function(){
   document.body.classList.toggle("othermode");
   navbar.classList.toggle("othermode");
   hamburgerPress.classList.toggle("othermode");
})
//search for sum
searchsend.forEach(el => {
    el.addEventListener("click",function(){
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    searchthing.style.display="block";
    let a="";
    searchinput.forEach(el => {
        if (el.value)
            a=el.value;
    })
    search(a,1);
    })
});































//home page stuff w pagination
const pageload = function(p){
    let currentpage=p;
    movies.innerHTML = " ";
    pages.innerHTML=" ";
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentpage}`,options)//awwal page
    .then(response => response.json())
        .then(d => {
          d.results.forEach(movie => {
            movies.innerHTML+=
            `<div class="mvelement">
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
                <div class="mvname"><p>${movie.title}</p></div>
            </div>`
            });
            const lastpage=d.total_pages;
        for(let i=currentpage-3;i<currentpage;++i){
            if (i<1){continue;}
            pages.innerHTML+=`<button class="page-number">${i}</button>`;
        }
        for(let i=currentpage;i<currentpage+4;++i){
            if (i==lastpage){continue;}
            pages.innerHTML+=`<button class="page-number">${i}</button>`;
        }
        const pagebuttons=document.querySelectorAll(".page-number"); //bttons yllh ki tcreaw f had fetch so maghaykhdmoch brra must be declared hna darori
            pagebuttons.forEach(el => {
                el.addEventListener("click", function(){
                    currentpage = Number(el.textContent);
                    pageload(currentpage);
                })
            });
        })
    .catch(error => console.error(error));
}


//acotr page stuff w pagination

const actorload = function(p) {
    let currentpage = p;
    actorsinfo.innerHTML=" ";
    accpages.innerHTML=" ";
    fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${currentpage}`, options)
        .then(res => res.json())
        .then(d => {
            d.results.forEach(actor => {
                actorsinfo.innerHTML+=`
                    <div class="actorsinfo">
                        <div class="actorpic"><img src="https://image.tmdb.org/t/p/w500${actor.profile_path}"></div>
                        <div class="actorname"><p>${actor.name}</p></div></div>`
                ;
            });
            const lastpage = d.total_pages;
            for(let i = currentpage - 3; i < currentpage; ++i) {
                if (i < 1) { continue; }
                accpages.innerHTML += `<button class="accpage-number">${i}</button>`;
            }
            for(let i = currentpage; i < currentpage + 4; ++i) {
                if (i == lastpage) { continue; }
                accpages.innerHTML += `<button class="accpage-number">${i}</button>`;
            }
            const pagebuttons = document.querySelectorAll(".accpage-number");
            pagebuttons.forEach(el => {
                el.addEventListener("click", function() {
                    currentpage = Number(el.textContent);
                    actorload(currentpage);
                });
            });
        })
        .catch(error => console.error(error));
}
//search stuff
const search=function(searchname ,pagenmber){
    let currentpage=pagenmber;
    sccarrier.innerHTML=" ";
    searchpagination.innerHTML=" ";
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchname}&include_adult=true&language=en-US&page=${currentpage}`, options)
        .then(res => res.json())
        .then(d => {
            d.results.forEach(el => {
                sccarrier.innerHTML+=`
                    <div class="actorsinfo">
                        <div class="scelement">
                <div class="scpic"><img src=${el.poster_path||el.profile_path}></div>
                <div class="scname"><p> ${el.title||el.name}</p></div>
            </div>
        </div>`
                ;
            });
            const lastpage = d.total_pages;
            for(let i = currentpage - 3; i < currentpage; ++i) {
                if (i < 1) { continue; }
                searchpagination.innerHTML += `<button class="searchpagination-number">${i}</button>`;
            }
            for(let i = currentpage; i < currentpage + 4; ++i) {
                if (i == lastpage) { continue; }
                searchpagination.innerHTML += `<button class="searchpagination-number">${i}</button>`;
            }
            const pagebuttons = document.querySelectorAll(".searchpagination-number");
            pagebuttons.forEach(el => {
                el.addEventListener("click", function() {
                    currentpage = Number(el.textContent);
                    search(currentpage);
                });
            });
        })
        .catch(error => console.error(error));
}






fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",options)//genres part
    .then(res => res.json())
    .then(data => {
         data.genres.forEach(el => {
             genre.innerHTML+=
                 `<option>${el.name} </option>`
            });
        })
    .catch(error => console.error(error));



