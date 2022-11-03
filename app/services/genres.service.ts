import {getGenresUrl} from "@config/api.config";
import {IGenre} from "@shared/movies.types";
import {axiosClassic} from "../api/interseptors";

export const GenreService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IGenre[]>(getGenresUrl("/popular"), {
            params: searchTerm ? {searchTerm} : {}
        })
    }
}