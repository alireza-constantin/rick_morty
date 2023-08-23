export type Character = {
    id: string,
    name: string,
    status: string,
    species: string,
    image: string
}
export type Info = {
    next: number,
    prev: number
}

export type Characters = {
    characters: {
        results: Array<Character>,
        info: Info
    }
}