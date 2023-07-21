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
    ],
    attributes:[
      " sour",
      " and sweet"
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
    ],
    attributes:[
      " bitter",
      " and caffinated"
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
    ],
    attributes:[
      " caffinated",
      ", but not bitter"
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
    ],
    attributes:[
      " not sour",
      ",but sweet"
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
var response = [
  {
    start:"Can I have ",
    end: ", please."},
  {
    start:"gimme ",
    end:"now."
  },
  {
    start: "I would like ",
    end:"."
  }
]
function getOrder(level, easy) {
  let politeLevel = Phaser.Math.Between(0,2)
  let orderIndex = Math.floor(Math.random() * level)
  let order = drinks[orderIndex];
  let request = response[politeLevel].start;
  let num = Math.floor(Math.random() * level)
  let addons = [];

  for (let i = 0; i < num; i++) {
    let extra = extras[Math.floor(Math.random() * extras.length)];
    addons.push(extra);
  }
  
  if(easy){
  request += "a " + order.name;
  }else{
    request = "something"
    for(let i = 0; i < order.attributes.length; i++){
      request += order.attributes[i];
    }
  }
  // if(addons.length > 0) {
  //   request += " with";
  //   for(let i = 0; i < addons.length; i++) {
  //     request += (i != 0 && addons.length > 2 ? "," : "") + (i + 1 == addons.length && addons.length > 1 ? " and " : " ") + addons[i].name;
  //   }
  // }

  request += response[politeLevel].end
  return {
    request: request,
    index: orderIndex,
    ingredients: order.ingredients,
    // addons: addons,
  };
}