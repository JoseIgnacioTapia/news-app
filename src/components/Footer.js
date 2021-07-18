import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #444;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const icoStyles = {
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    alignText: 'center',
    marginRight: '0.5rem',
  };

  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <a
        href="https://joseignaciotapia.github.io/"
        target="_blank"
        rel="noreferrer"
      >
        <img style={icoStyles} src="./favicon.png" alt="Icon" />
      </a>
      <p>Copyright © {year}, All Rights Reserved</p>
    </FooterContainer>
  );
};

export default Footer;
