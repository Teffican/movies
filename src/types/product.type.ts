export type ProductType = {
    id: number,
    media_type?: string,
    backdrop_path?: string | null,
    poster_path: string | null,
    vote_average: number,
    name: string,
    title: string,
    overview?: string,
    release_date?: string,
    runtime?: number,
    genres?: [
        {id: number, name?: string}
    ],
    tagline?: string,
    first_air_date?: string,
    number_of_episodes?: number,
    number_of_seasons?: number
}