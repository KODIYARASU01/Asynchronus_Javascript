//Async & Await:

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let randomFruits = Math.floor(Math.random() * stocks.Fruits.length);
let randomHolder = Math.floor(Math.random() * stocks.holder.length);
let randomTopping = Math.floor(Math.random() * stocks.toppings.length);

let is_shop_open = true;

let time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject("Out of stack");
    }
  });
};

async function result() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[randomFruits]} was selected!`);

    await time(1000);
    console.log("Your order is placed");
    console.log("Production has started");

    await time(2000);
    console.log("The Fruit are chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("Machine was started");

    await time(2000);
    console.log(`${stocks.holder[randomHolder]} container was selected`);

    await time(3000);
    console.log(`${stocks.toppings[randomTopping]} topping was added`);

    await time(2000);
    console.log("Icecream was served");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Thanks for coming");
  }
}

result();
