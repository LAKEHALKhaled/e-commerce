import { Facebook, Instagram, MailOutlined, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display:flex;
`

const Left = styled.div`
flex: 1;
display:flex;
flex-direction:column;
padding:20px;
`

const Logo = styled.h1`
`
const Desc = styled.p`
margin:20px 0;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items: center;
justify-content:center;
margin-right:20px;
`


const Center = styled.div`
flex: 1;
padding:20px;
`

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`

const Right = styled.div`
flex: 1;
padding:20px;
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-item:center;
`
const Payment = styled.img`
width:50%;
`
 const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>StarGlow.</Logo>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Totam dolor iusto debitis similique ipsam minus,
                     architecto dolorum odio ut vitae, est velit dignissimos
                      atque magnam provident, delectus iste. Eaque, aspernatur!</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Magic Bling</ListItem>
                    <ListItem>Star Glow</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>102 Drennen Rd c5, Orlando, FL 32806</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+1 787-512-2222</ContactItem>
                <ContactItem><MailOutlined style={{marginRight:"10px"}}/>contact@starglow.com</ContactItem>
                <Payment src="https://beehomecompany.co.uk/wp-content/uploads/2021/07/payments.png"/>
            </Right>
        </Container>
    )
}
export default Footer