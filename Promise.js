//Promise :

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

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Shop was closed");
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[randomFruits]} was selected`);
})
  .then(() => {
    return order(1000, () => {
      console.log('Your order is placed')
      console.log("Production has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("The fruits are chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`Machine was started`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.holder[randomTopping]} container was added`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[randomTopping]} was added as toppings`);
    });
  })
  .then(() => {
    return order(2000, () => {
      3;
      console.log(`Icecream was served`);
    });
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("Day ended,shop is closed");
  });
