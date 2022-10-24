# Blog: Fullstack - Combining Frontend with Server API

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
