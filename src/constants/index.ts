import { MenuType } from "@/types/menu"

export const NAVIGATION_MENU: MenuType[] = [
    { name: "도서 검색", path: "/" },
    { name: "내가 찜한 책", path: "/favoriteBook" },
]

export const DEFAULT_MENU_INDEX = 0;
export const DEFAULT_GLOBAL_TARGET = "title"