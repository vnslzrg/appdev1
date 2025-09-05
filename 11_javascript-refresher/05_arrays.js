//ARRAYS
const favoriteFoods = ["Pizza", "Takoyaki", "Fries"];
//ADD NEW FOOD AT THE END
favoriteFoods.push("Burgers");
//REMOVE FIRST FOOD
favoriteFoods.shift();  

//LOOP THROUGH ARRAY
for (const food of favoriteFoods) {
    console.log(food);
}   

//MAP TO NEW ARRAY
const likedFoods = favoriteFoods.map(food => `I like ${food}`);
console.log(likedFoods);   


