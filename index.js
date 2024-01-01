// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#ISBN");
const button = document.querySelector(".btn");
const bookListElement = document.querySelector("#book-list");

// BookList constructor
function BookList() {
    this.books = [];

    this.addBook = function(book) {
        this.books.push(book);
        this.displayBooks();
    };

    this.displayBooks = function() {
        const bookList = document.querySelector("#book-list");
        bookList.innerHTML = "";

        this.books.forEach(function(book) {
            const bookListRow = document.createElement("tr");

            const newTitle = document.createElement("th");
            newTitle.innerHTML = book.title;
            bookListRow.appendChild(newTitle);

            const newAuthor = document.createElement("th");
            newAuthor.innerHTML = book.author;
            bookListRow.appendChild(newAuthor);

            const newISBN = document.createElement("th");
            newISBN.innerHTML = book.isbn;
            bookListRow.appendChild(newISBN);

            bookList.appendChild(bookListRow);
        });
    };
}

// Instances of Book and BookList
const bookList = new BookList();

button.addEventListener("click", function() {
    if (titleInput.value == "" && authorInput.value == "" && isbnInput.value == "") {
        alert("Enter any book");
    } else {
        const newBook = new Book(titleInput.value, authorInput.value, isbnInput.value);
        bookList.addBook(newBook);
    }
});
