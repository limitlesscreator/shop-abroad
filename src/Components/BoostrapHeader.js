import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from "react-router-dom";
import s from "./BoostrapHeader.module.sass";
import logo from "../img/logo.svg";
import React from "react";

export function BoostrapHeader({changeUrl}) {

    const closeWindow = () => {
        const close = document.querySelector('.btn-close')
           console.log(close)
            close.click()
    }
    return (
        <>
                <Navbar fixed="top" collapseOnSelect  key='expand' bg="dark"  expand='expand' variant="dark" className="mb-3">
                    <Container  fluid>
                        <Navbar.Brand style={{width: '220px'}}  href="#">
                            <Link to={'/'} className={s.logo}><img className={s.logo} src={logo} alt="logo"/></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand`}
                            aria-labelledby={`offcanvasNavbarLabel-expand`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav  className="justify-content-end flex-grow-1 pe-3">
                                    <div className={s.nav}>
                                        <ul>
                                            <div onClick={() => {changeUrl('/howitworks'); closeWindow()}}>Как это работает</div>
                                            <div onClick={() => {changeUrl('/follow');closeWindow()}}>Отследить посылку</div>
                                            <div onClick={() => {changeUrl('/list');closeWindow()}}>Список магазинов</div>
                                            <div onClick={() => {changeUrl('/contact');closeWindow()}}>Связаться</div>
                                            <div onClick={() => {changeUrl('/information');closeWindow()}}>Информация</div>
                                            <div onClick={() => {changeUrl('/vat');closeWindow()}}>VAT</div>
                                        </ul>
                                    </div>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
    );
}

