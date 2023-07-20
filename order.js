const drinks = [
  {
    name: "lemonade",
    ingredients: [
      {
        name: "lemon",
        amount: 0.25,
      },
      {
        name: "sugar",
        amount: 0.25,
      },
      {
        name: "water",
        amount: 0.5,
      },
    ]
  },
  {
    name: "coffee",
    ingredients: [
      {
        name: "coffee",
        amount: 0.25,
      },
      {
        name: "sugar",
        amount: 0.25,
      },
      {
        name: "water",
        amount: 0.5,
      },
    ]
  },
  {
    name: "tea",
    ingredients: [
      {
        name: "tea",
        amount: 0.25,
      },
      {
        name: "sugar",
        amount: 0.25,
      },
      {
        name: "water",
        amount: 0.5,
      },
    ]
  },
  {
    name: "chocolate milk",
    ingredients: [
      {
        name: "chocolate",
        amount: 0.25,
      },
      {
        name: "milk",
        amount: 0.75,
      },
    ]
  },
];

const ingredients = [
  {
    name: "lemon",
    price: 2,
  },
  {
    name: "sugar",
    price: 1,
  },
  {
    name: "water",
    price: 1,
  },
  {
    name: "tea",
    price: 3,
  },
  {
    name: "coffee",
    price: 4,
  },
  {
    name: "chocolate",
    price: 5,
  },
  {
    name: "milk",
    price: 2,
  }
];

const extras = [
  {
    name: "ice",
    price: 1,
  },
  {
    name: "milk",
    price: 2,
  },
  {
    name: "cream",
    price: 1,
  },
];

function getOrder(level) {
  let order = drinks[Math.floor(Math.random() * level)];

  let num = Math.floor(Math.random() * level)
  let addons = [];

  for (let i = 0; i < num; i++) {
    let extra = extras[Math.floor(Math.random() * extras.length)];
    addons.push(extra);
  }

  let request = "I would like a " + order.name;

  // if(addons.length > 0) {
  //   request += " with";
  //   for(let i = 0; i < addons.length; i++) {
  //     request += (i != 0 && addons.length > 2 ? "," : "") + (i + 1 == addons.length && addons.length > 1 ? " and " : " ") + addons[i].name;
  //   }
  // }

  request += ", please.";

  return {
    request: request,
    ingredients: order.ingredients,
    // addons: addons,
  };
}