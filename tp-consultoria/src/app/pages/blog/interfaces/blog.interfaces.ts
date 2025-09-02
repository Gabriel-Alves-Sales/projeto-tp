export interface INotice {
    id: string;
    title: string;
    caption?: string;
    description?: string;
    author: string;
    date: string;
    image?: string;
    content: string;
    tags: Array<string>
}