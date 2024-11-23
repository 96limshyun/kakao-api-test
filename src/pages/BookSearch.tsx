import { Input, Title, Button } from "@components/Common";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

import useSearch from "@/hooks/useSearch";

const BookSearch = () => {
    const {searchRef, handleDefaultSubmit, bookData} = useSearch();
    console.log(bookData)
    return (
        <BookSearchContainer>
            <Title fontSize="1" fontWeight="bold">
                도서 검색
            </Title>
            <InputWrap>
                <form onSubmit={handleDefaultSubmit}>
                    <Input
                        ref={searchRef}
                        borderRadius="15px"
                        leftIcon={<FaSearch />}
                        width="350px"
                    />
                </form>
                <Button
                    width="70px"
                    height="30px"
                    fontSize="0.5"
                    color="white"
                    border="1px solid gray"
                >
                    상세검색
                </Button>
            </InputWrap>
        </BookSearchContainer>
    );
};

export default BookSearch;

const BookSearchContainer = styled.section`
    width: 1000px;
    height: 100%;
    margin: 0px auto;
`;

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
