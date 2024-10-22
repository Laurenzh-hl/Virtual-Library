// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
    static longestMovie([movie1, movie2]) {
        let max = Math.max(movie1.duration, movie2.duration);
        if (movie1.duration == max) {
            return movie1;
        } else {
            return movie2;
        }
    }

    constructor (title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}
// Duration: ${this.duration}

// don't change below
module.exports = Movie;