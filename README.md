# Movie Watchlist Tracker
A full-stack web application developed as a project night transformation that implements a personal movie watchlist with user authentication. Users can create accounts, log in securely, and manage their personal collection of movies they want to watch, marking them as watched or unwatched with a beautiful, modern interface.

![Movie Watchlist Tracker Screenshot](./public/app-screenshot.png)

Link to project: https://movie-watch-list-myvh.onrender.com/movies

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport.js, EJS

This application was built as a complete MVC (Model-View-Controller) architecture transformation from a basic todo list into a sophisticated movie watchlist tracker. The project demonstrates full-stack development skills with secure user authentication, database management, and responsive web design.

The server is built using Node.js with Express.js framework for robust routing and middleware management. Authentication is handled through Passport.js with local strategy, providing secure user registration and login functionality. Session management is implemented using express-session with MongoDB session storage.

The database layer uses MongoDB with Mongoose ODM for elegant data modeling. The Movie schema includes fields for title, genre, year, watched status, rating, notes, and user association, while the User schema handles secure password hashing using bcrypt. All movie operations are properly scoped to the authenticated user.

The frontend was completely redesigned with a modern movie theme using custom CSS with gradients, blur effects, and responsive design principles. JavaScript handles dynamic user interactions including adding movies, toggling watch status, and deleting movies from the watchlist.

## Optimizations
Implemented proper MongoDB indexing on userId fields for fast query performance. Used Mongoose's built-in validation and modern connection options for compatibility with current MongoDB versions. Database queries are optimized using countDocuments() for statistics rather than loading full datasets.

Implemented comprehensive middleware protection with authentication on all movie routes, preventing unauthorized access. Used Passport.js serialization/deserialization for efficient session management. Password security uses bcrypt with automatic salt generation.

Frontend performance uses modern CSS features like backdrop-filter blur effects and CSS Grid for responsive layouts. Event delegation is implemented efficiently using querySelectorAll with forEach for button listeners. API calls use proper HTTP methods with JSON content types.

## Lessons Learned:
**Full-Stack Architecture** - This project reinforced the importance of proper MVC separation and how each layer should have distinct responsibilities. The transformation from a simple todo app to a feature-rich movie tracker demonstrated how good architecture allows for easy feature expansion.

**Authentication Flow** - Working with Passport.js provided deep understanding of session-based authentication, middleware chains, and security best practices. Learning how user sessions work and how to properly protect routes was invaluable for building secure web applications.

**Database Design** - Designing the Movie schema with optional fields while maintaining required fields taught important lessons about flexible data modeling. Understanding how Mongoose middleware works for password hashing and validation was crucial for data integrity.

**Project Transformation** - Converting an existing codebase rather than starting from scratch taught valuable lessons about refactoring, dependency management, and maintaining functionality while completely changing the application's purpose. This mirrors real-world scenarios where existing systems need to be adapted.

## Future Improvements
Add a search function to quickly find movies in large watchlists. Include the ability to add personal ratings and review notes for watched movies.

Implement simple categories or tags to organize movies by genre. Add the ability to export the watchlist to a printable format. Include movie poster images from a free API to make the interface more visual.

## Examples of Other Work
- **[100Jobs React Board](https://github.com/JackGer26/100Jobs)** - React SPA demonstrating component architecture and modern frontend patterns
- **[Rock Paper Scissors Lizard Spock](https://github.com/JackGer26/Rock-Paper-Scissors-Lizard-Spock)** - Full-stack Node.js game with client-server communication
- **[Portfolio Website](https://github.com/JackGer26/portfolio)** - Modern React portfolio showcasing technical projects and skills