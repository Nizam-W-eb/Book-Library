library = [];

function Book(name, author, pages, read){
    if (typeof pages === "number" && typeof read === "boolean" ){
        this.name = name
        this.author = author
        this.pages = pages
        this.read = read
        this.code = crypto.randomUUID()
        
    }
    else (
        console.error("please select corrct data type")
    )
   
}

function addBookToLibrary(name, author, pages, read) {
    if(contains(library,name)){
        console.error("the book already exists!"); 
    }
    else{
      name = new Book(name, author, pages,read);
      console.log(name)
      library.unshift(name);
      showcase(library);
    } 
}

//showcase the books

let showcase = function (books){

    let shelf = document.querySelector(".main");

    for(let i = 0; i<1; i++){
      let box = document.createElement('div');
      box.classList.add("box");
      shelf.appendChild(box);

      //creating the book details
      let bookName = document.createElement("p");
      let bookAuthor = document.createElement("p");
      let bookPages = document.createElement("p");
      let bookRead = document.createElement("p");

      //adding box content class to the book datails
      bookName.classList.add("box-content");
      bookAuthor.classList.add("box-content");
      bookPages.classList.add("box-content");
      bookRead.classList.add("box-button", "box-content");
      //appending the book details as the child of the box
      box.appendChild(bookName);
      box.appendChild(bookAuthor);
      box.appendChild(bookPages);
      box.appendChild(bookRead);

      //displaying the book details
      bookName.innerText = `Name: ${books[i].name}`;
      bookAuthor.innerText = `Author: ${books[i].author}`;
      bookPages.innerText = `Pages: ${books[i].pages}`;
      if(books[i].read !== true){
        bookRead.innerText = `Not read`;
      }
      else if(books[i].read){
        bookRead.innerText = `Read`;
      }
      console.log
      bookRead.addEventListener("click", (a) => {
        if(bookRead.innerText === "Read"){
            bookRead.innerText = "Not read"
        }

        else{
            bookRead.innerText = "Read";
        }
      })

      console.log(box);
    }  
};

//function that checks if the string exists in an array
let contains = function(arr,word){
     word = word.toLowerCase();
     word = word.split(" ");
     word = word.join("");
   for(let i = 0; i<arr.length; i++){
        let name = arr[i].name;
        name = name.toLowerCase();
        name = name.split(" ");
        name = name.join("");
       if(name === word){
        return true
       }
   }
}

//toggle the book-form 
let bookForm = document.querySelector(".book-form");
let showButton = document.querySelector(".button-add");
showButton.addEventListener("click", (a)=>{
    bookForm.classList.toggle("disabled");
    console.log("clicked");
});

// getting the data from form

let formButton = document.querySelector(".book-submit");
formButton.addEventListener("click", (a) => {
    a.preventDefault();
    let formName = document.querySelector("#book-name");
    let formAuthor = document.querySelector("#book-author");
    let formPages = document.querySelector("#book-pages");
    let formRead = document.querySelector("#book-read");

    formPages = Number(formPages.value);
    console.log(formPages);

    if(formName.value === "" || formAuthor.value === "" || formPages === ""){
        alert("You are missing some details!")
    }
    else{
        addBookToLibrary(formName.value, formAuthor.value, formPages,formRead.checked);
    }
})