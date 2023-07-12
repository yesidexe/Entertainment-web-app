type Data = {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: ResultsMovieLists,
}

//en uso
type ResultsLists = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

//en uso
type TrendingType = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    name: string,
    title: string,
    original_language: string,
    original_name: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    first_air_date: string,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    origin_country: string[]
}

//en uso
type Status = 'idle' | 'success' | 'error' | 'loading'

type SearchResults = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    name: string,
    title: string,
    original_language: string,
    original_name: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    first_air_date: string,
    release_date: string,
    vote_average: number,
    vote_count: number,
    origin_country: string[]
}

//en uso
type Genres = {
    id: number,
    name: string
}

type DiscoverMovies = {
    adult: boolean,
    first_air_date: string,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

//en uso
type DetailsType = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: any,
    budget: number,
    genres: Genres[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: any,
    production_countries: any,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: any,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    created_by: any,
    episode_run_time: Array,
    first_air_date: string,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: object,
    name: string,
    next_episode_to_air: any,
    networks: object,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_name: string,
    seasons: array,
    type: string,
}

//en uso
type Credits = {
    id: number,
    cast: CastCredits[],
    crew: CrewCredits[],
}

//en uso
type CastCredits = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    character: string,
    credit_id: string,
    order: number,
}

//en uso
type CrewCredits = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    credit_id: string,
    department: string,
    job: string
}
