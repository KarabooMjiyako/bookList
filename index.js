// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// BookList constructor
function BookList() {
    this.books = [];

    // Method to add a book to the list
    this.addBook = function(book) {
        this.books.push(book);
    };

    // Method to display the books in the book list
    this.displayBooks = function() {
        const bookList = document.querySelector("#book-list");
        bookList.innerHTML = ""; // Clear previous content

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

// Create instances of Book and BookList
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#ISBN");
const button = document.querySelector(".btn");

const bookList = new BookList();

button.addEventListener("click", function() {
    if (titleInput.value === "" && authorInput.value === "" && isbnInput.value === "") {
        alert("Enter any input");
    } else {
        const newBook = new Book(titleInput.value, authorInput.value, isbnInput.value);
        bookList.addBook(newBook);
        bookList.displayBooks();
    }
});
})

