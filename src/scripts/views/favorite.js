import FavoriteIdb from "../data/restaurant-db";
import CONFIG from "../data/config";

const Favorite = { 
    async render() {
        return `
        <section class="content">
            <div class="latest">
                <h1>Explore Here!</h1>
                <div class="list" id="restaurant">
                </div>
                <div class="resto-item_not_found">
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const resto = await FavoriteIdb.getAllFavorite();
        let dataList = '';
        if (resto.length === 0) {
            document.querySelector('.resto-item_not_found').innerHTML = 'Tidak ada Restaurant Favorite yang dapat ditampilkan!';
        } else {
            resto.forEach((data) => {
                dataList += `
                <div class="list_item">
                    <img class="list_item_thumb" loading="lazy" src="${CONFIG.BASE_IMAGE_URL_SMALL + data.pictureId}" alt="${data.name}" title="${data.name}">
                    <div class="city">${data.city}</div>
                    <div class="list_item_content">
                        <p class="list_item_rating">
                            Rating : 
                            <a href="#" class="list_item_rating_value">${data.rating}</a>
                        </p>
                        <h1 class="list_item_title"><a href="/#/detail/${data.id}">${data.name}</a></h1>
                        <div class="list_item_desc">${data.description.slice(0, 150)}...</div>
                    </div>
                </div>
                `;
            });
            document.querySelector('#restaurant').innerHTML = dataList;
        }
    },
};

export default Favorite;