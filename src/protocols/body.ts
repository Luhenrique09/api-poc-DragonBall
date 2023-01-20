export type CharactersEntity = {
    id: number,
    name: string,
    level: number,
    transformations: number,
    image: string
}

export type Characters = Omit<CharactersEntity, "id">