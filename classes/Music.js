// import the Media class:
const Media = require("./Media");

// create your Music class:
class Music extends Media {
    static shortestAlbum([music1, music2]) {
        let min = Math.min(music1.length, music2.length);
        if (music1.length == min) {
            return music1;
        } else {
            return music2;
        }
    }

    constructor (title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
}

// don't change below
module.exports = Music;
