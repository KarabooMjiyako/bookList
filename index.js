// Book constructor
function Book(title, author, isbn, read) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.read = read || false; // Default value for read status
}

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#ISBN");
const readStatusInput = document.querySelector("#readStatus");
const button = document.querySelector(".btn");
const bookListElement = document.querySelector("#book-list");

// BookList constructor
function BookList() {
    this.books = [];

    // Load books from local storage on initialization
    this.loadBooks = function() {
        const storedBooks = JSON.parse(localStorage.getItem("books"));
        if (storedBooks) {
            this.books = storedBooks;
            this.displayBooks();
        }
    };

    // Save books to local storage
    this.saveBooks = function() {
        localStorage.setItem("books", JSON.stringify(this.books));
    };

    this.addBook = function(book) {
        this.books.push(book);
        this.displayBooks();
        this.saveBooks();
    };

    this.displayBooks = function() {
        const bookList = document.querySelector("#book-list");
        bookList.innerHTML = "";
    
        this.books.forEach(function(book) {
            const bookListRow = document.createElement("tr");
    
            // Display read status as a colored dot
            const readStatusCell = document.createElement("td");
            const readStatusDot = document.createElement("div");
            readStatusDot.className = "read-status-dot";
            readStatusDot.style.backgroundColor = book.read ? "green" : "red";
            readStatusCell.appendChild(readStatusDot);
            bookListRow.appendChild(readStatusCell);
    
            const newTitle = document.createElement("td");
            newTitle.innerHTML = book.title;
            bookListRow.appendChild(newTitle);
    
            const newAuthor = document.createElement("td");
            newAuthor.innerHTML = book.author;
            bookListRow.appendChild(newAuthor);
    
            const newReadStatus = document.createElement("td");
            newReadStatus.innerHTML = book.read ? "Read" : "Not Read";
            bookListRow.appendChild(newReadStatus);
    
            const newISBN = document.createElement("td");
            newISBN.innerHTML = book.isbn;
            bookListRow.appendChild(newISBN);
    
            bookList.appendChild(bookListRow);
        });
    };
}

// Instances of Book and BookList
const bookList = new BookList();

// Load existing books from local storage
bookList.loadBooks();

// Add a placeholder book on page load
document.addEventListener("DOMContentLoaded", function() {
    const placeholderBook = new Book("Nervous Conditions", "Tsitsi Dangarembga", "9780954702335", true);
    bookList.addBook(placeholderBook);
});

button.addEventListener("click", function() {
    if (titleInput.value === "" || authorInput.value === "" || isbnInput.value === "") {
        alert("Enter all book details");
    } else {
        const newBook = new Book(titleInput.value, authorInput.value, isbnInput.value, readStatusInput.checked);
        bookList.addBook(newBook);
    }
});
