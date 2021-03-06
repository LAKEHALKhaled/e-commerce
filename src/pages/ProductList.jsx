
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
margin:20px;`

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`
const Filter = styled.div`
margin:20px;
${mobile({width:"0 20px", display:"flex", flexDirection: "column"})}
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right:20px;
${mobile({marginRight:"0px"})}
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0"})}
`

const Option = styled.option`
`

 const ProductList = () => {
    return (

        <Container>
            <Navbar/>
           <Announcement/>
           <Title>Magic Bling</Title>
           <FilterContainer>
            <Filter>
            <FilterText>Filter Product:</FilterText>
            <Select>
            <Option disabled selected>
            Product
            </Option>
            <Option>Magic Bling</Option>
            <Option>Star Glow</Option>
            <Option>Combo deals</Option>
            </Select>
            <Select>
            <Option disabled selected>
            Size
            </Option>
            <Option>32oz</Option>
            <Option>16oz</Option>
            <Option>8oz</Option>
            <Option>4oz</Option>
            <Option>2oz</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Product:</FilterText>
            <Select>
            <Option selected>
            Newest
            </Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
            </Select>
            </Filter>
           </FilterContainer>
           <Products/>
           <Newsletter/>
           <Footer/>
        </Container>
    )
}
export default ProductList