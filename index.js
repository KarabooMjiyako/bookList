
//book constructor

function Book(title, author, isbn, readStatus ){
    this.title = title;
    this.author = author;
    this.read = readStatus;
    this.isbn = isbn;
    this.action = "Delete";
};

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#ISBN");
const readStatusInput = document.querySelector("#readStatus");
const button = document.querySelector(".btn");

//Booklist constructor

function BookList(){
    this.books = [];
    
    this.displayBooks = function(){
        const bookList = document.querySelector("#book-list");
        bookList.innerHTML = "";

        this.books.forEach(function(book){
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



             const deleteCell = document.createElement("td");
             const deleteButton = document.createElement("button");
             deleteButton.className = "btn btn-danger";
             deleteButton.innerHTML = book.action;
             deleteButton.addEventListener("click", function() {
             const index = bookList.books.indexOf(book);
                   bookList.deleteBook(index);
              deleteCell.parentNode.removeChild(deleteCell); // Remove deleteCell from its parent
              });
             deleteCell.appendChild(deleteButton);
             bookListRow.appendChild(deleteCell);

            bookList.appendChild(bookListRow);
        });
    }
    this.addBook = function(book){
        this.books.push(book);
        this.displayBooks()
    };

    this.addPlaceholderBook = function() {
        const placeholderBook = new Book("Nervous Conditions", "Tsitsi Dangarembga", "9780954702335", true, "Read");
        this.addBook(placeholderBook);
    };

    this.loadBooks = function() {
        const storedBooks = JSON.parse(localStorage.getItem("books"));
        if (storedBooks) {
            this.books = storedBooks;
            this.displayBooks();
        }
    }

}


const bookList = new BookList();

bookList.addPlaceholderBook();

bookList.loadBooks();

button.addEventListener("click", function() {
    if (titleInput.value === "" || authorInput.value === "" || isbnInput.value === "") {
        alert("Enter all book details");
    } else {
        const newBook = new Book(titleInput.value, authorInput.value, isbnInput.value, readStatusInput.checked);
        bookList.addBook(newBook);
    }
});
