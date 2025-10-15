// MOVIES ROUTES - PROTECTED ROUTES FOR AUTHENTICATED USERS
// =======================================================
// This file defines routes for movie watchlist functionality
// ALL routes here require user authentication to access

const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies') 
const { ensureAuth } = require('../middleware/auth')

// PROTECTED ROUTE - VIEW MOVIE WATCHLIST
// ============================
// GET /movies - Display user's movie watchlist
// ensureAuth middleware ensures only logged-in users can access this
// If user is not authenticated, they'll be redirected to login page
router.get('/', ensureAuth, moviesController.getMovies)

// PROTECTED ROUTES - MOVIE OPERATIONS
// ==================================
// All routes properly protected with ensureAuth middleware

// POST /movies/addMovie - Add a new movie to watchlist
router.post('/addMovie', ensureAuth, moviesController.addMovie)

// PUT /movies/markWatched - Mark a movie as watched
router.put('/markWatched', ensureAuth, moviesController.markWatched)

// PUT /movies/markUnwatched - Mark a movie as unwatched
router.put('/markUnwatched', ensureAuth, moviesController.markUnwatched)

// DELETE /movies/deleteMovie - Remove a movie from watchlist
router.delete('/deleteMovie', ensureAuth, moviesController.deleteMovie)

/*
MOVIE WATCHLIST WORKFLOW:
========================

1. User visits /movies
2. ensureAuth middleware checks if user is logged in
3. If not authenticated: redirect to login page
4. If authenticated: continue to movies controller
5. Controller displays user's personal movie watchlist
6. User can add movies, mark as watched/unwatched, or delete

SECURITY BENEFITS:
- All routes are properly protected with authentication
- Users can only see/modify their own movie watchlist
- Prevents unauthorized access to movie operations
- Maintains session-based authentication throughout the app
*/

module.exports = router