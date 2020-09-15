import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
    return (
        <Container>
            <header>
                <Label color="#7159c1"/>
            </header>
            <p>Fazer porra nenhuma!</p>
            <img src="https://api.adorable.io/avatars/155/abott@adorable.png" alt=""></img>
        </Container>
    )
}