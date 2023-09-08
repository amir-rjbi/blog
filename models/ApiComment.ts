export interface getcom {
    commentId:    number;
    userFullName: string;
    postId:       number;
    text:         string;
    creationDate: Date;
}
export interface postcom {
    userId: number;
    postId: number;
    text:   string;
}
