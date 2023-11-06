export class Song {

    name: string; 
    image: string;
    url: string;
    artists: string[];

    constructor(
        name: string, 
        image: string,
        url: string,
        artists: string[]
    ) {
        this.name = name
        this.image = image
        this.url = url
        this.artists = artists
    }

}

