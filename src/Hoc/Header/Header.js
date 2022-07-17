import React from "react";
import './Header.css'
import { Row, Col } from "react-bootstrap";
//adding components
import Logo from "../../Components/Logo/Logo";
import NavItem from "../../Components/NaviItem/NavItem";
import Search from "../../Components/Search/Search";
import LoginBtn from "../../Components/LoginBtn/LoginBtn";
//adding icons
import home from '../../Assets/Icons/home.svg'
import category from '../../Assets/Icons/category.svg'
import author from '../../Assets/Icons/author.svg'


const Header = () => {
    return (
        <header className="mainBg py-1 header text-white d-flex flex-wrap justify-content-right ">
            <Col md={1} xs={1}  > <Logo logoSize={80  } /></Col>
            <Col md={7} xs={11}  >
                <ul className="nav ">
                    <NavItem  navLink='/' navIcon={home} >صفحه اصلی</NavItem>
                    <NavItem  navLink='/'  navIcon={category}>دسته بندی</NavItem>
                    <NavItem  navLink='/' navIcon={author}>نویسنده شو</NavItem>
                </ul>
            </Col>
            <Col md={4} xs={0} className="d-flex justify-content-end px-4  mt-1 " >
                <Search />
                <LoginBtn />
            </Col>
        </header>
    )
}

export default Header