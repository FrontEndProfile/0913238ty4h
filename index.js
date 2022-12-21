const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8f86057d35msh4abb53f571dc0b5p1bb056jsn9670b223a536',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};


const fetch_api = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
// const filter_game = 'https://www.freetogame.com/api/games?category=pvp'


fetch(fetch_api, options)
    .then(response => response.json())
    .then(response => {
        const list = response;
        list.map((item) => {
            const img_title = item.title;
            const poster = item.thumbnail;
            const small_info = item.short_description;
            const download_link = item.game_url;
            const game_type = item.genre;
            const platform_type = item.platform;
            const publisher_auth = item.publisher;
            const release_time = item.release_date;
            const togame_game_url = item.freetogame_profile_url;
            const dev_name = item.developer;

            document.querySelector('#cards').innerHTML += `
               <div class="col-md-4">
                <div class="card">
                    <img class="card_img" src="${poster}">
                    <div class="card_body">
                        <h3 class="card_title">${img_title}</h3>
                        <p class="card_content">${small_info}<p>
                        <a href="${download_link}" class="card_down_link">Download Link</a>
                        <p class="card_game_type">Game type: ${game_type}<p>
                        <p class="card_game_form">Game Requirement: ${platform_type}<p>
                        <p class="card_game_publisher">publisher by: ${publisher_auth}<p>
                        <p class="card_game_release">Release: ${release_time}<p>
                        <a class="card_game_moreInfo" href="${togame_game_url}">More info</a>
                        <p class="card_game_made">Made by: ${dev_name}<p>
                    </div>
                </div>
              </div>
            `

        })
        console.log(response);
    })
    .catch(err => console.error(err));