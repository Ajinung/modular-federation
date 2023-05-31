import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import styled from "styled-components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default HomeLayout;

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;
