var dog;
var sadDog,happyDog;
var feedDog , addFoods ;
var database , foodStock , readStock; 
var food
function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  
  database = firebase.database();



  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton ("Feed The Dog")
  feed.position(700,90)
  feed.mousePressed(feedDog)

  addFood = createButton ("Add Food")
  addFood.position(800,90)
  addFood.mousePressed(addFoods)

  foodStock=database.ref('Food');
  foodStock.on("value",feedDog)
;
}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function addFoods (){
  food++
  database.ref('/').update({
    Food:food
  })
} 

//function to update food stock and last fed time
function feedDog (){
  dog.addImage(happyDog);

  if(food.getFoodStock()>= 0){
    food.obj.updateFoodStock(food.getFoodStock()*0);  
  }else{
    food.obj.updateFoodStock(foor.obj.getFoodStock()-1);
  }

}
function readStock(data){
  food=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
