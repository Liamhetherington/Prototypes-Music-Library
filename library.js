// FUNCTIONS USING PROTOTYPES //
class Library {
    constructor(name, creator) {
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist);
    }
}

class Playlist {
    constructor(title) {
        this.title = title;
        this.tracks = [];
    }

    addTrack(track) {
        this.tracks.push(track);
    }

    overallRating() {
        let totalRating = 0;
        this.tracks.forEach((track) => {
            totalRating += track.rating;
        });
        return totalRating / this.tracks.length;
    }

    totalDuration() {
        let totalDuration = 0;
        this.tracks.forEach((track) => {
            totalDuration += track.length;
        })
        return totalDuration;
    }
}

class Track {
    constructor(title, rating, length) {
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
}

// DRIVER CODE //

// Creating new libraries //

const Lib1 = new Library('Lib 1', 'Liam');
const Lib2 = new Library('Rockin Tunez', 'Shredder');

// Creating new playlists //

const Playlist1 = new Playlist('Playlist1');
const Playlist2 = new Playlist('Playlist2');
const Playlist3 = new Playlist('Playlist3');

const Track1 = new Track('Track1', 5, 2200);
const Track2 = new Track('Track2', 2, 2000);
const Track3 = new Track('Track3', 1, 2200);
const Track4 = new Track('Track4', 2, 1900);
const Track5 = new Track('Track5', 4, 2500);
const Track6 = new Track('Track6', 3, 1800);
const Track7 = new Track('Track7', 3, 2100);

Playlist1.addTrack(Track7);
Playlist1.addTrack(Track5);
Playlist1.addTrack(Track1);

Playlist2.addTrack(Track3);
Playlist2.addTrack(Track4);
Playlist2.addTrack(Track2);

Playlist3.addTrack(Track6);
Playlist3.addTrack(Track1);
Playlist3.addTrack(Track3);
Playlist3.addTrack(Track5);
Playlist3.addTrack(Track7);

Lib1.addPlaylist(Playlist1);
Lib1.addPlaylist(Playlist3);

Lib2.addPlaylist(Playlist2);
Lib2.addPlaylist(Playlist3);

Lib1.playlists.forEach((playlist) => {
    console.log(playlist.title);
    console.log(`Avg Rating: ${playlist.overallRating()}`);
    console.log(`Total Duration: ${playlist.totalDuration()}`);
})

Lib1.playlists.forEach((playlist) => {
    console.log(playlist.title);
    console.log(`Avg Rating: ${playlist.overallRating()}`);
    console.log(`Total Duration: ${playlist.totalDuration()}`);
})