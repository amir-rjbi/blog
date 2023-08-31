export interface UsersFilterResult {
    entityCount: number;
    currentPage: number;
    pageCount:   number;
    startPage:   number;
    endPage:     number;
    take:        number;
    users:       User[];
}

export interface User {
    userId:       number;
    userName:     string;
    fullName:     string;
    password:     string;
    role:         number;
    registerDate: Date;
}
