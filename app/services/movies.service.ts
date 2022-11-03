import {getMoviesUrl} from "@config/api.config";
import {axiosClassic} from "../api/interseptors";
import {IMovie} from "@shared/movies.types";

export const MovieService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IMovie[]>(getMoviesUrl(""), {
            params: searchTerm ? {searchTerm} : {}
        })
    },
    async getPopularMovie(searchTerm?: string) {
        return axiosClassic.get<IMovie[]>(getMoviesUrl("/most-popular"), {
            params: searchTerm ? {searchTerm} : {}
        })
    },
    async getMostPopularMovie() {
        const {data : movies} = await axiosClassic.get<IMovie[]>(getMoviesUrl("/most-popular"))

        return movies
    },
}