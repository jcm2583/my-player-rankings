LIST OF COMPONENTS

[ x ] - Login Page
    [ x ] - Server Side
        [ x ] - Check that everything provided is working
        [ x ] - Use Postman to login

    [ ] - Client Side
        [ ] - Need title and description of app (specify dynasty rankings)
        [ x ] - Have Login and Register button
        [ x ] - Register button goes to seperate page to register
        [ ] - Once logged in, direct user to home page

[ ] - Register Page
    [ ] - Server Side
        [ ] - Check that everything provided is working
        [ ] - Use Postman to register account

    [ ] - Client Side
        [ ] - Need a back button to go back to login and a register account button
        [ ] - Once registered, user will be prompted back to the login page to login

[ ] - Home Page
    [ ] - Server Side
        [ ] - Will need get route to database

    [ ] - Client Side
        [ ] - Welcome (username) banner greeting user
        [ ] -  Need a nav bar underneath with links to Home, Consensus Rankings, My Rankings, My Watchlist
        [ ] - Will need a GET route to get Top-5 fantasy finishers (PPR) of 2020 and display on DOM
        [ ] - Will need saga and reducer to store it
            [ ] - Viewable by scrolling beginning with QB, RB, WR, TE

[ ] - Consensus Rankings
    [ ] - Server Side
        [ ] - Will need GET route for rankings to populate table
            [ ] - Will probably need a seperate GET route per position

    [ ] - Client Side
        [ ] - Title needs to be at top of page followed by nav bar
        [ ] - GET route to display on DOM
        [ ] - Saga and reducer
        [ ] - Use Material UI table
        [ ] - Table will need a menu containing ALL, QB, RB, WR, TE that sorts to that position when linked is clicked on

[ ] - My Rankings
    [ ] - Server Side
        [ ] - Will need GET routes for populated table (per position)
        [ ] - Same table as in CR, but this time add button that allows user to add player to My Rankings table
            [ ] - Will need a POST route for this part
        [ ] - Will need PUT and DELETE routes for the My Rankings table functionality
        [ ] - Will need a POST route to add a player from CMR table to My Watchlist table

    [ ] - Client Side
        [ ] - Title followed by nav bar
        [ ] - Will need GET routes by position for CR table
        [ ] - Will need an add button and POST route to POST to My Rankings table from CMR table
        [ ] - My Rankings Table
            [ ] - Need a form above the table to add player
                [ ] - This will need a POST route
            [ ] - Each player row will have an increase and decrease rank button, an add player to watchlist button, and a delete button
                [ ] - Will need PUT, POST, and DELETE routes for these
            [ ] - Table will need to sortable by position
                [ ] - GET routes by position
                [ ] - PUT routes for increase and decrease rank need to be functional by posistion in table
            [ ] - Need a button to save (POST) the entire list
                [ ] - Will need alert to tell user they are about to navigate away from page without saving

[ ] - My Watchlist
    [ ] - Server Side
        [ ] - Will need GET route to get player table, sort by watchlist
        [ ] - Will need a POST route to add player to watchlist through form 
        [ ] - Will need a DELETE route to remove player from watchlist
    [ ] - Client Side 
        [ ] - Title followed by nav bar
        [ ] - Will need a form so that the user can add player (POST route) 
        [ ] - Will need GET route to populate table with watchlist players
        [ ] - Table will need to be sortable by position, so GET routes for those
        [ ] - Will need a delete button per player row to remove player from watchlist (DELETE route)

        