
  // #1  return posistive numbers 

const array=[1,-4,5,0,33,-46,10,-25,20,50,-13,0,null,3,-7];
const newArray=array.filter(checkValue);

function checkValue(number){
    return number>0;
};

console.log(newArray);


// sum up positive numbers 
 

  const sumNewArray = newArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  console.log(sumNewArray);


// #2

const names=["anna","mariami", "mate", "giorgi", "mate","anna", "mariami", "luka", "toma","anna"];
let namescount = {}
for (item of names) {
    namescount[item] = (namescount[item] || 0) + 1
  
}
console.log(namescount) 

#3

class Car {
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
        this.speed=0;
        this.motion="the car is not moving";
    }
check_motion() {
    if(this.speed>0){
        return this.motion= "car is moving"
    }else{
        return this.motion="car is stopped"
    }
   }

accelerate(speed){
    this.speed=this.speed+speed;
    return this.speed;
}
brake(speed){
    this.speed=this.speed-speed;
    return this.speed;
}
emergency_brake(){
this.speed=0;
}
status(){
    return `${this.brand} ${this.model} is moving with ${this.speed} km/h speed and status is ${this.motion} `
}
}
const mycar=new Car ("ford","mustang");
mycar.speed=10;
console.log(mycar.brake(5));
console.log(mycar);
console.log(mycar.check_motion()); 
console.log(mycar);
console.log(mycar.accelerate(7));
console.log(mycar);
console.log(mycar.speed);
mycar.emergency_brake();
console.log(mycar);

console.log(mycar.check_motion());

console.log(mycar.status());


// #4

// const value1=10;
// const value2=20;

// const value1=25;
// const value2=20;

const value1=10;
const value2=10;

const addAsync=new Promise((resolve,reject)=>{
    if(value1>value2){
        resolve(`${value1} is greater than  ${value2}`)
    }
    if(value1<value2){
        resolve(`${value2} is greater than  ${value1}`)
    }
    else{
        reject("server error")
    }
})

.then((resolve)=>console.log(resolve))
.catch((error)=>console.log(error))





