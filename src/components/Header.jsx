import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import LogoImage from "../assets/images/shorts-image.png"


export default function Header() {
    const navigate = useNavigate()

    const navigateSignUp = (e) => {
        e.preventDefault()
        navigate("/signup")
    }

    const navigateLogin = (e) => {
        e.preventDefault()
        console.log("Entered here")
        navigate("/login")
    }

    return (
        <Container>
            <HeaderStyle>
                <Nav>
                    <NavLink onClick={navigateLogin}>Entrar</NavLink>
                    <NavLink onClick={navigateSignUp}>Cadastrar-se</NavLink>
                </Nav>
            </HeaderStyle>

            <Logo onClick={() => navigate("/home")}>
                Shortly <img src={LogoImage} />
            </Logo>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const HeaderStyle = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 20px;
    `;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
    `;

const NavLink = styled.button`
    text-decoration: none;
    background-color: #FFF;
    border: none;
    color: #666;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
    `;

const Logo = styled.h1`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    margin: 3rem 0;

    font-family: "Lexend Deca", serif;
    font-size: 3.5rem;
    font-weight: 150;

    img {
        width: 80px;
    }
    `;