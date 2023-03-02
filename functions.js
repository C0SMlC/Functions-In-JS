const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

const updater = function(str,restaurant)
{
    str="Mansions Place";
    restaurant.name='PRatiks';
    return;
}

let nameofr = "Italian Classico";
updater(nameofr,restaurant);
console.log(nameofr); //value wont change as in the functuion copy is updated
console.log(restaurant);
// the value will change for reference types