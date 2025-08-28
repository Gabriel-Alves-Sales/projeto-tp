export interface INotice {
    title: string;
    caption?: string;
    description?: string;
    author: string;
    date: string;
    image?: string;
    content: string;
    tags: Array<string>
}