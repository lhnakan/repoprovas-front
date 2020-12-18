import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './HeaderStyled';

export default function Header() {

    return (
        <Container>
            <Link to={'/'}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtAVV4RjXKCI8ngwv-cDDRivstUrP4mQ0lA&usqp=CAU' />
            </Link>
            <Link to={'/'}>
                <h1>RepoProvas</h1>
            </Link>
        </Container>
    );
}