import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/logoHeader.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const avatar = 'https://api.adorable.io/avatars/53/abott@adorable.png';

  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Go Barber" />
          <Link to="/dashboard">dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Diogo Faria</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={avatar} alt="Minha Foto" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
