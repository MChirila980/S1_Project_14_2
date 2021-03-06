"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Melinda Chirila
   Date:   4/3/2019

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
window.addEventListener("load", setupCart);

function setupCart() {
      // Add the addItem(e) function onclick to each class = addButton element
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem);
      }
}

function addItem(e) {
      //  this is the description of the food items
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.id;
      var foodDescription = foodItem.cloneNode(true);

      // this is a reference to the shopping cart (cartBox)
      var cartBox = document.querySelector("aside#cart");

      // keeps track of the order
      var duplicateOrder = false;
      for (var i = 0; i < cartBox.childNodes.length; i++) {
            if (cartBox.childNodes[i].id === foodID) {
                  duplicateOrder = true;
                  cartBox.childNodes[i].firstChild.textContent++;
            }
      }

      if (!duplicateOrder) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
}
