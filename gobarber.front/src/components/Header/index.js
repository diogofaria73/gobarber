import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import Logo from '~/assets/logoHeader.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const defaultAvatar = 'https://api.adorable.io/avatars/60/abott@adorable.png';
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Go Barber" />
          <Link to="/dashboard">dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={profile.avatar ? profile.avatar.url : defaultAvatar}
              alt="Minha Foto"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
