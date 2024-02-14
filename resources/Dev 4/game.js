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

let currentx = 0;
let currenty = 0;
let level = 1;
let maxX = 5;
let maxY = 5;
let teleport = PS.makeRGB(219, 166, 255);

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

	PS.gridSize( maxX, maxY );
    //level = 4;
    PS.level1();

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "Pathway" );

	// Add any other initialization code you need here.
};

PS.check_win = function(level_num){
    switch(level_num){
        case(1):
            if (currentx == 2 && currenty == 0) {
                for (let y = 1; y < 5; y++) {
                    if (PS.color(2, y) != PS.COLOR_RED) {
                        PS.restart(level);
                        return;
                    }
                }
                level++;
                PS.level2();
            }
            else{
                return;
            }
            break;
        case(2):
            if(currentx == 2 && currenty == 0){
                for(let y = 1; y < 5; y++){
                    if(PS.color(2,y) != PS.COLOR_RED){
                        PS.restart(level);

                    }
                }
                if(PS.color(1,1) != PS.COLOR_RED){
                    PS.restart(level);
                    return;
                }
                if(PS.color(1,2) != PS.COLOR_RED){
                    PS.restart(level);
                    return;
                }
                level++;
                PS.level3();
            }
            else{
                return;
            }
            break;
        //THIS IS THE WIN CONDITION FOR LEVEL 3 I DONT HATE MYSELF FOR CODING IT THIS WAY
        case(3):
            if(currentx == 4 && currenty == 0){
                for(let y = 0; y < 5; y++){
                    if(PS.color(1,y) != PS.COLOR_RED){
                        PS.restart(level);
                        return;
                    }
                    if(y != 1) {
                        if (PS.color(2, y) != PS.COLOR_RED) {
                            PS.restart(level);
                            return;
                        }
                    }
                    if(PS.color(3,y) != PS.COLOR_RED){
                        PS.restart(level);
                        return;
                    }
                    if(y != 0) {
                        if (PS.color(4, y) != PS.COLOR_RED) {
                            PS.restart(level);
                            return;
                        }
                    }
                }
                /* NEXT LEVEL CODE FOR WHENEVER I ADD ON TO THIS
                PS.level1();*/
                level++;
                PS.level4();
                //PS.win();
            }
            else{
                return;
            }
            break;
        case(4):
            if(currentx == 5 && currenty == 1) {
                for (let x = 0; x < 7; x++) {
                    for (let y = 0; y < 7; y++) {
                        if (PS.color(x, y) == PS.COLOR_WHITE) {
                            PS.restart(level);
                            return;
                        }
                    }
                }
                level++;
                PS.level5();
                //PS.win();
            }
            else{
                return;
            }
            break;
        case(5):
            if(currentx == 7 && currenty == 7){
                for(let x = 0; x < 9; x++){
                    for(let y = 0; y < 9; y++){
                        if(PS.color(x,y) == PS.COLOR_WHITE){
                            PS.restart(level);
                            return;
                        }
                    }
                }
                level++;
                PS.win();
            }
            break;
    }
}

PS.win = function(){
    PS.statusText("Congratulations!");
    PS.clear();
    PS.color(2,2,PS.COLOR_BLUE);
    currentx = 2;
    currenty = 2;
}

PS.clear = function(){
    for(let x = 0; x < maxX; x++){
        for(let y = 0; y < maxY; y++){
            PS.color(x,y,PS.COLOR_WHITE);
        }
    }
}

PS.level1 = function(){
    PS.clear();
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            PS.color(i,j,PS.COLOR_BLACK);
        }
    }
    for(let i = 1; i < 4; i++){
        PS.color(2,i,PS.COLOR_WHITE);
    }

    PS.color(2,0,PS.COLOR_GREEN);
    PS.color(2,4,PS.COLOR_BLUE);

    currentx = 2;
    currenty = 4;

}

PS.level2 = function(){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            PS.color(i,j,PS.COLOR_BLACK);
        }
    }
    for(let i = 1; i < 4; i++){
        PS.color(2,i,PS.COLOR_WHITE);
    }

    PS.color(1,1,PS.COLOR_WHITE);
    PS.color(1,2,PS.COLOR_WHITE);
    PS.color(2,0,PS.COLOR_GREEN);
    PS.color(2,4,PS.COLOR_BLUE);

    currentx = 2;
    currenty = 4;
}

PS.level3 = function(){
    PS.clear();
    for(let x = 0; x < 5; x++){
        PS.color(0,x,PS.COLOR_BLACK);
    }
    PS.color(2,1,PS.COLOR_BLACK);

    PS.color(4,4,PS.COLOR_BLUE);
    PS.color(4,0,PS.COLOR_GREEN);
    currentx = 4;
    currenty = 4;
}

