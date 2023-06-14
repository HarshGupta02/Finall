import React, { useEffect, useState } from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo.png";
import {MdAccountCircle} from "react-icons/md";
import {MdSearch} from "react-icons/md";
import {MdAddShoppingCart} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { loadUser } from '../../../actions/userAction';
import { clearErrors } from '../../../actions/productAction';
import { useNavigate } from 'react-router-dom';
import { LOAD_USER_RESET } from '../../../constants/userConstants';

const options = {
  burgerColor: "black",
  logo,
  logoWidth: "15vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#ffffff",  
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.7vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  link1Transition : 0,
  link2Transition : 0,
  link3Transition : 0,
  link4Transition : 0,
  link1AnimationTime : 0,
  link2AnimationTime : 0,
  link3AnimationTime : 0,
  link4AnimationTime : 0,
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",

  searchIconUrl: "/search",
  searchIcon:true,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  searchIconTransition: 0,
  SearchIconElement:MdSearch,

  cartIconUrl: "/cart",
  cartIcon:true,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  cartIconTransition: 0,
  CartIconElement:MdAddShoppingCart,

  profileIconUrl: "/login",
  profileIcon:true,
  profileIconColor:"rgba(35, 35, 35,0.8)",
  profileIconTransition: 0,
  ProfileIconElement:MdAccountCircle,

  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
}

const Header = () => {
  return (
    <ReactNavbar {...options}/>
  )
}

export default Header