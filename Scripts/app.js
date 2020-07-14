axios.get('https://localhost:44305/api/books')
    .then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            CreateCard(response.data[i]);
        }

    })
    .catch(function (error) {
        console.log(error);
    });


function CreateCard(book) {
    var div = document.createElement('div');
    div.className = 'col-md-4';

    var card = document.createElement('div');
    card.className = 'card';

    var img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = book.imgUrl;

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var title = document.createElement('h4');
    title.className = "card-title";
    title.innerText = book.title;

    var text = document.createElement('p');
    text.className = "card-text";
    text.innerText = `Author: ${book.author} - ${book.description} 
    Price: ${book.price}`;

    var button = document.createElement('a');
    button.className = 'btn btn-warning';
    button.innerText = "Add to cart";


    button.onclick = function (e) {
        addToCart(e, book.id)
    }

    var row = document.getElementById("row");

    row.appendChild(div);
    div.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(button);
}


function addToCart(event, bookId) {

    storageService.Add(bookId, "cartItems");
    event.target.innerText = "Remove from cart";

    event.target.onclick = function (e) {
        removeFromCart(e, bookId);
    }
    
}


function removeFromCart(event, bookId) {
    console.log(bookId);
    storageService.Remove(bookId, "cartItems");
    event.target.innerText = "Add to cart";

    event.target.onclick = function (e) {
        addToCart(e, bookId);
    }
}







