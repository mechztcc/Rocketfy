import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({ data }) {

    const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD'},
    collect: monitor => ({
        isDragging: monitor.isDragging(),
    })
})

    return (
        <Container ref={dragRef}>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
            </header>
            <p>{data.content}</p>
            <img src="https://api.adorable.io/avatars/155/abott@adorable.png" alt=""></img>
        </Container>
    )
}