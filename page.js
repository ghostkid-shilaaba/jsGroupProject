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
const sccarrier=document.querySelector(".sccarrier");
const moviefilter=document.querySelector(".moviefilter");
const peoplefilter=document.querySelector(".peoplefilter");
const tvfilter=document.querySelector(".tvfilter");
const moviedeats=document.querySelector(".movie-details");
const mediaside=document.querySelector(".details-grid");
const watchedbutton=document.querySelectorAll(".watched");//watched page stuff
const watchedpage=document.querySelector(".watched-page");
const watchedtitle=document.querySelector(".watched-title");
const watchedmoviescontainer=document.querySelector(".watched-movies-container");
const favbutton=document.querySelectorAll(".favbutton");//fav page stuff
const favpage=document.querySelector(".fav-page");
const favtitle=document.querySelector(".fav-title");
const favmoviescontainer=document.querySelector(".fav-movies-container");
const clearfav = document.querySelector(".clear-fav");//clear all fav
const clearwatched= document.querySelector(".clear-watched"); //clear all watched
const sortrating =document.querySelector(".sort-rating");
const sortdate =document.querySelector(".sort-date");
const sortalphabet =document.querySelector(".sort-alphabet");





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
    moviedeats.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="none";
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
    moviedeats.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="none";
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
    moviedeats.style.display="none";
    searchthing.style.display="block";
    watchedpage.style.display="none";
    favpage.style.display="none";
    let a="";
    searchinput.forEach(el => {
        if (el.value)
            a=el.value;
    })
    const t = "";
    search(a,1,t);
    })
});
 peoplefilter.addEventListener("click",function(){
    let a="";
    searchinput.forEach(el => {
        if (el.value)
            a=el.value;
    })
    search(a,1, "person");
    })
moviefilter.addEventListener("click",function(){
    let a="";
    searchinput.forEach(el => {
        if (el.value)
            a=el.value;
    })
    search(a,1, "movie");
    })
tvfilter.addEventListener("click",function(){
    let a="";
    searchinput.forEach(el => {
        if (el.value)
            a=el.value;
    })
    search(a,1, "tv");
    })
//watched page
watchedbutton.forEach(el => {
    el.addEventListener("click",function(){
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    moviedeats.style.display="none";
    searchthing.style.display="none";
    watchedpage.style.display="block";
    favpage.style.display="none";
    showmoviepage();
    })
});

favbutton.forEach(el => {
    el.addEventListener("click",function(){
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    moviedeats.style.display="none";
    searchthing.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="block";
    favmoviepage();
    })
});

