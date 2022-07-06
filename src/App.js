import React from "react"
import { Container, Row, Col } from 'reactstrap'
import Header from "./Header"
import Menu from "./Menu"
import Categories from './Categories'
import Product from "./Product"
import Footer from "./Footer"



export default class App extends React.Component {



    render() {

        return (
            <div>
                <Container>

                    <Row><Header/></Row>
                    <Row><Menu></Menu></Row>

                    <Row>
                        <Categories/>
                       
                    </Row>
                    <Row><Footer/></Row>

                </Container>
            </div>
        )
    }
}








