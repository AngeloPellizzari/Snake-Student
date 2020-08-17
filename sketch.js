// Welcome to the final day of Intro to JavaScript!!!
// Today we are going to put together everything we have learned thus far and build a game! The game we are making today is the classic arcade game snake. In this game, we have a square(the head of the snake) that travels around a field and tries to eat pellets to grow bigger. However, if the snake hits the walls of the field it will bump its head and get a game over and will also have a game over if it eats itself.
// Below we will make the game. Much of the code is provided for you so that you only need to worry about important stuff and we will walk through the code with you as we go!

// Variables and constants
// You do not need to change any of this as we will be using it later ^_^
let gameOver = true;
let score;
let canvas_width = 600;
let canvas_height = 600;
let dots_x;
let dots_y;
let dots;
let snakes_x;
let snakes_y;
let size;
let speed_x;
let speed_y;
let lastKey;
let vx;
let vy;
let time;


// STEP 1: Here we have the setup function. In this function, you should create the canvas using the canvas width and height variables we defined above. Then make a call to the function init()
function setup() {

}

// STEP 2: Here is the init function. In this function, all of the required constants and variables we need are given starting values that are used for the rest of the project.
// 2.I: First up, lets initialize the arrays for the positions of the dots. We want them to appear randomly throughout the field so we have given you the code for that (the two while loops below). However, we still need to initialize the lists for the x and y positions of the dots. Make two empty arrays using the dots_x and dots_y variables. Finally, make another array with two values 0 and 0 that will be updated with the randomized values from dots_x and dots_y as we pick up dots.
// 2.II: Next up we need to initialize the positions for the snake. We only have the head to start so let's initialize two arrays (snakes_x and snakes_y) with the value 100 in each. This will start the snake at (100, 100). Then set up the variable size to be equal to 5.
// 2.III: Next, set the speeds for the snake. We want it to start going to the right and we want it to move by the size of one part of the snake at a time. We also need this to be an array so that each part moves independently and it flows like an actual snake. Thus we make two arrays speed_x and speed_y where speed_x has the value size and speed_y has the value 0. Finally, use the variables vx and vy and set their values to size and 0 respectively.
// 2.IV: Set the score to 0

function init() {
  // 2.I
  while (dots_x.length < 50) {
    var e = Math.floor(Math.random() * 380 + 10);
    if (dots_x.indexOf(e) === -1) dots_x.push(e);
  }
  while (dots_y.length < 50) {
    var f = Math.floor(Math.random() * 380 + 10);
    if (dots_y.indexOf(f) === -1) dots_y.push(f);
  }
  // 2.II
  
  // 2.III
  
  //2.IV
}


// STEP 3: This is the draw function. This function continually runs and loops over itself while the program is running. That means it will constantly update itself (like if we were to say move a snake around). There are a few things we need in this function:
// 3.0: At the beginning of the draw function there is a call to background(). This changes the colour of the background of the game. If you want to change it you can change it to an RGB value inside the parentheses but this is not necessary
// 3.I: Next up we are going to add to the if statement we have outlined for you. We initialized the variable gameOver above to check if the game is over or not. It starts off being over so that you can start the game when you are ready. For this if statement, we want to check if the game is over (i.e. if gameOver is true).
// 3.II: Next we want to add what happens when the game is over. First, we have added some text for you that will print out on the canvas. If you want to change the text or its placement you can do so! Next we want to check if the r key is pressed so we can restart the game. Add in the appropriate if statements to check if a key is pressed and then if the key is the r key.
// 3.III: When the r key is pressed, we want to make sure everything is returned to the starting point of the game. As a result, we want to use the init() function again so add a call to that here
// 3.IV: The last part of the keypress statement is making sure the game can run again. To do that we need to make gameOver false. **Note: Make sure you do this after init() or you will get the game to run but it will still have the last game's settings and likely just go to game over immediately.
// 3.V: Now that the if statement is working, we want to add an else case to take care of everything that should happen when the game is running. First up, let's change the values on a few variables. First up, make the variable time equal to 0. This will be used to put a delay between actions to make the snake a little slower. Then, let's update the position of the dot. This will be done by setting the 0th item in the dots list to be equal to the x value from dots_x at position score. The 1st item in dots will be equal to the y value from dots_y at the score value. I.e. we would say dots[0] = dots_x[score] and similar for dots[1]. This makes it such that the dots will take the random locations that we set up in init() each time the score is increased.
// 3.VI: We have again put in some text to show the score while in game. After this line, let's make the dot we will have the snake eat. First, add a call to fill with the colour of your choice. (We used the built-in call to 'red' in the solutions). Then create a rectangle at the x and y position defined in dots (0th and 1st indices) with width and height equal to size.
// 3.VII: Next we have given you a for loop that iterates over all of the defined snakes. In this loop, we need to build the snakes and move them. Thus, the first thing you need to do is add a fill that is different from the one you used for the dots (we used 'green' this time). Then create a rectangle with x position equal to snakes_x[s] and y position at snakes_y[s]. Then give it the width and height equal to size. This makes the body parts of the snake.
// 3.VIII: We have a call to fill(0) here to reset the fill to black. After this call, add calls that update the position of the snake by the speed for that snake. This is done by snakes_x[s] += speed_x[s] and similar for y.
// 3.IX: Outside the for loop, we want to update the speeds of the snake. This is done by unshifting the speed arrays with the values vx and vy (i.e. for x speeds it would look like speed_x.unshift(vx)) By doing an array of speeds and unshifting in each iteration, this gives the snake a more clean movement.
// 3.X: Now for some more key presses. Here we built it all for you since there is some specific math in it but we will explain how it works. Like before we check if a key is pressed. But the different part is that we check if one of four keys is pressed; w, a, s, or d. Thus we assign w to up, a to left, s to down, and d to right. Then when each one is pressed, we reassign the current values for vx and vy. For example, if w is pressed we want the snake to start moving up. This means that we want the x speed to become 0 so vx = 0. We also want it moving up (which is the negative y direction in JavaScript since (0,0) is in the top left) so we set it equal to -1 multiplied by size so that it moves up by the width of a piece of the snake each step.


