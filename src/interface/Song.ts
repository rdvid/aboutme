export interface Song {

    name: string;
    images: {
        url: string;
    }
    artists : Artist[];

}

interface Artist {

    name: string;
    type: string;
    
}