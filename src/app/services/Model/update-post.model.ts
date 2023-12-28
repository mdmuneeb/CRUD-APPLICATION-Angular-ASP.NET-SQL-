export interface UpdatePostRequest
{
    id:string | undefined;
    title:string | undefined;
    context: string | undefined;
    summary: string | undefined;
    urlHandle: string | undefined;
    author: string | undefined;
    visible: string | undefined;
    publishDate: Date | undefined;
    updatedDate: Date | undefined;
    featuredImageUrl: string | undefined;
}