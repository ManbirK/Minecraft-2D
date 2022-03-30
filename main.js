// Create the reference variable of the canvas using fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images
block_width = 50;
block_height = 50;


// Define the starting x and y coordinates  and width & height for the player
player_x = 90;
player_y = 70;
player_width = 75;
player_height = 200;

// Define a variable named player_object to store object of the player image
var player_object = "";
var block_object = "";

// Add a function named player_update() to add the player image

function player_update(){
    
    fabric.Image.fromURL("player.png", function(IMG){
        player_object = IMG;
        player_object.scaleToWidth(player_width);
        player_object.scaleToHeight(player_height);
        player_object.set({
            top: player_y, 
            left: player_x
        });

        canvas.add(player_object);
    });
}
player_update();






// Add a function named new_image() to add the different images as per the specific keys pressed

