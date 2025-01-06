import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../assets/images/shorts-image.png"
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate()
    const [links, setLinks] = useState([
        { id: 1, original: "https://www.driven.com.br", short: "e4231A", visitors: 271 },
        { id: 2, original: "https://www.globo.com.br", short: "bt24kS", visitors: 3 },
        { id: 3, original: "https://www.uol.com.br", short: "59sitA", visitors: 3 },
    ]);

    const [newLink, setNewLink] = useState("");

    const handleAddLink = () => {
        if (!newLink.trim()) return;
        const newShortLink = {
            id: links.length + 1,
            original: newLink,
            short: Math.random().toString(36).substring(2, 8),
            visitors: 0,
        };
        setLinks([...links, newShortLink]);
        setNewLink("");
    };

    const handleDeleteLink = (id) => {
        setLinks(links.filter((link) => link.id !== id));
    };

    return (
        <Container>
            <Main>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="Links que cabem no bolso"
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                    />
                    <Button onClick={handleAddLink}>Encurtar link</Button>
                </InputContainer>
                <LinkList>
                    {links.map((link) => (
                        <LinkItem key={link.id}>
                            <OriginalLink>{link.original}</OriginalLink>
                            <ShortLink>{link.short}</ShortLink>
                            <Visitors>Quantidade de visitantes: {link.visitors.toString().padStart(2, "0")}</Visitors>
                            <DeleteDiv onClick={() => handleDeleteLink(link.id)}>
                                <ion-icon name="trash-outline"></ion-icon>
                            </DeleteDiv>
                        </LinkItem>
                    ))}
                </LinkList>

            </Main>
        </Container>
    );
}

const Container = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    `;

const Main = styled.main`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const InputContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 2rem;
    `;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border: 1px solid #78B15940;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    box-shadow: 0px 4px 24px 0px #78B1591F;

    &:focus {
        border: 1px solid #4caf50;
    }
    `;

const Button = styled.button`
    padding: 15px 20px;
    font-weight: 700;
    color: white;
    background-color: #5D9040;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #3e8e41;
    }
    `;

const LinkList = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    `;

const LinkItem = styled.div`
    height: 3.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #81cc75;
    /* padding-left: 15px; */
    border-radius: 10px;
    border: 1px solid #80CC74;
    padding: 0 120px 0 20px;
    position: relative;
    `;

const OriginalLink = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    `;

const ShortLink = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #ffffff;
    text-align: center;
`;

const Visitors = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #ffffff;
    text-align: right;
`;

const DeleteDiv = styled.div`
    background-color: #FFF;
    width: 100px;
    height: 100%;

    /* flex: 0.5; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #fff;
    /* background-color: #f44336; */
    border: none;
    border-radius: 0 10px 10px 0;
    position: absolute;
    right: 0;
    cursor: pointer;

    ion-icon {
        color: #EA4F4F;
        font-size: 1.5rem;
    }

    &:hover {
        background-color: #f2c4c4;
    }
`