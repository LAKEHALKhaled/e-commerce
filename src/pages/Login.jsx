
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
width :100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://scontent-atl3-2.xx.fbcdn.net/v/t1.18169-9/1560581_1471132703166754_3486990106646306268_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Cv1SS-6aUHoAX9vz4HJ&_nc_oc=AQnw8WvgtDs8Ac5DDhfLdDpIXyOT1jKC29nwHtf5aHaPPFNjXuWoyx39eOb7NBXBhZBsJuo33y0PiAmskmKd4a1_&_nc_ht=scontent-atl3-2.xx&oh=52672d98fc5854b61da15b4464ecdde2&oe=61A68A81") center;
background-size: cover;
display: flex;
align-items: center;
justify-content:center;
`

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display:flex;
flex-direction: column;
`



const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0;
padding: 10px;`


const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`
const Link = styled.a`
margin: 10px 0px;
font-size:12px;
text-decoration: underline;
cursor: pointer;
`

 const Login = () => {
    return (
        <Container>
            <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                <Button>LOGIN</Button>
                <Link>FORGET PASSWORD </Link>
                <Link>CREATE NEW ACCOUNT </Link>
                </Form>
            </Wrapper>
        </Container>
        </Container>
    )
}

export default Login