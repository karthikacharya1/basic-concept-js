const cart = ["shoes", "bag", "watch"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate cart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    //logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 4000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}
function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("payment successfull");
  });
}
