

var storage = localStorage.getItem("cartItems");

for (let i = 0; i < storage.length; i++) {


    axios.get(`https://localhost:44305/api/books/${storage[i]}`)
    .then(function (response) {
        
        createCart(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

    
}

function createCart(item) {

   var container = document.getElementById("cart-container");

   var cartContainer = document.createElement("div");
   cartContainer.className = "cart-container";

   var bookTitle = document.createElement("div");
   bookTitle.className = "book-title";
   bookTitle.innerText = `${item.title} by ${item.author}`;

   var bookDescription = document.createElement("div");
   bookDescription.className = "book-description";
   bookDescription.innerText = item.description;

   var bookPrice = document.createElement("div");
   bookPrice.className = "book-price";
   bookPrice.innerText = `Price: ${item.price}`;

   var removeButton = document.createElement("div");
   removeButton.className = "btn btn-warning";
   removeButton.innerText = "Remove from cart";

   removeButton.onclick = function (e) {
       storageService.Remove(item.id, "cartItems");
       e.target.parentElement.remove();
       
   }

   container.appendChild(cartContainer);
   cartContainer.appendChild(bookTitle);
   cartContainer.appendChild(bookDescription);
   cartContainer.appendChild(bookPrice);
   cartContainer.appendChild(removeButton);

}