// STEP 4: The final section of the code is completed for you as it has more complicated collision checks in it. As a result we decided it would be best to give you the code and explain why it works.
// 4.I: This part of the code checks if the snake head has hit the edge of the play area causing a game over. The reason for doing canvas_height/width - size is to account for the position of the head of the snake is in the top right corner of the rectangle.
// 4.II: This part of the code checks if the head hits another part of the snake. This is done by checking each part of the snake other than the head (that is what the if(t!=0) line does) and checks if it occupies the same position as the head. If so the game ends
// 4.III: This part of the code checks for when the snake eats a dot. First it checks if the position of the dot and the position of the head of the snake are within a close enough window (you can change this to make it easier or harder) Then if it is, the score is increased by 1 and a new snake part is added behind the last snake part in the array of snake parts. This is done by adding another position value to each of x and y.
// 4.IV: This while loop acts as a delay to slow down the steps between each movement of the snake

function draw() {
  // 3.0
  background(220);
  // 3.I
  if () {
    text("Game Over", 462, 475);
    text("Press r to restart", 450, 500);
    // 3.II
    // 3.III
    // 3.IV

  } else {
    // 3.V
    text("Score: " + score, 0, 10);
    // 3.VI
    for (var s in snakes_x) {
      // 3.VII
      fill(0);
      // 3.VIII
    }
    // 3.IX
    
    // 3.X
    if (keyIsPressed) {
      if (key == 'w') {
        vx = 0;
        vy = -1 * size;
      } else if (key == 'a') {
        vx = -1 * size;
        vy = 0;
      } else if (key == 's') {
        vx = 0;
        vy = size;
      } else if (key == 'd') {
        vx = size;
        vy = 0
      }
    }
    // 4.I
    if (snakes_x[0] == 0 || snakes_x[0] == canvas_width - size || snakes_y[0] == 0 || snakes_y[0] == canvas_height - size) {
      gameOver = true;
    }
    // 4.II
    for (var t in snakes_x) {
      if (t != 0) {
        if (snakes_x[t] == snakes_x[0] && snakes_y[t] == snakes_y[0]) {
          gameOver = true;
        }
      }
    }
    // 4.III
    if (abs(snakes_x[0] - dots[0]) <= 10 && abs(snakes_y[0] - dots[1]) <= 10) {
      score += 1;
      dots = [-1, -1]
      snakes_x.push(snakes_x[snakes_x.length - 1] - speed_x[snakes_x.length - 1])
      snakes_y.push(snakes_y[snakes_y.length - 1] - speed_y[snakes_y.length - 1])
    }
    // 4.IV
    while(time < 10000000){
      time += 1;
    }
  }
}