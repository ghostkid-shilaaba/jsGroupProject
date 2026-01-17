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
const sortrating =document.querySelector(".sort-rating");//search sort
const sortdate =document.querySelector(".sort-date");
const sortalphabet =document.querySelector(".sort-alphabet");
const sidebarcontainer = document.querySelector(".sidebar-container");
const sortitems = document.querySelectorAll(".sort-item");
const statscontainer=document.querySelector('.stats-container');//kpi stuff
const statscontainerDaily=document.querySelector('.stats-container-daily');
const kpipage=document.querySelectorAll('.kpi');
let myChart = null;
let dailyChart = null;
const addmoviestuff= document.querySelector("#add-movie-modal");//add movie stuff
const addbutton = document.querySelector(".userinfo"); 
const closebutton = document.querySelector(".close-btn");
const form = document.querySelector("#custom-movie-form");
const customgenreselect=document.querySelector("#custom-genre");
const catbutt=document.querySelectorAll(".categoriesss");
const catpage=document.querySelector(".catstuff");
const catinput=document.querySelector(".catinput");
const bttncat=document.querySelector(".bttncat");





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
    sidebarcontainer.style.display="none";
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
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
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
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
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
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
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
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
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
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
//sorting buttons for every genre
sortitems.forEach(el => {
    el.addEventListener("click", function() {
        const sort = this.getAttribute("data-sort");
        loadgenres(genre.value, sort, 1);
    });
});
//kpi page
kpipage.forEach(el=>{
    el.addEventListener("click", function(){
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    moviedeats.style.display="none";
    searchthing.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="none";
    statscontainer.style.display="block";
    statscontainerDaily.style.display="block";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
    kpithing();
    })
})

//add movie stuff
addbutton.addEventListener("click", function(){
    form.reset();
    addmoviestuff.style.display="block";
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    moviedeats.style.display="none";
    searchthing.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="none";
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
    
});
closebutton.addEventListener("click", function(){
    addmoviestuff.style.display = "none";
    homepage.style.display="block";
    pageload(1);
});
form.addEventListener("submit", function(){
    saveNewMovie();
})
catbutt.forEach(el => {
    el.addEventListener("click",function(){
    addmoviestuff.style.display="none";
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    moviedeats.style.display="none";
    searchthing.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="none";
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="block";
    displayCategories(); 
    })
    
});


const displayCategories = function() {
    const cats = JSON.parse(localStorage.getItem("cats")) || [];
    const catpage = document.querySelector(".catstuff");


    const categoryList = catpage.querySelector(".categories-list");
    if(categoryList) {
        categoryList.remove();
    }
    
    if(cats.length === 0) {
        console.log("No categories found");
        return;
    }
    
    
    const catContainer = document.createElement("div");
    catContainer.className = "categories-list";
    
    cats.forEach((cat, index) => {
        const catEl = document.createElement("div");
        catEl.className = "category-item";
        catEl.innerHTML = `
            <span class="cat-name">${cat.name || cat}</span>
            <button class="cat-delete-btn" data-index="${index}">×</button>
        `;
        catEl.addEventListener("click", function(e) {
            if (!e.target.classList.contains("cat-delete-btn")) {
                showCategoryMovies(cat.name || cat);
            }
        });
        catContainer.appendChild(catEl);
    });
    
    const inputSection = catpage.querySelector(".cat-input-section");
    if(inputSection) {
        inputSection.insertAdjacentElement("afterend", catContainer);
    } else {
        catpage.appendChild(catContainer);
    }
};

