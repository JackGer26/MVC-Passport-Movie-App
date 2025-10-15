const Movie = require('../models/Movie')

module.exports = {
    getMovies: async (req,res)=>{
        console.log(req.user)
        try{
            const movieItems = await Movie.find({userId:req.user.id})
            const moviesLeft = await Movie.countDocuments({userId:req.user.id, watched: false})
            res.render('movies.ejs', {movies: movieItems, left: moviesLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addMovie: async (req, res)=>{
        try{
            await Movie.create({
                title: req.body.movieTitle, 
                genre: req.body.genre || '',
                year: req.body.year || null,
                watched: false, 
                userId: req.user.id
            })
            console.log('Movie has been added to watchlist!')
            res.redirect('/movies')
        }catch(err){
            console.log(err)
        }
    },
    markWatched: async (req, res)=>{
        try{
            await Movie.findOneAndUpdate({_id:req.body.movieIdFromJSFile},{
                watched: true
            })
            console.log('Marked as Watched')
            res.json('Marked as Watched')
        }catch(err){
            console.log(err)
        }
    },
    markUnwatched: async (req, res)=>{
        try{
            await Movie.findOneAndUpdate({_id:req.body.movieIdFromJSFile},{
                watched: false
            })
            console.log('Marked as Unwatched')
            res.json('Marked as Unwatched')
        }catch(err){
            console.log(err)
        }
    },
    deleteMovie: async (req, res)=>{
        console.log(req.body.movieIdFromJSFile)
        try{
            await Movie.findOneAndDelete({_id:req.body.movieIdFromJSFile})
            console.log('Deleted Movie from Watchlist')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}