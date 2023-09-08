export interface GetCat {
    id:              number;
    title:           string;
    slug:            string;
    parentId:        number;
    metaTag:         string;
    metaDescription: string;
}
export interface PostCat {
    title:           string;
    slug:            string;
    parentId:        number;
    metaTag:         string;
    metaDescription: string;
}
export interface PutCat {
    id:              number;
    title:           string;
    slug:            string;
    metaTag:         string;
    metaDescription: string;
}
