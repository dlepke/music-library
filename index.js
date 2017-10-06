function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

function Playlist(name) {
    this.name = name;
    this.tracks = [];
}

function Track(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

let myLibrary = new Library("Library of Songs", "me");

let play1 = new Playlist("first");
myLibrary.playlists.push(play1);


let song1 = new Track("Song1", 5, 180);
play1.tracks.push(song1);
let song2 = new Track("Song2", 4, 60);
play1.tracks.push(song2);
let song3 = new Track("Song3", 3, 180);
play1.tracks.push(song3);
let song4 = new Track("Song4", 2, 60);
play1.tracks.push(song4);
let song5 = new Track("Song5", 1, 180);
play1.tracks.push(song5);
let song6 = new Track("Song6", 0, 60);
play1.tracks.push(song6);

overallRating(play1);
totalDuration(play1);

let play2 = new Playlist("second");
myLibrary.playlists.push(play2);

let song7 = new Track("Song7", 5, 360);
play2.tracks.push(song7);
let song8 = new Track("Song8", 5, 120);
play2.tracks.push(song8);
let song9 = new Track("Song9", 4, 360);
play2.tracks.push(song9);
let song10 = new Track("Song10", 4, 120);
play2.tracks.push(song10);
let song11 = new Track("Song11", 3, 360);
play2.tracks.push(song11);
let song12 = new Track("Song12", 3, 120);
play2.tracks.push(song12);

overallRating(play2);
totalDuration(play2);

function totalDuration(playlist) {
    let sum = 0;
    for (let track in playlist.tracks) {
        sum += playlist.tracks[track].length;
    }
    playlist.totalDuration = sum;
}

function overallRating(playlist) {
    let sum = 0;
    for (let track in playlist.tracks) {
        sum += playlist.tracks[track].rating;
    }
   playlist.overallRating = sum / playlist.tracks.length;
}

console.log(myLibrary);
console.log(play1);
console.log(play2);