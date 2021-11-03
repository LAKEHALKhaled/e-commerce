
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined} from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container =styled.div`
   height: 60px;
   ${mobile({height:"50px"})}
   `
const Wrapper = styled.div`
   padding:10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${mobile({padding:"20px 0;"})}
`
const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items:center;
`
const Language = styled.span`
font-size:14px;
cursor: pointer;
${mobile({ display:"none" })}
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize: "24px"})}
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent:"center"})}
`
const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px", marginLeft: "10px"})}
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo src="data:image/jpeg;base64,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"/></Center>
                <Right>
                    <MenuItem>Email</MenuItem>
                    <MenuItem>Phone</MenuItem>
                    <MenuItem>
                    <Badge badgeContent = {4} color = "primary">
                    <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper> 
        </Container>
    )
}

export default Navbar
