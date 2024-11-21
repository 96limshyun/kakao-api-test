export type MenuName = "도서 검색" | "내가 찜한 책"
export type MenuPath = "/" | "/favoriteBook"

export interface MenuType {
    name: MenuName;
    path: MenuPath;
}
