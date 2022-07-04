import React from "react"
import styled from "styled-components"
function NavBar(){
    return(
    <>
    <NavContainer>
        <h2>Navbar</h2>
        <div>
            <a href="Publicaciones">Publicaciones</a>
            <a href="Login">Iniciar sesión</a>
            <a href="Signup">Registrarse</a>
        </div>
    </NavContainer>
    </>
    )
}
export default NavBar
const NavContainer = styled.div`
  h2{
    color : white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
    padding: .4rem;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    padding: .4rem;
  }
`;
