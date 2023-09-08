class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name; 
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state; 
        this.type = type;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    };
    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(type) {
        super(type);
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor(author, type, releaseDate, pagesCount) {
        super(type, releaseDate, pagesCount);
         this.author = author;
         this.type = 'book';
    }
};

class NovelBook extends Book {
    constructor(type) {
        super(type);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor(type) {
        super(type);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor(type) {
        super(type);
        this.type = 'detective';
    }
};

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
        this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let element of this.books) {
            if (element.hasOwnProperty(type) && element[type]===value) {
                return element;
            } 
            } return null;
        }
     
     giveBookByName(bookName) {
        let corrBook = this.findBookBy('name', bookName)
        if (corrBook) {
            this.books = this.books.filter(el => el.name!=bookName)
            return corrBook;
        } return null;
    }
    }
