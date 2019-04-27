let input = document.querySelector(".form-control");

input.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchTitle();
    }
});

function displayMovie(movie) {
    let row = document.querySelector(".movies-container");
    let div = document.createElement("div");
    div.className = "col-md-4";
    row.appendChild(div);

    let div1 = document.createElement("div");
    div1.className = "card mb-4 shadow-sm";
    div.appendChild(div1);

    let img = document.createElement("img");
    img.className = "card-img-top";

    img.src =
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cd240012%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cd240012%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
    img.alt = "Thumbnail";
    img.style.height = "auto";
    img.style.width = "auto";
    img.style.display = "block";
    div1.appendChild(img);

    let div2 = document.createElement("div");
    div2.className = "card-body";
    let div3 = document.createElement("div");
    div3.className = "d-flex justify-content-between align-items-center";

    let h4 = document.createElement("h4");

    let small = document.createElement("small");
    small.className = "text-muted";

    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent =
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

    div3.appendChild(h4);
    div3.appendChild(small);
    div2.appendChild(div3);
    div2.appendChild(p);
    div1.appendChild(div2);

    h4.textContent = movie.title;
    small.textContent = movie.runtime + "mins";
    p.textContent = movie.overview;

    if (movie.poster_path != null) {
        img.src = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
    }
}

function searchTitle() {
    let movieElements = document.querySelectorAll(".col-md-4");
    movieElements.forEach(movie => {
        movie.style.display = "none";
    });

    let inputValue = input.value.toUpperCase();

    let filterMovies = movies.filter(movie => {
        return movie.title.toUpperCase().indexOf(inputValue) >= 0;
    });
    console.log(filterMovies);

    filterMovies.forEach(movie => {
        return displayMovie(movie);
    });
}

let allMovies = movies.map(movie => {
    return displayMovie(movie);
});

let genres = [];
movies.forEach(movie => {
    movie.genres.forEach(genre => {
        if (genres.indexOf(genre.name) === -1) {
            genres.push(genre.name);
        }
    });
});
console.log(genres.sort());
