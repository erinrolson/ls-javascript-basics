let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
for (let i = groceryList.length; i >= 1; i -= 1){
  console.log(groceryList.shift());
}
console.log(groceryList);