document.addEventListener("click", function(e){
    if(e.target.classList.contains("bttncat")) {
        e.preventDefault();
        console.log("bttncat clicked via delegation");
        const inputElement = document.querySelector(".catinput");
        const catValue = inputElement.value.trim();
        console.log("Input value:", catValue);
        if(!catValue) {
            alert("Please enter a category");
            return;
        }
        
        let cats = JSON.parse(localStorage.getItem("cats")) || [];
        cats.push({
            id: Date.now(), 
            name: catValue
        });
        localStorage.setItem("cats", JSON.stringify(cats));
        inputElement.value = "";
        console.log("Category added:", cats);
        displayCategories();
        updateGenreDropdown();
    }
    
    if(e.target.classList.contains("cat-delete-btn")) {
        e.preventDefault();
        const index = parseInt(e.target.dataset.index);
        const catName = e.target.previousElementSibling.textContent;
        
        if(confirm(`Are you sure you want to delete "${catName}"?`)) {
            let cats = JSON.parse(localStorage.getItem("cats")) || [];
            cats.splice(index, 1);
            localStorage.setItem("cats", JSON.stringify(cats));
            console.log("Category deleted");
            displayCategories();
            updateGenreDropdown();
        }
    }
});

const updateGenreDropdown = function() {
    customgenreselect.innerHTML = '<option value="">Select a category</option>';
    const customCats = JSON.parse(localStorage.getItem("cats")) || [];
    customCats.forEach(cat => {
        customgenreselect.innerHTML += 
            `<option value="${cat.name || cat}">${cat.name || cat}</option>`;
    });
};const showCategoryMovies = function(categoryName) {
    const customMovies = JSON.parse(localStorage.getItem("addedmovies")) || [];
    const catpage = document.querySelector(".catstuff");
    
    const moviesDisplay = catpage.querySelector(".category-movies-display");
    if(moviesDisplay) {
        moviesDisplay.remove();
    }
    
    const movieContainer = document.createElement("div");
    movieContainer.className = "category-movies-display";
    movieContainer.innerHTML = `<h3 style="text-align: center; margin-top: 20px; margin-bottom: 15px;">Your Movies - Add to "${categoryName}"</h3><div class="category-movies-grid"></div>`;
    
    const moviesGrid = movieContainer.querySelector(".category-movies-grid");
    
    if(customMovies.length === 0) {
        moviesGrid.innerHTML = "<p style='text-align: center; grid-column: 1/-1;'>No custom movies found. Add movies first!</p>";
    } else {
        customMovies.forEach(movie => {
            const movieEl = document.createElement("div");
            movieEl.className = "cat-movie-item";
            movieEl.innerHTML = `
                <div class="cat-movie-poster">
                    <img src="${movie.poster_path}" alt="${movie.title}">
                </div>
                <div class="cat-movie-title">${movie.title}</div>
                <button class="cat-add-movie-btn" data-movie-id="${movie.id}" data-category="${categoryName}">Add to ${categoryName}</button>
            `;
            movieEl.querySelector(".cat-add-movie-btn").addEventListener("click", function() {
                addMovieToCategory(movie, categoryName);
            });
            moviesGrid.appendChild(movieEl);
        });
    }
    
    const categoriesList = catpage.querySelector(".categories-list");
    if(categoriesList) {
        categoriesList.insertAdjacentElement("afterend", movieContainer);
    } else {
        catpage.appendChild(movieContainer);
    }
};

const addMovieToCategory = function(movie, categoryName) {
    let catMovies = JSON.parse(localStorage.getItem("catMovies")) || {};
    
    if(!catMovies[categoryName]) {
        catMovies[categoryName] = [];
    }
    
    if(catMovies[categoryName].some(m => m.id === movie.id)) {
        alert("This movie is already in this category!");
        return;
    }
    
    catMovies[categoryName].push(movie);
    localStorage.setItem("catMovies", JSON.stringify(catMovies));
    alert(`Added "${movie.title}" to "${categoryName}"!`);
};






















