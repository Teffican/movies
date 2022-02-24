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
        id: number,
        name?: string
    ]
}