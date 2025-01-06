import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function ApresentationPage() {
    const navigate = useNavigate()

    return (
        <Container>
            <Main>
                <Title>🏆 Ranking</Title>
                <RankingContainer>
                    <RankingItem>
                        <strong>1. Fulaninha</strong> - 32 links - 1.703.584 visualizações
                    </RankingItem>
                    <RankingItem>
                        <strong>2. Ciclano</strong> - 20 links - 1.113.347 visualizações
                    </RankingItem>
                    <RankingItem>
                        <strong>3. Beltrana</strong> - 18 links - 852.961 visualizações
                    </RankingItem>
                    <RankingItem>
                        <strong>4. Joaozin</strong> - 14 links - 492.173 visualizações
                    </RankingItem>
                    <RankingItem>
                        <strong>5. DEFINITIVAMENTE_NAO_E_UM_BOT</strong> - 12345252 links -
                        37.707 visualizações
                    </RankingItem>
                </RankingContainer>

                <CallToAction>Crie sua conta para usar nosso serviço!</CallToAction>
            </Main>
        </Container>
    );
}

const Container = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
    color: #333;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    `;

const Main = styled.main`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    `;

const RankingContainer = styled.div`
    width: 70%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
    `;

const RankingItem = styled.p`
    font-size: 1rem;
    margin: 5px 0;

    strong {
        font-weight: bold;
    }
    `;

const CallToAction = styled.h3`
    margin-top: 4rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #444;
    `;