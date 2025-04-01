




http-server .


Assignment:
1. Add password and confirm password input in register
2. Validate that all the fields are present
3. if everyting is okay, navigate to login.html.


DRY Principle:
DRY = Don't Repeat Yourself.


Storing Information in the browser:
- cookie
- localStorage
- indexDb


Our Storage Plan:
Store users in an array: [] inside local storage with key 'users';


Login Check Steps:
Check if username and password exist.

Local storage keys:
- users: it is for storing all the users
- loginUser: for storing currently login user.


Assignment:
- Study everything to understand it, ask me if there is anything unclear
- Add new functionality. On the index page, show user details:
    - Fullname
    - email
    - dob

- In the dropdown, add logout button. when the button is clicked, remove loginUser and redirect to login page.



localStorage:
    getItem: it takes the key that is used to store the item and returns a string.
    setItem: it takes the key to use to store the item and the string to store.
    removeItem: used to delete a key

    When you try to get a key that does not exists, it return null.