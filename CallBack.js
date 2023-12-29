//CallBack Function :

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let randomFruits = Math.floor(Math.random() * stocks.Fruits.length);
let randomHolder = Math.floor(Math.random() * stocks.holder.length);
let randomTopping = Math.floor(Math.random() * stocks.toppings.length);

function order(Fruit_name, Call_production) {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    Call_production();
  }, 2000);
}

function production() {
  setTimeout(() => {
    console.log('Your order is placed')
    console.log("Production has started");
    setTimeout(() => {
      console.log("The fruits are chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("Machine was started");
          setTimeout(() => {
            console.log(`${stocks.holder[randomTopping]} container was added`);
            setTimeout(() => {
              console.log(
                `${stocks.toppings[randomTopping]} was added as toppings`
              );
              setTimeout(() => {
                console.log("Icecream was served");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1000);
}

order(randomFruits, production);
