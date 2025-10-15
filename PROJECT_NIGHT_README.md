# Movie Watchlist Tracker

This is a full-stack web application developed as a project night transformation that implements a personal movie watchlist with user authentication. Users can create accounts, log in securely, and manage their personal collection of movies they want to watch, marking them as watched or unwatched with a beautiful, modern interface.

Link to Project: [Add your deployed link here when ready]

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport.js, EJS

This application was built as a complete MVC (Model-View-Controller) architecture transformation from a basic todo list into a sophisticated movie watchlist tracker. The project demonstrates full-stack development skills with secure user authentication, database management, and responsive web design.

**Backend Architecture:**
The server is built using Node.js with Express.js framework for robust routing and middleware management. Authentication is handled through Passport.js with local strategy, providing secure user registration and login functionality. Session management is implemented using express-session with MongoDB session storage via connect-mongo, ensuring persistent user sessions across server restarts.

The database layer uses MongoDB with Mongoose ODM for elegant data modeling. The Movie schema includes fields for title, genre, year, watched status, rating, notes, and user association, while the User schema handles secure password hashing using bcrypt. All movie operations are properly scoped to the authenticated user, preventing unauthorized access to other users' watchlists.

**Frontend Design:**
The user interface was completely redesigned with a modern movie theme using custom CSS with gradients, blur effects, and responsive design principles. The application features a beautiful landing page, secure authentication forms, and an intuitive movie management interface with statistics cards showing total movies, unwatched count, and watched count.

JavaScript handles dynamic user interactions including adding movies with title/genre/year fields, toggling watch status with visual feedback, and deleting movies from the watchlist. All frontend API calls use modern fetch() with proper error handling and immediate UI updates through location.reload() for seamless user experience.

**Security Implementation:**
Every route is properly protected with authentication middleware ensuring users can only access their own data. Password hashing is implemented using bcrypt in the User model's pre-save middleware. Session security includes proper secret management and MongoDB session persistence. Input validation is handled on both client and server sides using the validator library.

**MVC Architecture:**
- **Models:** Movie.js and User.js handle data structure and database interactions
- **Views:** EJS templates provide server-side rendering with dynamic content injection
- **Controllers:** Separate controllers for authentication (auth.js), home page (home.js), and movie operations (movies.js)
- **Routes:** Clean separation between public routes (main.js) and protected movie routes (movies.js)

## Optimizations

**Database Optimization:**
Implemented proper MongoDB indexing on userId fields for fast query performance. Used Mongoose's built-in validation and removed deprecated connection options (useFindAndModify, useCreateIndex) for compatibility with modern MongoDB versions. Database queries are optimized using countDocuments() for statistics rather than loading full datasets.

**Authentication & Security:**
Implemented comprehensive middleware protection with ensureAuth on all movie routes, preventing unauthorized access. Used Passport.js serialization/deserialization for efficient session management. Password security uses bcrypt with automatic salt generation in pre-save middleware hooks.

**Frontend Performance:**
CSS uses modern features like backdrop-filter blur effects and CSS Grid for responsive layouts without JavaScript frameworks. Event delegation is implemented efficiently using querySelectorAll with forEach for button listeners. Optimized API calls with proper HTTP methods (GET, POST, PUT, DELETE) and JSON content types.

**Code Organization:**
Separated concerns with dedicated CSS files (home.css, movies.css) and JavaScript (movies.js) for maintainable code. Used semantic HTML with accessibility considerations and Font Awesome icons for visual consistency. Implemented proper error handling with try-catch blocks and user-friendly error messages.

**Responsive Design:**
Mobile-first CSS approach with flexible grid layouts that adapt to all screen sizes. Used CSS custom properties and modern layout techniques for consistent spacing and typography. Optimized touch targets and navigation for mobile users.

## Future Improvements

**Authentication Page Styling:**
Given more time, I would extend the movie theme styling to the login and signup pages to create a fully cohesive user experience. Currently, these pages use basic styling while the main application features the beautiful movie-themed design with gradients, blur effects, and modern CSS. The authentication pages would benefit from:

- Implementing the same blue gradient background and movie-themed color scheme
- Adding the film icon branding and consistent typography (Poppins font)
- Creating card-based layouts with backdrop blur effects matching the main app
- Adding subtle animations and hover effects for form interactions
- Implementing responsive design patterns consistent with the movie watchlist interface
- Including proper error message styling that matches the overall design aesthetic

This would ensure users experience the polished movie theme from the moment they first visit the application, creating a seamless visual journey from authentication through to the main watchlist functionality.

## Lessons Learned:

**Full-Stack Architecture:** This project reinforced the importance of proper MVC separation and how each layer should have distinct responsibilities. The transformation from a simple todo app to a feature-rich movie tracker demonstrated how good architecture allows for easy feature expansion and modification.

**Authentication Flow:** Working with Passport.js provided deep understanding of session-based authentication, middleware chains, and security best practices. Learning how req.user is populated, session serialization works, and how to properly protect routes was invaluable for building secure web applications.

**Database Design:** Designing the Movie schema with optional fields (genre, year, rating, notes) while maintaining required fields (title, watched, userId) taught important lessons about flexible data modeling. Understanding how Mongoose middleware works for password hashing and validation was crucial for data integrity.

**Modern CSS Techniques:** Implementing the movie theme with gradients, blur effects, and responsive design reinforced the power of modern CSS without relying on frameworks. Learning CSS Grid, flexbox, and custom properties created a professional-looking interface while maintaining performance.

**API Design:** Creating RESTful endpoints (/movies/addMovie, /movies/markWatched, etc.) with proper HTTP methods demonstrated the importance of intuitive API design. Understanding how frontend JavaScript communicates with backend routes through fetch() calls was essential for seamless user experience.

**Project Transformation:** Converting an existing codebase rather than starting from scratch taught valuable lessons about refactoring, dependency management, and maintaining functionality while completely changing the application's purpose. This mirrors real-world scenarios where existing systems need to be adapted or modernized.

**Error Handling & Debugging:** Implementing comprehensive error handling on both frontend and backend, along with proper logging and user feedback, demonstrated how crucial proper error management is for production applications. Learning to debug authentication flows and database operations was particularly valuable.

In summary, this project provided hands-on experience with modern web development practices including secure authentication, database design, responsive UI development, and full-stack architecture. The transformation approach highlighted how solid architectural foundations enable rapid feature development and application evolution.