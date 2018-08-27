var Product = require('../models/product');

var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://s1.thcdn.com/productimg/600/600/11482387-1664488483380202.jpg',
        title: 'FarCry 5',
        description: 'Buy FarCry 5 Game for the lowest price',
        price: 10

    }),

    new Product({
        imagePath: 'http://www.mobygames.com/images/covers/l/434019-assassin-s-creed-origins-deluxe-edition-playstation-4-front-cover.jpg',
        title: 'Assassin Creed Origin',
        description: 'Buy Assassin Creed Origin Game for the lowest price',
        price: 20

    }),

    new Product({
        imagePath: 'https://static.raru.co.za/cover/2018/05/23/6663677-l.jpg',
        title: 'Battlefield 5',
        description: 'Buy Battlefield 5 Game for the lowest price',
        price: 15

    }),

    new Product({
        imagePath: 'http://wickedhorror.thunderroadinc.netdna-cdn.com/wp-content/uploads/2015/11/fallout-4-ps4-games-qatar-store.jpg',
        title: 'Fallout 4',
        description: 'Buy Fallout 4 Game for the lowest price',
        price: 10

    }),

    new Product({
        imagePath: 'https://s1.thcdn.com/productimg/600/600/11304231-7874550377778574.jpg',
        title: 'God of War 4',
        description: 'Buy God of War 4 Game for the lowest price',
        price: 20

    }),

    new Product({
        imagePath: 'http://www.mobygames.com/images/covers/l/284614-watch-dogs-ps4-exclusive-edition-playstation-4-front-cover.jpg',
        title: 'Watchdogs',
        description: 'Buy Watchdogs Game for the lowest price',
        price: 10

    }),

    new Product({
        imagePath: 'https://static.raru.co.za/cover/2015/07/10/2781571-l.jpg?v=1498734159',
        title: 'Mass Effect Adromeda',
        description: 'Buy Mass Effect Adromeda Game for the lowest price',
        price: 15

    }),

    new Product({
        imagePath: 'http://pusabase.com/blog/wp-content/uploads/2014/11/ps4-grand-theft-auto-5-v-five-playstation-4-game-cover-art-821x1024.jpg',
        title: 'GTA V',
        description: 'Buy GTA V Game for the lowest price',
        price: 15

    }),

    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/injusticegodsamongus/images/e/e9/Injustice_2_PS4_cover.jpg',
        title: 'Injustice 2',
        description: 'Buy Injustice 2 Game for the lowest price',
        price: 10

    }),

]

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;

        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}