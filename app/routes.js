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
                quality : req.body.quality
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

    // --- Basic routes

    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
};

