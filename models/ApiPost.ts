export interface PostFilterResult {
    entityCount:  number;
    currentPage:  number;
    pageCount:    number;
    startPage:    number;
    endPage:      number;
    take:         number;
    posts:        Post[];
    filterParams: FilterParams;
}

export interface FilterParams {
    title:        string;
    categorySlug: string;
    pageId:       number;
    take:         number;
}

export interface Post {
    postId:        number;
    userFullName:  string;
    categoryId:    number;
    subCategoryId: number;
    title:         string;
    slug:          string;
    description:   string;
    imageName:     string;
    visit:         number;
    isSpecial:     boolean;
    creationDate:  Date;
    category:      Category;
    subCategory:   Category;
}

export interface Category {
    id:              number;
    title:           string;
    slug:            string;
    parentId:        number;
    metaTag:         string;
    metaDescription: string;
}

export interface Postpost{
    UserId: number;
    CategoryId: number;
    SubCategoryId: number;
    Title: string;
    Slug: string;
    Description: string;
    IsSpecial: boolean;
    ImageFile: string;
}
export interface Putpost{
    PostId: number;
    CategoryId: number;
    SubCategoryId: number;
    Title: string;
    Slug: string;
    Description: string;
    IsSpecial: boolean;
    ImageFile: string;
}
