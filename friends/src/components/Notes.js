// log in page
// take inputs for username and pw
// submit button
// login should save the returned token to localStorage
// isLoading state in your login component
// spinner on the form or in button to spin while request is happening
// when req returns, save token to local storage
// use hx object in your login component to navigate the user to friendslist route
// Private route component to protect other routes
// PR component checks localStorage for token, redirect user to login if no token
// PR for friends list if user not logged in, redirect them to login page
// protected route for the friends list component?
// in FriendsList compinent, rendered with PR, create a list of friends from the API