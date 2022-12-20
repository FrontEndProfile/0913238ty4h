const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8f86057d35msh4abb53f571dc0b5p1bb056jsn9670b223a536',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};



fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
    .then(response => response.json())
    .then(response => {
        // console.log(response)
        // debugger
        // id.innerHTML = response[ok].id
        // title.innerHTML = response.title
        // thumbnail.innerHTML = response.thumbnail
        // short_description.innerHTML = response.short_description
        // game_url.innerHTML = response.game_url
        // genre.innerHTML = response.genre
        // platform.innerHTML = response.platform
        // publisher.innerHTML = response.publisher
        // developer.innerHTML = response.developer
        // release_date.innerHTML = response.release_date
        // freetogame_profile_url.innerHTML = response.freetogame_profile_url

        // for (let response   x <=302; x++) {
        //     id.innerHTML = response.id
        // }

        const list = response;
        list.map( (item) => {
           const name  = item.title;
           const poster = item.thumbnail;
        //    const movie = `<img src="${poster}"> <h2>${name}</h2>`

        const mean_title = `${name} ++`
        //    document.querySelector("#title").innerHTML += mean_title
        //    document.getElementById('title').innerHTML += `${name}`
        })
    })
    .catch(err => console.error(err));
