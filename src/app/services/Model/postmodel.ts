export interface Post
{
    id:string;
    title:string;
    context: string;
    summary: string;
    urlHandle: string;
    author: string;
    visible: string;
    publishDate: Date;
    updatedDate: Date;
    featuredImageUrl: string;
}