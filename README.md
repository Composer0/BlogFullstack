# Blog: Fullstack - Combining Frontend with Server API

## To Start the App Upon Download
- First check the json in API and Client directories to determine what needs to be installed through npm or yarn.
- For the API you will need to install the following npms: dompurify, dotenv, express, jsdom, marked, mongoose, multer, nodemon, path, and bcrypt.
- For the CLIENT, after you create the react app through npx create-react-app, you will need to install the following npms: react-dom, react-icons, react-router-dom, react-scroll and styled-components.
- In a split terminal have one cd to api and the other cd to client.
- Once in the api and client folders run on the command "npm start" to initialize the blog.

## Day 1
- Created connection between frontend and api server to display all posts on the homepage.
- Used this time to also create additional posts through postman to be displayed on the page across two users and four categories.
- Future proofed the categories section by creating map if I decide to ever add more categories. (Wife suggested I do this).

## Day 2 & 3
- Applied Link from React-Router-Dom throughout the 'client' to create dynamic links between clicked items to specific posts, categories, and usernames.
- Applied Axios to set up a route that will display specific posts in their entirety when clicked upon.
- Used Axios to get posts of the same category and display them by creating a query for the attribute of categories.
- Used Axios to get posts create by the same user and display them by creating a query for the attribute of username.

### Lessons Learned
- You will wait for a long time for information if you forget to include 'await' in your try/catch statement.
- json tokens will not allow you to render multiple paragraphs or bullet points. I will need to find a work around for this, otherwise users will only be able to create a massive paragraph of text for each particular subject they wish to blog about.
- I now have a better understanding of how to create pathing for Links within a React application, especially when the directories are being built through props from json objects.

## Day 4 & 5
- Working on finding solution to error in Register page that cause connection to hang if a duplicate username or email is used when creating a new user. Still working on finding the solution for this.
- Incorporating Context API to make the share and use of User id accross the application more seamless so that I won't have to worry about creating and passing props for each of the pages when a user is logged in.

## Day 6
- Created Admin model and route.

## Day 7
- Created code that allows Admin to use the Login Page.
- Fixed login bug that caused the server to crash upon login.
- Implemented Local Storage to hold signed in user information.
- Implemented logout funtionality.
- Established states and pathing needed from axios to create json tokens, upload images, and display images for posts.
- Utilized Multer to allow users to  upload profile pictures.
- Installed 'path' through npm to create a route to the images folder where images will be stored and used for posts on the homepage and single page.

### Lesson Learned
- Be more mindful of serverside code as that is where my errors were originating from throughout today. Problems can be avoided as long as you remember to spell check and determine what needs a function parenthesis and which functions within the client need the event to be stored as an argument for a function.

## Day 8
- Create Post & Delete Post funtionality incorporated for users. At this time it is only for the user that created the post.
- Fixed Admin login. Learned that the code I had created previously locked 'users' from being able to login on the main login page and would only accept the route for 'admin'. Created a second login page that would follow the route specifically to admin. Doing this allows both types of users to login. In the future I will find a way for both types of user to login from the same page.

## Day 9, 10, and 11
- Create upload file functionality for settings page.
- Create update information functionality on settings page.
- added role into user model.
- corrected pathing issue on settings for displaying current profile picture.
- Customized the About cards further to allow full text to show on card. Abandon original idea to ensure message comes across.
- Added delete functionality to settings page where user will be deleted from database, logged out, and then sent back to the home page..
- Removed all but 2 test users form database.

## Day 12
- Screen Width 768px breakpoint established on About, Settings, Header, Posts, and Single post pages.

## Day 13
- Experiented with Markdown workaround to allow the blog content to display different headers, bullets, and etcetera. The code currently inserted at the moment has made the blog content dissappear. At this time the code is still in place and will be revised further. To allow the original code to run as originally intended simply comment out or remove the following lines in api/models/Post.js: 2-5, 31-34, and 39-43. Additiionally you will need to uncomment line 104 in client/src/components/singlePost/SinglePost.jsx and then comment out line 105.

## Day 14
- Incorporated previously created sliding navbar component for mobile version of the site.
- Adjusted the About, Login, and Register pages for mobile use.
- Modified the Navbar for mobile use with the inclusion of the Icon portrait to take user to settings instead of menu and as well as the Login and Register Links for new users.

This version is ready for deployment.
