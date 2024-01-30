/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.init = function( system, options ) {
	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	PS.gridSize( 8, 9 );
    for(let i = 0; i < 7; i++){
        PS.color(i, 0, PS.COLOR_BLACK);
    }
    PS.color(7,0,PS.COLOR_CYAN);

    PS.color(3,4,PS.COLOR_GREEN);
    PS.color(2,4,PS.COLOR_GREEN);
    PS.color(3,5,PS.COLOR_GREEN);
    PS.color(3,3,PS.COLOR_GREEN);
    PS.color(4,4,PS.COLOR_GREEN);

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "Lights Off" );

	// Add any other initialization code you need here.
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

//8x8
PS.touch = function( x, y, data, options ) {
	// Add code here for mouse clicks/touches
	// over a bead.
    //PS.debug( "clicked @ " + x + ", " + y + "\n" );
    //FOR RANDOM SEED, PS.date().time
    //PS.color(x,y,color) OR PS.color(x,y,r,g,b)
    if(y == 0 && x == 7){
        PS.randboard();
    }
    else if(y != 0){
        PS.beadcolor(x,y);
    }


};

//randomize the board
PS.randboard = function(){
    PS.clearboard();
    //uses the unix epoch to seed the randomness that chooses which
    //puzzles is created
    PS.seed(PS.date().time);

    let board = PS.random(5);
    //board = 5;
    if(board == 1){
        PS.board1();
    }
    else if(board == 2){
        PS.board2();
    }
    else if(board == 3){
        PS.board3();
    }
    else if(board == 4){
        PS.board4();
    }
    else if(board == 5){
        PS.board5();
    }


}

//creates puzzle one
PS.board1 = function(){
    PS.color(6,1,PS.COLOR_GREEN);
    PS.color(2,2,PS.COLOR_GREEN);
    PS.color(3,3,PS.COLOR_GREEN);
    PS.color(1,4,PS.COLOR_GREEN);
    PS.color(2,4,PS.COLOR_GREEN);
    PS.color(0,5,PS.COLOR_GREEN);
    PS.color(4,6,PS.COLOR_GREEN);
}

//creates puzzle two
PS.board2 = function(){
    PS.color(0,1,PS.COLOR_GREEN);
    PS.color(4,2,PS.COLOR_GREEN);
    PS.color(5,3,PS.COLOR_GREEN);
    PS.color(2,5,PS.COLOR_GREEN);
    PS.color(7,7,PS.COLOR_GREEN);
}

//creates puzzle three
PS.board3 = function(){
    PS.color(0,2,PS.COLOR_GREEN);
    PS.color(5,2,PS.COLOR_GREEN);
    PS.color(4,3,PS.COLOR_GREEN);
    PS.color(6,4,PS.COLOR_GREEN);
    PS.color(1,5,PS.COLOR_GREEN);
    PS.color(4,5,PS.COLOR_GREEN);
    PS.color(7,6,PS.COLOR_GREEN);
    PS.color(3,7,PS.COLOR_GREEN);
    PS.color(2,8,PS.COLOR_GREEN);
}

//creates puzzle four
PS.board4 = function(){
    PS.color(2,2,PS.COLOR_GREEN);
    PS.color(5,2,PS.COLOR_GREEN);
    PS.color(1,4,PS.COLOR_GREEN);
    PS.color(6,4,PS.COLOR_GREEN);
    PS.color(1,5,PS.COLOR_GREEN);
    PS.color(6,5,PS.COLOR_GREEN);
    PS.color(2,6,PS.COLOR_GREEN);
    PS.color(3,6,PS.COLOR_GREEN);
    PS.color(4,6,PS.COLOR_GREEN);
    PS.color(5,6,PS.COLOR_GREEN);
}

//creates puzzle five
PS.board5 = function(){
    //extra boundaries
    PS.color(0,4,PS.COLOR_BLACK);
    PS.color(1,4,PS.COLOR_BLACK);
    PS.color(2,4,PS.COLOR_BLACK);
    PS.color(3,4,PS.COLOR_BLACK);
    PS.color(4,4,PS.COLOR_BLACK);
    PS.color(7,6,PS.COLOR_BLACK);
    PS.color(6,6,PS.COLOR_BLACK);

    //green beads
    PS.color(5,2,PS.COLOR_GREEN);
    PS.color(4,3,PS.COLOR_GREEN);
    PS.color(5,3,PS.COLOR_GREEN);
    PS.color(6,4,PS.COLOR_GREEN);
    PS.color(7,4,PS.COLOR_GREEN);
    PS.color(0,5,PS.COLOR_GREEN);
    PS.color(4,5,PS.COLOR_GREEN);
    PS.color(5,5,PS.COLOR_GREEN);
    PS.color(6,5,PS.COLOR_GREEN);
    PS.color(1,6,PS.COLOR_GREEN);
    PS.color(4,6,PS.COLOR_GREEN);
    PS.color(3,7,PS.COLOR_GREEN);
    PS.color(4,7,PS.COLOR_GREEN);
    PS.color(5,7,PS.COLOR_GREEN);
    PS.color(6,7,PS.COLOR_GREEN);
    PS.color(5,8,PS.COLOR_GREEN);
    PS.color(6,8,PS.COLOR_GREEN);
    PS.color(7,8,PS.COLOR_GREEN);
}

//clears the board
PS.clearboard = function(){
    for(let x = 0; x < 8; x++){
        for(let y = 1; y < 9; y++){
            PS.color(x,y,PS.COLOR_WHITE);
        }
    }
}

//coloring beads
PS.beadcolor = function(x,y){
    //ignore black colored beads
    if(PS.color(x,y) == PS.COLOR_BLACK){
        return;
    }

    //color the bead that was clicked on
    PS.flip(x,y)

    //now color in surrounding beads
    //left bead
    if((x-1) >= 0){
        //flip bead to the left
        PS.flip(x-1,y);
    }
    if((x+1) <= 7){
        PS.flip(x+1,y);
    }
    if((y-1) >= 1){
        PS.flip(x,y-1);
    }
    if((y+1) <= 8){
        PS.flip(x,y+1);
    }
}

//flip beads color
PS.flip = function(x, y){
    //PS.debug("flipping: color " + PS.color(x,y));
    /*if(PS.color(x,y) == PS.COLOR_BLACK){
        return;
    }*/

    if(PS.color(x,y) == PS.COLOR_GREEN){
        PS.color(x,y,PS.COLOR_WHITE);
    }
    else if(PS.color(x,y) == PS.COLOR_WHITE){
        PS.color(x,y,PS.COLOR_GREEN);
    }
}

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