//home page stuff w pagination
const pageload = function(p){
    let currentpage=p;
    movies.innerHTML = " ";
    pages.innerHTML=" ";
const addedmv = JSON.parse(localStorage.getItem("addedmovies")) || [];//movies i add
if (p==1){
addedmv.forEach(movie => {
    movies.innerHTML += `
        <div class="mvelement custom-item" data-id="${movie.id}">
            <button class="del-btn" data-id="${movie.id}">X</button>
            <div class="mvpic">
                <img src="${movie.poster_path}">
            </div>
            <div class="mvname"><p>${movie.title}</p></div>
        </div>`;
});}
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentpage}`,options)
    .then(response => response.json())
        .then(d => {
          d.results.forEach(movie => {
            movies.innerHTML+=
            `<div class="mvelement apistuff">
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
                <div class="mvname"><p>${movie.title}</p></div>
            </div>`;
            });
            const actorsstuff=document.querySelectorAll(".apistuff");//apistuff yllh ki bda hna
            actorsstuff.forEach((el,index) => {//mvelement tableau donc khass nparcourih w foreach automatically l arg tani tikoun index
                el.addEventListener("click",function(){
                d.results[index].media_type = "movie";//hna khass ndefini hadi 7it f men popular movies api makijibch media type
                movieinfo(d.results[index]);
            })
            });
            const delbut = document.querySelectorAll(".del-btn");//works here after everything is loaded
            delbut.forEach(btn => {
             btn.addEventListener("click", function(e) {
            e.stopPropagation();//so that it doesnt show me that page when i click
             const id = this.getAttribute("data-id");
             deleteMe(id);
    });
});
            document.querySelectorAll(".custom-item").forEach(card => {
            card.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            showMyCustomInfo(id);
    });
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
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    catpage.style.display="none";
    addmoviestuff.style.display="none";
    
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
                    type: p.media_type,
                    genres: d.genres.map(g => g.name),
                    watchedDate: new Date().toISOString()
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
                    type: p.media_type,
                    genres: d.genres.map(g => g.name),
                    watchedDate: new Date().toISOString()
                })
                localStorage.setItem("mywatched", JSON.stringify(watchedlisttab));//bach y koun f favs darori ykoun f watched
            }
            if(!favlisttab.some(m=>m.id==p.id)){
                favlisttab.push({
                    id: p.id,
                    type: p.media_type,
                    genres: d.genres.map(g => g.name)
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
            if (el.isCustom) {
            watchedmoviescontainer.innerHTML += `
                <div class="mvelement">
                    <button class="delete-watch-btn" data-id="${el.id}">X</button>
                    <div class="mvpic"><img src="${el.poster_path || ''}"></div>
                    <div class="mvname"><p>${el.title}</p></div>
                </div>`;
            moviecount++;
            const dels =document.querySelectorAll(`.delete-watch-btn`);
            dels.forEach(del => {
             del.addEventListener("click", function(){
                if(confirm("Are you sure you want to remove this from watched?")) {
                const idToDel = this.getAttribute("data-id");
                let currentwatched = JSON.parse(localStorage.getItem("mywatched"));
                currentwatched = currentwatched.filter(m => m.id != idToDel);
                localStorage.setItem("mywatched", JSON.stringify(currentwatched));
                showmoviepage()
                }
           });
          
           })
             } else {
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
                if(confirm("Are you sure you want to remove this from watched?")) {
                const idToDel = this.getAttribute("data-id");
                let currentwatched = JSON.parse(localStorage.getItem("mywatched"));
                currentwatched = currentwatched.filter(m => m.id != idToDel);
                localStorage.setItem("mywatched", JSON.stringify(currentwatched));
                showmoviepage()
                }
           });
          
           })
        }

        })
            .catch(error => console.error(error));
        }});
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
            if (el.isCustom) {
            
            favmoviescontainer.innerHTML += `
                <div class="mvelement mv-${el.id}">
                    <button class="delete-fav-btn" data-id="${el.id}">X</button>
                    <div class="mvpic"><img src="${el.poster_path || ''}"></div>
                    <div class="mvname"><p>${el.title}</p></div>
                </div>`;
            moviecount++;
            const dels =document.querySelectorAll(`.delete-fav-btn`);
            dels.forEach(del => {
             del.addEventListener("click", function(){
                if(confirm("Are you sure you want to remove this from favorites?")) {
                const idToDel = this.getAttribute("data-id");
                let currentFavs = JSON.parse(localStorage.getItem("myfav"));
                currentFavs = currentFavs.filter(m => m.id != idToDel);
                localStorage.setItem("myfav", JSON.stringify(currentFavs));
                favmoviepage()
                }
           });
          
           })
        } else {
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
                if(confirm("Are you sure you want to remove this from favorites?")) {
                const idToDel = this.getAttribute("data-id");
                let currentFavs = JSON.parse(localStorage.getItem("myfav"));
                currentFavs = currentFavs.filter(m => m.id != idToDel);
                localStorage.setItem("myfav", JSON.stringify(currentFavs));
                favmoviepage()
                }
           });
          
           })
        }
              
        })
            .catch(error => console.error(error));
        }});
    }
}






fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",options)//genres part
    .then(res => res.json())
    .then(data => {
         data.genres.forEach(el => {
             genre.innerHTML+=
                `<option value="${el.id}">${el.name}</option>`;
            });
            if(!localStorage.getItem("cats")){localStorage.setItem("cats",JSON.stringify(data.genres))}
            
            const customCats = JSON.parse(localStorage.getItem("cats")) || [];
            customCats.forEach(cat => {
                customgenreselect.innerHTML += 
                    `<option value="${cat.name || cat}">${cat.name || cat}</option>`;
            });
        })
    .catch(error => console.error(error));
genre.addEventListener("change", function(){
        loadgenres(genre.value);
    })

const display = function(moviearr) { //bach man3adch bzzf ki dir nfs haja 4 mrrat hhhh
    sccarrier.innerHTML = ""; 

    moviearr.forEach(el => {
        sccarrier.innerHTML += `
            <div class="scelement">
                <div class="scpic"><img src="https://image.tmdb.org/t/p/w500${el.poster_path || el.profile_path || el.backdrop_path}"></div>
                <div class="scname"><p>${el.title || el.name}</p></div>
            </div>`;
    });

    const scstufff = document.querySelectorAll(".scelement");
    scstufff.forEach((el, index) => {
        el.addEventListener("click", function() {
            movieinfo(moviearr[index]); 
        });
    });
};
const loadgenres =function(currentgenre, sort = "popularity.desc", page = 1){//func cuz i wan confused otherwise hhhhh
    sidebarcontainer.style.display="block";
    homepage.style.display = "block";
    mainstuff.style.display = "block";
    mainpage.style.display = "none";
    actorspage.style.display = "none";
    searchthing.style.display = "none";
    moviedeats.style.display = "none";
    watchedpage.style.display = "none";
    favpage.style.display = "none";
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    addmoviestuff.style.display="none";
    moviedeats.style.display="none";
    catpage.style.display="none";
    movies.innerHTML = "";
    pages.innerHTML = "";
    
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${currentgenre}&sort_by=${sort}&language=en-US&page=${page}`, options)//api waits for an id so i cant use .textContent
    .then(response => response.json())
    .then(d => {
        d.results.forEach(movie => {
            movies.innerHTML += `
            <div class="mvelement">
                <div class="mvpic"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
                <div class="mvname"><p>${movie.title}</p></div>
            </div>`;
        });
        
        const actorsstuff = document.querySelectorAll(".mvelement");
        actorsstuff.forEach((el, index) => {
            el.addEventListener("click", function(){
                d.results[index].media_type = "movie";
                movieinfo(d.results[index]);
            });
        });
        const lastpage = d.total_pages;
        for(let i = page - 3; i < page; i++){
            if (i < 1) continue;
            pages.innerHTML += `<button class="page-number">${i}</button>`;
        }
        for(let i = page; i < page + 4; i++){
            if (i == lastpage) continue;
            pages.innerHTML += `<button class="page-number">${i}</button>`;
        }
        
        const pagebuttons = document.querySelectorAll(".page-number");
        pagebuttons.forEach(el => {
            el.addEventListener("click", function(){
                loadgenres(currentgenre, sort, Number(el.textContent));
            });
        });
    });
}
//chart part
const kpithing = function(){
    const addedMovies = JSON.parse(localStorage.getItem("addedmovies")) || [];
    const watchedMovies = JSON.parse(localStorage.getItem("mywatched")) || [];
    const favMovies = JSON.parse(localStorage.getItem("myfav")) || [];
    
    document.querySelector("#kpi-movies-added").textContent = addedMovies.length;
    document.querySelector("#kpi-movies-watched").textContent = watchedMovies.length;
    document.querySelector("#kpi-movies-fav").textContent = favMovies.length;
    
    if (watchedMovies.length > 0) {
        const dailyData = {};
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
            dailyData[dateStr] = 0;
        }
        
        watchedMovies.forEach(movie => {
            if (movie.watchedDate) {
                const watchDate = new Date(movie.watchedDate);
                const dateStr = watchDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                if (dailyData.hasOwnProperty(dateStr)) {
                    dailyData[dateStr]++;
                }
            }
        });
        
        const dailyLabels = Object.keys(dailyData);
        const dailyCounts = Object.values(dailyData);
        
        const dailyCtx = document.querySelector('#dailyWatchedChart').getContext('2d');
        
        if (dailyChart) { dailyChart.destroy(); }
        
        dailyChart = new Chart(dailyCtx, {
            type: 'bar',
            data: {
                labels: dailyLabels,
                datasets: [{
                    label: 'Movies Watched',
                    data: dailyCounts,
                    backgroundColor: '#8205ef',
                    borderColor: '#8205ef',
                    borderWidth: 2,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: 'white' }
                    }
                }
            }
        });
    }
    
    // Genre chart
    if (favMovies.length==0){return;}
    count={};
    favMovies.forEach(el => {
        el.genres.forEach(g=>{
            count[g]=(count[g]||0) +1;//so we could in the end see how many times is a genre present
        })
    });
    const genres = Object.keys(count);
    const genresocc = Object.values(count);
    const colors = [
        '#8205ef', '#9b6dca', '#42146a', '#7440a2', '#bf73d6', 
        '#3a0c63', '#CBB7FF', '#5a189a', '#e0aaff', '#7b2cbf',
        '#240046', '#10002b', '#540d6e', '#ee4266', '#ffd23f',
        '#3bceac', '#0ead69', '#0096c7', '#00b4d8'
    ];
    const doughnut = document.querySelector('#genreChart').getContext('2d');

    if (myChart) { myChart.destroy(); }

   myChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: genres,
        datasets: [{
            data: genresocc,
            backgroundColor: colors,
            hoverOffset: 15,
            borderWidth: 1,
            borderColor: '#000'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', 
                labels: { color: 'white' }
            }
        }
    }
});
    }
