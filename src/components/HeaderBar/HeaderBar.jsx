import { useState } from 'react';
import styled from 'styled-components';
import { HomeLink, SignInOutButton, Avatar } from '@/components';
import { withTheme } from '@/contexts/theme';

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const HeaderBar = withTheme(function HeaderBar({ themeValue }) {
  const [avatar, setAvatar] = useState(null);

  const login = () =>
    setAvatar({
      name: 'Turning Red',
      email: 'turning-red@disney.pixar',
      photo: 'https://bit.ly/3EneVgU',
      level: 9,
    });

  const logout = () => setAvatar(null);

  let isLogin = !!avatar;

  return (
    <Header>
      <HomeLink color="#fff" />
      <Wrapper>
        {isLogin && <Avatar src={avatar.photo} alt={avatar.name} size={32} />}
        <SignInOutButton
          color="#fff"
          isLogin={isLogin}
          onClick={isLogin ? logout : login}
        />
        <ThemeToggler lang="en" onClick={themeValue.toggle}>
          {themeValue.name.includes('light') ? 'dark' : 'light'} Mode
        </ThemeToggler>
      </Wrapper>
    </Header>
  );
});

/* -------------------------------------------------------------------------- */
/* Styled Components                                                          */
/* -------------------------------------------------------------------------- */

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: #050714;
  padding: 20px;
  box-shadow: inset 0 4px 12px rgb(100, 100, 120, 0.2);
`;

const Wrapper = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ThemeToggler = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
`;
