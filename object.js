// // var mobile={
// //     brand : "OppoF9",
// //     price : 45000,
// //     ram : "4gb",
// //     color : "black",
// //     videocall : function(){
// //         console.log("Make a call using ");
// //     }
// // }
// // console.log(mobile);
// // mobile.videocall();

// var AC ={
//     brand : "Haier",
//     price : "32000",
//     color : "white",
//     minTemp : 16,
//     maxTemp : 28,
//     defaultTemp : 24,
//     switchstate : false,
//     onoff : function(){
//         if (this.switchstate===false){
//             this.switchstate=true;
//         }
//         else {
//             this.switchstate=false;
//         }
//     },
//     highTemp : function(){
//         if(this.switchstate===true){
//         if (this.defaultTemp<this.maxTemp){
//             this.defaultTemp++;
//         }
//     }
//     },
//     lowTemp : function(){
//         if(this.switchstate===true){
//         if (this.defaultTemp>this.minTemp){
//             this.defaultTemp--;
//         }
//     }
//     }
// }
// AC.onoff();
// AC.onoff();
// console.log(AC.switchstate);
// console.log(AC.defaultTemp);
// AC.highTemp();
// AC.highTemp();
// AC.highTemp();
// console.log(AC.defaultTemp);
// AC.lowTemp();
// AC.lowTemp();
// AC.lowTemp();
// AC.lowTemp();
// AC.lowTemp();
// AC.lowTemp();
// console.log(AC.defaultTemp);

// var calc={
//      add:function(a,b){
//          console.log(a+b);
//      }
//  }
// var scien_calc=Object.create(calc);
// scien_calc.add(10,20);

var bike={
    ignition:false,
    onoff:function(){
        if (this.ignition===false){
            this.ignition=true;
            console.log("Ignition turned on");
        }
        else {
            this.ignition=false;
            console.log("Ignition turned off");
        }
    },
    gear:function(change){
        if (this.ignition===true){
        console.log("Gear Activated");
            switch(change){
            case "gear1": console.log("Speed range is 0 to 20"); return;
            case "gear2": console.log("Speed range is 20 to 60"); return;
            case "gear3": console.log("Speed range is 60 to 100"); return;
            }
        }

        }
    }
var new_bike=Object.create(bike);
new_bike.onoff();
new_bike.gear("gear2");
