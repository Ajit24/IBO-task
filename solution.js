//--------------------- Solution ---------------------------------

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

//1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

const getUniqueProductCount = (arr) => {
	const res = {};

	arr.forEach((e) => {
		res[e.productName] = (res[e.productName] || 0) + 1;
	});
	return res;
};
console.log(getUniqueProductCount(listOfProducts));


// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

const getUniquePrducts = (arr) => {
	const res = {};
	arr.forEach((e) => {
		if (res[e.productName] == undefined) {
			res[e.productName] = e;
		} else {
			res[e.productName].quantity += e.quantity;
		}
	});

	return Object.values(res);
};

console.log(getUniquePrducts(listOfProducts));