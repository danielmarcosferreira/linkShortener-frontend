import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log("Form submitted", formData);
        // Add backend submission logic here
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.email.trim()) errors.email = "E-mail é obrigatório.";
        if (!data.password) errors.password = "Senha é obrigatória.";
        return errors;
    };

    return (
        <Container>
            <Main>
                <FormContainer>
                    <Form onSubmit={handleFormSubmit}>

                        <Input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                        <Input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

                        <Button type="submit">Entrar</Button>
                    </Form>
                </FormContainer>
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

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 550px;
    margin-top: 50px;
    `;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    `;

const Input = styled.input`
    width: 100%;
    padding: 15px;
    border: 1px solid #d9ead3;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    background-color: #f9fff9;

    &:focus {
        border: 1px solid #4caf50;
    }
    `;

const Button = styled.button`
    width: 10rem;
    padding: 15px;
    font-size: 16px;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 2rem;

    &:hover {
        background-color: #3e8e41;
    }
    `;

const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
    margin-top: -10px;
    text-align: left;
    width: 100%;
    `;