//create movie
const newmovies=localStorage.getItem("addedmovies");
const saveNewMovie = function() {

    let custmovies = JSON.parse(localStorage.getItem("addedmovies")) || [];
    
    const newMovie = {
        id: Date.now().toString(),
        title: document.querySelector("#custom-name").value.trim(),
        overview: document.querySelector("#custom-desc").value,
        genres: [document.querySelector("#custom-genre").value], 
        release_date: document.querySelector("#custom-date").value,
        vote_average: document.querySelector("#custom-rating").value || 0, 
        vote_count: document.querySelector("#custom-votes").value || 0,
        poster_path: null, 
        isCustom: true
    };

    custmovies.push(newMovie);
    localStorage.setItem("addedmovies", JSON.stringify(custmovies));
    alert("Movie added!");
    pageload(1); 
};
// del movie
const deleteMe = function(id) {
    let movies = JSON.parse(localStorage.getItem("addedmovies")) || [];
    movies = movies.filter(m => m.id !== id); 
    localStorage.setItem("addedmovies", JSON.stringify(movies));
    pageload(1); 
    homepage.style.display = "block";
    mainstuff.style.display = "block";
};
//show added movies info
const showMyCustomInfo = function(id) {
    const movies = JSON.parse(localStorage.getItem("addedmovies")) || [];
    const movie = movies.find(m => m.id === id);
    addmoviestuff.style.display="none";
    homepage.style.display="none";
    mainpage.style.display="none";
    actorspage.style.display="none";
    mainstuff.style.display="block";
    moviedeats.style.display="none";
    searchthing.style.display="none";
    watchedpage.style.display="none";
    favpage.style.display="none";
    statscontainer.style.display="none";
    statscontainerDaily.style.display="none";
    moviedeats.style.display="block";
    catpage.style.display="none";
    mediaside.innerHTML = `
        <div class="media-side">
        <div class="detail-pic">
            <img id="info-img" src="${movie.poster_path || 'https://via.placeholder.com/500x750?text=No+Poster+Available'}" alt="Movie Poster">
        </div>
        <div class="detail-trailer">
            <p>No Trailer Available</p>
        </div>
    </div>

    <div class="info-side">
        <h1>${movie.title}</h1>
        
        <div class="detail-description">
            <h3>Description</h3>
            <p id="info-desc">${movie.overview || "No description provided."}</p>
        </div>

        <div class="detail-actors">
            <h3>Leading actors</h3>
            <div id="info-actors" class="actors-list">Custom Entry / No Cast Listed</div>
        </div>

        <div class="detail-rating">
            <h3>Rating</h3>
            <p>⭐ ${(Number(movie.vote_average) || 0).toFixed(1)}/10 (${movie.vote_count || 0} votes)</p>
        </div>

        <div class="detail-release">
            <h3>Release Date</h3>
            <p>${movie.release_date || "Unknown"}</p>
        </div>
        
        <div class="detail-genres">
            <h3>Genres</h3>
            <p>${movie.genres ? movie.genres.join(", ") : "None"}</p>
        </div>
        <div class="detail-edit">
            <button class="edit-btn-trigger" style="cursor:pointer; padding: 10px; background: #8205ef; color: white; border: none; border-radius: 5px; width: 100%; margin-bottom: 10px;">
                Edit Details
            </button>
    </div>
    `;
    //edit movie part
    const editbttn = document.querySelector(".edit-btn-trigger");
    editbttn.addEventListener("click", function() {
    document.querySelector("#custom-name").value = movie.title;
    document.querySelector("#custom-desc").value = movie.overview;
    document.querySelector("#custom-genre").value = movie.genres[0];
    document.querySelector("#custom-date").value = movie.release_date || "";
    document.querySelector("#custom-rating").value = movie.vote_average || "";
    document.querySelector("#custom-votes").value = movie.vote_count || "";
    const allLists = ["addedmovies", "myfav", "mywatched"];
    
    allLists.forEach(listName => {//to have the movie edited in watched n favs too
        let list = JSON.parse(localStorage.getItem(listName)) || [];
        list = list.filter(m => m.id !== movie.id);
        localStorage.setItem(listName, JSON.stringify(list));
    });
    addmoviestuff.style.display = "block";
    moviedeats.style.display = "none";
});
    document.querySelector("#mark-watched").addEventListener("click", function() {
        let watched = JSON.parse(localStorage.getItem("mywatched")) || [];
        if (!watched.some(m => m.id == movie.id)) {
            watched.push({
                id: movie.id,
                title: movie.title,
                genres: movie.genres,
                isCustom: true 
            });
            localStorage.setItem("mywatched", JSON.stringify(watched));
            alert("Added to watched!");
        }
    });
    document.querySelector("#addfav").addEventListener("click", function() {
        let favs = JSON.parse(localStorage.getItem("myfav")) || [];
        if (!favs.some(m => m.id == movie.id)) {
            favs.push({
                id: movie.id,
                title: movie.title,
                genres: movie.genres,
                isCustom: true
            });
            localStorage.setItem("myfav", JSON.stringify(favs));
            alert("Added to favorites!");
        }
        let watched = JSON.parse(localStorage.getItem("mywatched")) || [];
        if (!watched.some(m => m.id == movie.id)) {
            watched.push({
                id: movie.id,
                title: movie.title,
                genres: movie.genres,
                isCustom: true 
            });
            localStorage.setItem("mywatched", JSON.stringify(watched));}
    });
    

};
