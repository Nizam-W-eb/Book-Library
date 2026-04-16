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

function addBookToLibrary(book) {
    if (typeof book === "object"){
        library.push(book)
    }

    else{
        console.error("the book don't exist!")
    }
}

