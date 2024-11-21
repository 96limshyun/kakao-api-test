import { Spacing, Title } from "@components/Common";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

import { NAVIGATION_MENU } from "@/constants/index";
import { DEFAULT_MENU_INDEX } from "@/constants/index";
import { MenuName } from "@/types/menu";

const defaultMenuName = NAVIGATION_MENU[DEFAULT_MENU_INDEX].name;
const Navigation = () => {
    const [selectedMenu, setSelectedMenu] = useState<MenuName>(defaultMenuName);

    const handleMenuClick = (name: MenuName) => setSelectedMenu(name);

    return (
        <>
            <NavigationContainer>
                <NavigationWrap>
                    <Title fontSize="2" fontWeight="bold">
                        CERTICOS BOOKS
                    </Title>
                    <NavigationMenu>
                        {NAVIGATION_MENU.map((menu) => (
                            <NavItem
                                key={menu.name}
                                onClick={() => handleMenuClick(menu.name)}
                            >
                                <StyledLink
                                    to={menu.path}
                                    $isSelected={menu.name === selectedMenu}
                                >
                                    {menu.name}
                                </StyledLink>
                            </NavItem>
                        ))}
                    </NavigationMenu>
                </NavigationWrap>
            </NavigationContainer>
            <Spacing height="xxl" />
            <Outlet />
        </>
    );
};

export default Navigation;

const NavigationContainer = styled.section`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

const NavigationWrap = styled.div`
    width: 1280px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    
`;

const NavigationMenu = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const NavItem = styled.li`
    margin: 0 15px;
`;

const StyledLink = styled(Link)<{ $isSelected: boolean }>`
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-bottom: ${({ $isSelected }) =>
        $isSelected ? "1px solid blue" : "none"};
    &:hover {
        color: blue;
    }
`;
