import {TypeMaterialIconName} from "@shared/icon.types";

export interface IGenre {
    _id: string,
    name: string,
    slug: string,
    description: string,
    icon: TypeMaterialIconName
}

export interface IActor {
    _id: string,
    name: string,
    slug: string,
    description: string,
    photo: string,
    countMovies: number
}

export interface IMovie {
    id: string,
    name: string,
    slug: string,
    description: string,
    poster: string,
    bigPoster: string,
    title: string,
    rating: number,
    genres: IGenre[],
    countOpened: number,
    videoUrl: string,
    actors: IActor,
    isSendTelegram: boolean,
    parameters: {
        year: number,
        duration: number,
        country: string,
        _id: string
    }
}