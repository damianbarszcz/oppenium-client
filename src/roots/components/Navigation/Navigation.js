import React  from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import axios from "axios";

const Navbar = styled.nav`
  min-width:100%;
  background-color:#ffffff;
  border-bottom:1px solid #f3f3f3;
  z-index:1;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const NavBlock = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  align-items: center;
  padding: 0.5rem 0 0.5rem;
`
const NavBrand = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1.25rem;
  cursor:pointer;
  color:#17183B;
`
const NavList = styled.ul`
  display: inline;
  margin-left:1rem;
`
const NavListItem = styled.li`
  display: inline;
  margin-left:1.5rem;

  &:first-child{
      margin-left: 0rem;
  }
`
const NavListItemLink = styled(Link)`
  display: inline-block;
  transition: 0.1s ease-in-out;
  text-decoration: none;
  font-size: 0.85rem;
  font-family: 'Radio Canada', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  color:#17183B;

  &:hover{
    color:#0096FF;
  }
`
const NavActions = styled.div`
  display:flex;
`

const NavActionsBtn = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  font-family: 'Radio Canada', sans-serif;
  background-color:#17183B;
  transition: 0.1s ease-in-out;
  text-decoration: none;
  border:0;
  cursor: pointer;
  color:#FFFFFF;
  font-weight: 600;
  font-size:0.85rem;

  &:hover{
    background-color:#0096FF;
  }
`

const NavActionsLogout = styled.button`
  display: inline-block;
  margin-left:2rem;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  font-family: 'Radio Canada', sans-serif;
  background-color:#17183B;
  transition: 0.1s ease-in-out;
  text-decoration: none;
  border:0;
  cursor: pointer;
  color:#FFFFFF;
  font-weight: 600;
  font-size:0.85rem;

  &:hover{
    background-color:#0096FF;
  }
`

const Navigation = (props) => {

    const handleLogout = (e) =>{
        e.preventDefault();
        
        localStorage.removeItem('token')
        
        window.location.href = '/login'
    }

    return (
        <Navbar>
            <Container>
                <NavBlock>
                    <NavBrand to="/" target="_self">Oppenium</NavBrand>

                    <NavList>
                        <NavListItem>
                            <NavListItemLink to="/computers" target="_self">Computers</NavListItemLink>
                        </NavListItem>

                        <NavListItem>
                            <NavListItemLink to="/smartphones" target="_self">Smartphones</NavListItemLink>
                        </NavListItem>

                        <NavListItem>
                            <NavListItemLink to="/computer-components" target="_self">Computer components</NavListItemLink>
                        </NavListItem>
                    </NavList>

                    <NavActions>
                        { props.user ?
                            <>
                                <NavActionsBtn type="button" to="/member/overview" target="_self">Panel</NavActionsBtn>
                                <NavActionsLogout type="button" onClick={handleLogout}>Logout</NavActionsLogout>
                                
                            </>
                            :
                            <NavActionsBtn type="button" to="/login">Login</NavActionsBtn>
                        }
                    </NavActions>
                </NavBlock>
            </Container>
        </Navbar>
    );
}

export default Navigation;