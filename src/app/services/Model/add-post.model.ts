export interface AddPostRequest
{
    title:string | undefined;
    context: string | undefined;
    summary: string | undefined;
    urlHandle: string | undefined;
    author: string | undefined;
    visible: boolean | undefined;
    publishDate: string | undefined;
    updatedDate: string | undefined;
    featuredImageUrl: string | undefined;
}