PS.level4 = function(){
    PS.statusText("Pathway: Teleportation");
    PS.clear();
    PS.gridSize(7,7);
    maxX = 7;
    maxY = 7;

    currentx = 1;
    currenty = 5;
    PS.color(1,5,PS.COLOR_BLUE);
    PS.color(5,1,PS.COLOR_GREEN);
    for(let x = 0; x < 7; x++){
        if(x == 0 || x == 6){
            for(let y = 0; y < 7; y++){
                PS.color(y,x,PS.COLOR_BLACK);
            }
        }
        if(x == 2 || x == 3 || x == 4){
            PS.color(0,x,PS.COLOR_BLACK);
            PS.color(6,x,PS.COLOR_BLACK);
            for(let y = 2; y < 5; y++){
                PS.color(y,x,PS.COLOR_BLACK);
            }
        }
        else{
            PS.color(0,x,PS.COLOR_BLACK);
            PS.color(6,x,PS.COLOR_BLACK);
        }
    }
    PS.color(4,1,PS.COLOR_BLACK);
    PS.color(2,5,PS.COLOR_BLACK);
    PS.color(3,1,teleport);
    PS.color(3,5,teleport);

}

PS.level5 = function(){
    PS.statusText("Pathway: Multi-use");
    PS.gridSize(9,9);
    maxX = 9;
    maxY = 9;
    PS.clear();
    currentx = 1;
    currenty = 1;
    PS.color(1,1,PS.COLOR_BLUE);
    for(let x = 0; x < 9; x++){
        if(x == 0 || x == 8){
            for(let y = 0; y < 9; y++){
                PS.color(y,x,PS.COLOR_BLACK);
            }
        }
        else{
            PS.color(0,x,PS.COLOR_BLACK);
            PS.color(8,x,PS.COLOR_BLACK);
        }
    }
    PS.color(4,1,PS.COLOR_BLACK);
    PS.color(4,2,PS.COLOR_BLACK);
    PS.color(1,4,PS.COLOR_BLACK);
    PS.color(2,4,PS.COLOR_BLACK);
    PS.color(6,4,PS.COLOR_BLACK);
    PS.color(6,7,PS.COLOR_BLACK);
    PS.color(4,6,PS.COLOR_BLACK);
    PS.color(4,5,PS.COLOR_BLACK);

    PS.color(1,7,teleport);
    PS.color(7,1,teleport);
    PS.color(7,7,PS.COLOR_GREEN);
}

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


};

PS.restart = function(levelnum){
    switch(levelnum){
        case(1):
            PS.level1();
            break;
        case(2):
            PS.level2();
            break;
        case(3):
            PS.level3();
            break;
        case(4):
            PS.level4();
            break;
        case(5):
            PS.level5();
            break;
        case(6):
            PS.statusText("~Congratulations!~");
            PS.win();
            break;
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

PS.teleport = function(level){
    //PS.debug("in teleport");
    switch(level){
        case(4):
            //PS.debug("in level 4");
            if(currentx == 3 && currenty == 1){
                currenty = 5;
            }
            else{
                currenty = 1;
            }
            break;
        case(5):
            //PS.debug("in level 5");
            if(currentx == 1 && currenty == 7){
                //PS.debug("in level 5 br");
                currentx = 7;
                currenty = 1;
            }
            else{
                //PS.debug("in level 5");
                currentx = 1;
                currenty = 7;
            }
            break;
    }
}

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
    let oldx = currentx;
    let oldy = currenty;

    if(key == PS.KEY_ARROW_UP){
        if(currenty == 0){
            return;
        }
        currenty--;
    }
    if(key == PS.KEY_ARROW_DOWN){
        if(currenty == maxY-1){
            return;
        }
        currenty++;
    }
    if(key == PS.KEY_ARROW_RIGHT){
        if(currentx == maxX-1){
            return;
        }
        currentx++;
    }
    if(key == PS.KEY_ARROW_LEFT){
        if(currentx == 0){
            return;
        }
        currentx--;
    }

    if(PS.color(currentx,currenty) == PS.COLOR_BLACK){
        currentx = oldx;
        currenty = oldy;
        PS.color(currentx,currenty, PS.COLOR_BLUE);
        return;
    }
    PS.color(oldx, oldy, PS.COLOR_RED);

    //teleport
    if(PS.color(currentx, currenty) == teleport) {
        //PS.debug("step on tp");
        PS.teleport(level);
        PS.color(currentx,currenty,teleport);
    }

    if(PS.color(currentx,currenty) == PS.COLOR_RED) {
        PS.restart(level);
        return;
    }
    //PS.debug(currentx + "" + currenty);
    PS.draw_teleport(level);
    PS.color(currentx, currenty, PS.COLOR_BLUE);
    PS.check_win(level);

};

PS.draw_teleport = function(level){
    switch(level) {
        case(4):
            PS.color(3,1,teleport);
            PS.color(3,5,teleport);
            break;
        case(5):
            PS.color(1,7,teleport);
            PS.color(7,1,teleport);
            break;
    }
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

