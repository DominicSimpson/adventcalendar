console.log("Hello World!");


let myCal = document.getElementById("adventCal");
let currentDate = new Date(2022, 11, 0,24); // gets dates for the month of December in the year 2022 AD
console.log(currentDate);

// let days = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let doors = []; // contains the 24 door objects;



function Door(calendar, day) {  // the object constructor prototype. Prototypes start with a capital letter.
                                // the 'this' keyword references every specific function as part of the overall
                                // Game prototype object. It's essentially a placeholder

    this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;

    this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;

    this.adventMessage = 'Day ' + day + ' of Advent\n\n' + '"' + messages[day - 1][0] + '"\n\n\t' + 'by ' + messages[day - 1][1] + '\n\n';

    this.x = ( 0.04 * calendar.width + ((day - 1) % 4) * (1.1 * this.width) );
    this.y = - ( 0.96 * calendar.height - Math.floor((day -1) / 4) * (1.1 * this.height) );

    this.content = function() {

        let node = document.createElement("li");
        document.getElementById("adventDoors").appendChild(node);
        node.id = "door" + day;
		node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";
        
        let innerNode = document.createElement("a");
        document.getElementById("door" + day).appendChild(innerNode);
        innerNode.innerHTML = day;
        innerNode.href = "#";

        // const doors = []; 
        // if (doors.onclick, clickDoor);
        
        // function clickDoor() {        
        //     for (let i = 0; i < currentDate.length; i++) {

        
        if((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) { // ensures that a panel of a future date can't be opened
            innerNode.className = "disabled";
            innerNode.onclick = function() {
                return false;
            }
        } else {
            let adventMessage = this.adventMessage;
            innerNode.onclick = function() {
                alert(adventMessage);
                return true;
            }
        }
    }
    // }
}
// };

    (function() {
        
        // let doors = []; // contains the 24 door objects;

        for (let i = 0; i < 24; i++) {


            doors[i] = new Door(myCal, i + 1);
            doors[i].content();

        }

        return doors;

    })()