// import the Media class:
const Media = require("./Media");


// create your Book class:
class Book extends Media {
    static highestRating([book1, book2]) {
        let max = Math.max(book1.rating, book2.rating);
        if (book1.rating == max) {
            return book1;
        } else {
            return book2;
        }
    }

    constructor (title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}


// don't change below
module.exports = Book;
