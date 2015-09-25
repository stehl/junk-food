// -- Getting the models
var Taste = require('./models/taste');
var City = require('./models/city');
var Burger = require('./models/burger');
var Restaurant = require('./models/restaurant');
var User = require('./models/user');
var Ingredient = require('./models/ingredient');

// --- Wrapping the shit in a module exports

module.exports = function(app) {
    // --- API routes

        // --- Taste routes

        app.get('/api/taste', function(req, res){
            Taste.find(function(err, tastes){
                if(err)
                    res.send(err);
                res.json(tastes);
            });
        });

        app.post('/api/taste', function(req, res){
            Taste.create({
                name : req.body.name
            },function(err, taste){
                if(err)
                    res.send(err);
                Taste.find(function(err, tastes){
                    if(err)
                        res.send(err);
                    res.json(tastes);
                });
            });
        });

        app.delete('/api/taste/:taste_id', function(req, res){
            Taste.remove({
                _id : req.params.taste_id
            }, function(err, taste){
                if(err)
                    res.send(err);
                Taste.find(function(err, tastes){
                    if(err)
                        res.send(err);
                    res.json(tastes);
                });
            });
        });

        // --- Ingredients routes

        app.get('/api/ingredient', function(req, res){
            Ingredient.find(function(err, ingredients){
                if(err)
                    res.send(err);
                res.json(ingredients);
            });
        });

        app.post('/api/ingredient', function(req, res){
            Ingredient.create({
                name : req.body.name,
                taste : req.body.taste,
                quality : req.body.quality,
                picture : req.body.picture
            }, function(err, ingredient){
                if(err)
                    res.send(err);
                Ingredient.find(function(err, ingredients){
                    if(err)
                        res.send(err);
                    res.json(ingredients);
                });
            });
        });

        app.delete('/api/ingredient/:ingredient_id', function(req, res){
            Ingredient.remove({
                _id : req.params.ingredient_id
            }, function(err, ingredient){
                if(err)
                    res.send(err);
                Ingredient.find(function(err, ingredients){
                    if(err)
                        res.send(err);
                    res.json(ingredients);
                })
            });
        });

        // --- Burgers routes

        app.get('/api/burger', function(req, res){
            Burger.find(function(err, burgers){
                if(err)
                    res.send(err);
                res.json(burgers);
            });
        });

        app.post('/api/burger', function(req, res){
            Burger.create({
                name : req.body.name,
                restaurant : req.body.restaurant,
                description : req.body.description,
                price : req.body.price,
                rate : 2.5,
                ingredients : req.body.ingredients,
                picture : req.body.picture
            },function(err, burger){
                if(err)
                    res.send(err);
                Burger.find(function(err, burgers){
                    if(err)
                        res.send(err);
                    res.json(burgers);
                });
            });
        });

        app.delete('/api/burger/:burger_id', function(req, res){
            Burger.remove({
                _id : res.params.burger_id
            }, function(err, burger){
                if(err)
                    res.send(err)
                Burger.find(function(err, burgers){
                    if(err)
                        res.send(err);
                    res.json(burgers);
                });
            });
        });

        // --- Restaurant routes

        app.get('/api/restaurant', function(req, res){
            Restaurant.find(function(err, restaurants){
                if(err)
                    res.send(err);
                res.json(restaurants);
            });
        });

        app.post('/api/restaurant', function(req, res){
            Restaurant.create({
                name : req.body.name,
                city : req.body.city,
                burgers : "",
                rate : 2.5,
                avg_price : 0,
                picture : req.body.picture
            }, function(err, restaurant){
                if(err)
                    res.send(err);
                Restaurant.find(function(err, restaurants){
                    if(err)
                        res.send(err);
                    res.json(restaurants);
                });
            });
        });

        app.delete('/api/restaurant/:restaurant_id', function(req, res){
            Restaurant.remove({
                _id : req.params.restaurant_id
            }, function(err, restaurant){
                if(err)
                    res.send(err);
                Restaurant.find(function(err, restaurants){
                    if(err)
                        res.send(err);
                    res.json(restaurants);
                });
            });
        });

        // --- City routes

        app.get('/api/city', function(req, res){
            City.find(function(err, cities){
                if(err)
                    res.send(err);
                res.json(cities);
            });
        });

        app.post('/api/city', function(req, res){
            City.create({
                name : req.body.name,
                population : req.body.population,
                rate : 2.5
            }, function(err, city){
                if(err)
                    res.send(err);
                City.find(function(err, cities){
                    if(err)
                        res.send(err);
                    res.json(cities);
                });
            });
        });

        app.delete('/api/city/:city_id', function(req, res){
            City.remove({
                _id : res.params.city_id
            }, function(err, city){
                if(err)
                    res.send(err);
                City.find(function(err, cities){
                    if(err)
                        res.send(err);
                    res.json(cities);
                });
            }); 
        });

    // --- Basic routes

    app.get('*', function(req, res){
        res.sendfile('index.html');
    });
};