//button to clear all mwatched movies
clearwatched.addEventListener("click",function(){
    localStorage.removeItem("mywatched");
    showmoviepage();
})
//button to clear all fav movies
clearfav.addEventListener("click",function(){
    localStorage.removeItem("myfav");
    favmoviepage();
})




























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
            </div>`;
            });
            const actorsstuff=document.querySelectorAll(".mvelement");//mv element yllh ki bda hna
            actorsstuff.forEach((el,index) => {//mvelement tableau donc khass nparcourih w foreach automatically l arg tani tikoun index
                el.addEventListener("click",function(){
                d.results[index].media_type = "movie";//hna khass ndefini hadi 7it f men popular movies api makijibch media type
                movieinfo(d.results[index]);
            })
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
const search=function(searchname ,pagenmber, type){
    let currentResults = [];
    if (!type){type="multi"}
    let currentpage=pagenmber;
    searchpagination.innerHTML=" ";
        fetch(`https://api.themoviedb.org/3/search/${type}?query=${searchname}&include_adult=true&language=en-US&page=${currentpage}`, options)
        .then(res => res.json())
        .then(d => {
            currentResults=d.results;
            display(currentResults);
            const lastpage = d.total_pages;
            for(let i = currentpage - 3; i < currentpage; ++i) {
                if (i < 1) { continue; }
                searchpagination.innerHTML += `<button class="searchpagination-number">${i}</button>`;
            }
            for(let i = currentpage; i < currentpage + 4; ++i) {
                if (i > lastpage) { break; }
                searchpagination.innerHTML += `<button class="searchpagination-number">${i}</button>`;
            }
            const pagebuttons = document.querySelectorAll(".searchpagination-number");
            pagebuttons.forEach(el => {
                el.addEventListener("click", function() {
                    currentpage = Number(el.textContent);
                    search(searchname,currentpage, type);
                });
            });
            sortrating.addEventListener("click", function(){//sort  by ratin
            const sorted = [...currentResults].sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));///3dots creates a copy to not messup the og data
                display(sorted);
        })
        sortdate.addEventListener("click", function(){//sort by date
            const sorted = [...currentResults].sort((a, b) => {
            const dateA = new Date(a.release_date || a.first_air_date || 0);
            const dateB = new Date(b.release_date || b.first_air_date || 0);
            return dateB - dateA;
                });
            display(sorted);
        })
        sortalphabet.addEventListener("click", function(){
            const sorted = [...currentResults].sort((a, b) => {
            const nameA = (a.title || a.name || "").toLowerCase();
            const nameB = (b.title || b.name || "").toLowerCase();
            return nameA.localeCompare(nameB);
                });
            display(sorted)
            })
    })
        .catch(error => console.error(error));
}
//movie info
const movieinfo=function(p){
    mediaside.innerHTML="";
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    searchthing.style.display="none";
    moviedeats.style.display="block";
    watchedpage.style.display="none";
    favpage.style.display="none";
    const type = p.media_type || (p.title ? "movie" : "tv");
    fetch(`https://api.themoviedb.org/3/${type}/${p.id}?append_to_response=videos,credits&language=en-US`,options)//had fetch hia li kanjib biha l trailer
    .then(res => res.json())
    .then (d => {
        const trailer = d.videos.results.find(v => v.type === "Trailer");
        const trailerKey = trailer ? trailer.key : "";
    mediaside.innerHTML+=`<div class="media-side">
            <div class="detail-pic">
                <img id="info-img" src=https://image.tmdb.org/t/p/w500${d.poster_path} alt="Movie Poster">
            </div>
            <div class="detail-trailer">
                <a href=https://www.youtube.com/watch?v=${trailerKey}>Trailer</a>
                </div>
        </div>

        <div class="info-side">
            <div class="detail-description">
                <h3>Description</h3>
                <p id="info-desc">${d.overview}</p>
            </div>
            <div class="detail-actors">
                <h3>Leading actors</h3>
                <div id="info-actors" class="actors-list">${d.credits.cast.slice(0, 10).map(a => a.name).join(", ")}</div>
            </div>
            <h3>Rating</h3>
                <p>⭐ ${d.vote_average.toFixed(1)}/10 (${d.vote_count} votes)</p>
            </div>
            <div class="detail-release">
                <h3>Release Date</h3>
                <p>${d.release_date || d.first_air_date || "Unknown"}</p>
            </div>
        </div>
    </div>`
        const markwatched=document.querySelector("#mark-watched");
        const markfav=document.querySelector("#addfav");
        markwatched.addEventListener("click",function(){
            const watchedlist=localStorage.getItem("mywatched");
            let watchedlisttab =watchedlist? JSON.parse(watchedlist) : [];
            if(!watchedlisttab.some(m=>m.id==p.id)){
                watchedlisttab.push({
                    id: p.id,
                    type: p.media_type 
                })
                localStorage.setItem("mywatched", JSON.stringify(watchedlisttab));
                alert("saved to your watchedlist");
            }
            else{
                alert("this movie is already in your watched history");
            }
        })
        markfav.addEventListener("click",function(){
            const favlist=localStorage.getItem("myfav");
            let favlisttab =favlist? JSON.parse(favlist) : [];
            const watchedlist=localStorage.getItem("mywatched");
            let watchedlisttab =watchedlist? JSON.parse(watchedlist) : [];
            if(!watchedlisttab.some(m=>m.id==p.id)){
                watchedlisttab.push({
                    id: p.id,
                    type: p.media_type 
                })
                localStorage.setItem("mywatched", JSON.stringify(watchedlisttab));//bach y koun f favs darori ykoun f watched
            }
            if(!favlisttab.some(m=>m.id==p.id)){
                favlisttab.push({
                    id: p.id,
                    type: p.media_type 
                })
                localStorage.setItem("myfav", JSON.stringify(favlisttab));
                alert("saved to your fav list");
            }
            else{
                alert("this movie is already in your fav history");
            }
        })
    })
    .catch(error => console.error(error));

}
//moviepagefunc
const showmoviepage=function(){
    watchedmoviescontainer.innerHTML = "";
    const storage=localStorage.getItem("mywatched");
    if (!storage){
        watchedtitle.innerHTML="no shows watched yet";
        watchedmoviescontainer.innerHTML = "";//to make it seem like the uhh el are deleted in real time
    }
    else{
        let moviecount=0;
        JSON.parse(storage).forEach(el => {
            fetch(`https://api.themoviedb.org/3/${el.type}/${el.id}?language=en-US`, options)
            .then(res=>res.json())
            .then (d=>{
            watchedmoviescontainer.innerHTML+=`<div class="mvelement">
                <button class="delete-watch-btn" data-id="${el.id}">X</button>
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${d.poster_path}"></div>
                <div class="mvname"><p>${d.title || d.name}</p></div>
            </div>`
            moviecount++;
            if(moviecount==JSON.parse(localStorage.getItem("mywatched")).length){
           const dels =document.querySelectorAll(`.delete-watch-btn`);
           dels.forEach(del => {
             del.addEventListener("click", function(){
                const idToDel = this.getAttribute("data-id");
                let currentwatched = JSON.parse(localStorage.getItem("mywatched"));
                currentwatched = currentwatched.filter(m => m.id != idToDel);
                localStorage.setItem("mywatched", JSON.stringify(currentwatched));
                showmoviepage()
           });
          
           })
        }

        })
            .catch(error => console.error(error));
        });
    }
}
//fav page
const favmoviepage=function(){
    favmoviescontainer.innerHTML = "";
    const storage=localStorage.getItem("myfav");
    if (!storage){
        favtitle.innerHTML="no shows liked yet";
        favmoviescontainer.innerHTML = "";
    }
    else{
         let moviecount=0;
        JSON.parse(storage).forEach(el => {
            fetch(`https://api.themoviedb.org/3/${el.type}/${el.id}?language=en-US`, options)
            .then(res=>res.json())
            .then (d=>{

            favmoviescontainer.innerHTML+=`<div class="mvelement mv-${el.id}">
                <button class="delete-fav-btn" data-id="${el.id}">X</button>
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${d.poster_path}"></div>
                <div class="mvname"><p>${d.title || d.name}</p></div>
            </div>` 
            moviecount++;
            if(moviecount==JSON.parse(localStorage.getItem("myfav")).length){
           const dels =document.querySelectorAll(`.delete-fav-btn`);
           dels.forEach(del => {
             del.addEventListener("click", function(){
                const idToDel = this.getAttribute("data-id");
                let currentFavs = JSON.parse(localStorage.getItem("myfav"));
                currentFavs = currentFavs.filter(m => m.id != idToDel);
                localStorage.setItem("myfav", JSON.stringify(currentFavs));
                favmoviepage()
           });
          
           })
        }
              
        })
            .catch(error => console.error(error));
        });
    }
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

const display = function(moviearr) { //bach man3adch bzzf ki dir nfs haja 4 mrrat hhhh
    sccarrier.innerHTML = ""; 

    moviearr.forEach(el => {
        sccarrier.innerHTML += `
            <div class="scelement">
                <div class="scpic"><img src="https://image.tmdb.org/t/p/w500${el.poster_path || el.profile_path || el.backdrop_path}"></div>
                <div class="scname"><p>${el.title || el.name}</p></div>
            </div>`;
    });

    // 2. Add Listeners to what we just built
    const scstufff = document.querySelectorAll(".scelement");
    scstufff.forEach((el, index) => {
        el.addEventListener("click", function() {
            // It uses the specific array passed into the function!
            movieinfo(moviearr[index]); 
        });
    });
};

