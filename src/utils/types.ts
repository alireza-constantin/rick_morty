export type Character = {
    id: string,
    name: string,
    status: string,
    species: string,
    image: string
}

export type Characters = {
    characters: {
        results: Array<Character>
    }
}