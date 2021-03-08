import React from "react";
import { Container, Button } from "react-bootstrap"

const ForgottenPass = () => {
    return (
        <Container className="justify-content-center">
            <Form autocomplete="off">
                <Form.Text>Ingresa tu email para recuperar tu contraseña</Form.Text>
                <Form.Control type="email" placeholder="Ingresa tu e-mail" />
                <Button>Recuperar</Button>
            </Form>
        </Container>
    );
};

export default ForgottenPass;