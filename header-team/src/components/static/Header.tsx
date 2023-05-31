import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>module Federation</Logo>
          <NavHolder>
            <Nav to="data-fetching">Data Fetching</Nav>
            <Nav to="todo">Todo</Nav>
            <Nav to="state-management">State Management</Nav>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Nav = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;

  :hover {
  }
`;
const NavHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 800;
`;

const Main = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #ff5900f5;
  color: #fff;
`;
