import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/images/shorts-image.png";

export default function HeaderLoggedIn() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <Header>
                <Nav>
                    <WelcomeMessage>Seja bem-vindo(a), Pessoa!</WelcomeMessage>
                    <NavLinks>
                        <NavLink onClick={() => handleNavigation("/home")}>Home</NavLink>
                        <NavLink onClick={() => handleNavigation("/ranking")}>Ranking</NavLink>
                        <NavLink onClick={() => handleNavigation("/")}>Sair</NavLink>
                    </NavLinks>
                </Nav>
            </Header>

            <Logo onClick={() => handleNavigation("/home")}>
                Shortly <img src={LogoImage} alt="Shortly Logo" />
            </Logo>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WelcomeMessage = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    color: #666;
    font-size: 1rem;
    font-weight: 400;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 15px;
`;

const NavLink = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: #666;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: #000;
    }
`;

const Logo = styled.h1`
    font-family: "Lexend Deca", serif;
    font-size: 3.5rem;
    font-weight: 150;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 3rem 0;
    cursor: pointer;

    img {
        width: 80px;
    }
`;