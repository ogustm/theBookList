const books = [{
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];


let bookList = document.querySelector(".book-list")


createListOfBooks = books => {


  books.forEach(book => {

    let listOfBooks = document.createElement("li");


    let imagesOfBooks = document.createElement("img");
    let titleOfBooks = document.createElement("h3");
    let authorName = document.createElement("p");
    let readOrNotReaded = document.createElement("span");

    imagesOfBooks.src = book.img;
    titleOfBooks.innerHTML = book.title;
    authorName.innerHTML = book.author;
    let statusReadOrNotReaded = book.alreadyRead;

    if (statusReadOrNotReaded == true) {
      readOrNotReaded.classList.add("active");
      readOrNotReaded.innerHTML = "Read";
    } else {
      readOrNotReaded.innerHTML = "To read";
    }

    //Appending childs
    bookList.appendChild(listOfBooks);
    listOfBooks.appendChild(imagesOfBooks);
    listOfBooks.appendChild(titleOfBooks);
    listOfBooks.appendChild(authorName);
    listOfBooks.appendChild(readOrNotReaded);

    //Adding classes
    listOfBooks.classList.add("book", "card");
    imagesOfBooks.classList.add("book-cover", "card-img-top", "img-fluid");
    titleOfBooks.classList.add("card-title", "text-left");
    authorName.classList.add("card-text", "text-left");
    readOrNotReaded.classList.add("card-text", "text-right", "badge", "badge-secondary");

    //Some Styling
    titleOfBooks.style.fontSize = "1.2em";
    titleOfBooks.style.paddingTop = "1.2em";
    authorName.style.color = "grey";


    // listOfBooks.appendChild(foto);
    // listOfBooks.appendChild(title);
    // listOfBooks.appendChild(author);
    // listOfBooks.appendChild(bookStatus);

  });

}

createListOfBooks(books)