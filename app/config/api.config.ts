export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getGenresUrl = (string:string) => `/genres${string}`
export const getAuthUrl = (string:string) => `/auth${string}`
export const getActorsUrl = (string:string) => `/actors${string}`
export const getMoviesUrl = (string:string) => `/movies${string}`
export const getRatingUrl = (string:string) => `/ratings${string}`
export const getUsersUrl = (string:string) => `/users${string}`
