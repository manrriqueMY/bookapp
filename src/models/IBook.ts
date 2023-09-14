import IAuthor from "./IAuthor";

interface IBook {
    id: number,
    title: string,
    chapters: number,
    pages: number,
    authors: IAuthor[]
}

export default IBook;