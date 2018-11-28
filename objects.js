var mobile= 
{
    color: "Black",
    brand: "MI",
    price: "15000",
    model: "A10",
    videocall: function(){
                console.log("Do video call");
                            },
    alarm: function(){
                console.log("Set alarm");
                    }

}
console.log(mobile.price);
mobile.videocall();
mobile.alarm();

var bike=
{
    price: 80000,
    color: "black",
    speed: "160km/hr",
    start: function() 
    {
        console.log("start the engine");
    },
    accelerate: function() 
    {
        console.log("Raise the speed");
    }
}
console.log(bike.price);
console.log(bike.color);
console.log(bike.speed);
bike.start();
bike.accelerate();