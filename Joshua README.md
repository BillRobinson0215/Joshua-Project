This Tic-Tac-Toe application allows the user to create a new account and play Tic Tac Toe. 

I modeled my application after the 1980's movie War Games, where a teenage boy, while trying to hack into a gaming company, accidentally hacks into a government computer containing an artificial intelligence called the War Operations Planned Response, W.O.P.R. for short. The W.O.P.R. was programmed to simulate and learn from playing different strategy games and simulate wartime scenarios. After being given control to the nations defense systems the W.O.P.R. simulates a WWIII scenario and is about to launch the missiles when it is forced to play itself in Tic-Tac-Toe to learn that the only way to win Tic-Tac-Toe and subsequently war is simply not to play. 

Wire Frame: Joshua README.md
Screen Shot 2021-12-03 at 9.29.09 AM.png

User Stories:
users must be able to sign in/out
users must be able to play a game of tic tac toe
users must be able to create an account
users must be able to restart a game after completing a game
users must only be able to select unselected spaces
user must be able to win/tie
users must not be able to add to a finished game board state

### Application Requirements

1.  [√] User must be able to sign up
1.  [√] User must be able to sign in
1.  [√] Signed in user must be able to sign out
1.  [√] Signed in user user must be able to start a tic tac toe game
1.  [√] When playing game, user must start as X and then rotate between X and O
1.  [√] When playing game, user must only select available spaces on the board
1.  [√] When playing game, user must be notified of win or tie
1.  [√] Once a game is over, user must not be able to add to that board
1.  [√] Once a game is over, user must be able to play again

### API Requirements

1.  [√] Sign up [POST /sign-up]
1.  [√] Sign in [POST /sign-in]
1.  [√] Change password [PATCH /change-password]
1.  [√] Sign out [DELETE /sign-out]
1.  [√] New game [POST /games]
2.  [√] Update game [PATCH /games/:id]
6.  [√] Display a message to the user after sign in, sign up, and sign out success or failure.
7.  [√] Sign in and sign up forms must clear after submit success
