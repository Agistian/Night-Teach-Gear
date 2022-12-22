import {React, useState, useEffect, useLocation} from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import '../App.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/** Untuk menu navigasi **/
const Menus = styled.nav`
    color:white;
    padding-left:30px;
    font-weight: 600;
    font-style: Poppins;
    div{
      a{
        font-size:20px;
        cursor: pointer;
        text-decoration:none;
        color:black;
        border-bottom: 2px solid transparant;
        font-style: Poppins;
      }
      &:hover a{
        font-style: Poppins;
        color:#277BC0;
        font-weight: 900;
        border-bottom: 2px solid;
        border-bottom-color: #277BC0;
       
      }
    }
    div.active{
      a{
        border-bottom: 3px solid #277BC0;
        transition: border-bottom .5s ease-in-out;
        color:#277BC0;
        font-weight: 900;
        border-bottom: 2px solid #277BC0;
      }
    }
    &:hover .menu{
        font-style: Poppins;
        color:#A63D44;
        font-weight: 900;
        border-bottom-color: #277BC0;
      }
`;

/** Button (login register) **/
const Button2 = styled.button`   
      height: 40px;
      border:none;
      font-style: Poppins;
      font-weight: 600;
      font-size:20px;
      color:white;
   
`;

const Badge = styled.span`
    position: absolute;
    right:-6px;
    top:10px;
    background:#FFB200;
    text-align: center;
    border-radius: 60px 60px 60px 60px;
    color:white;
    padding:5px 10px;
    font-size:7px;
`;

const Button = styled.button`
      background-color:#FFB200;
      width: 150px;
      height: 40px;
      padding-bottom:5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      border:none;
      font-style: Poppins;
      font-weight: 600;
      font-size:20px;
      &:hover{
        background-color:#FFD87F;
      }
`;

const NavWrap = styled.nav`
    position:fixed;
    top: 0;
    z-index: 1020;
    width:100%;
    height:100%;
`;

function CustomLink({href, children, ...props}){
  const path = window.location.pathname

  return(
    <li class="nav-item ">
        <Menus>
          <div className={path === href ? "active" : ""}><a href={href} {...props}>{children}</a></div>
        </Menus>
    </li>
                                
    
  )
}

const Navbar = () => {
    
    const navigate = useNavigate()
    let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


    return (
       
      <nav className="navbar navbar-expand-lg "  style={{backgroundColor:'white',position:'fixed', top:'0', width:'100%', zIndex:'1', borderBottom:'1px solid black'}}>
        <div class="container-fluid" width="100%">
              <a class="navbar-brand col-lg-2 " href="#"><img src="../logo/LOGO.png" alt="Logo" onClick={()=> navigate("/")} height="60" class="d-inline-block align-text-top" style={{paddingLeft:'50px'}} /></a>
              <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                  <div className='col-md-5 ' style={{display:'flex'}} >
                      <ul class="navbar-nav ml-lg-10 mb-2 mb-lg-0" >
                          <CustomLink href="/">Shop</CustomLink>
                          <CustomLink href="/learn-color">Information</CustomLink>
                          <CustomLink href="/consultant">Blog/News</CustomLink>
                          <CustomLink href="/about-us">Reviews</CustomLink>
                      </ul>
                  </div>
                  <div className='col-md-4 ' style={{display:'flex',justifyContent:'end', alignItems:'end', paddingRight:'20px', marginLeft:'20px'}} >
                    <div className='' style={{display:'flex', paddingTop:'20px'}}>
                            <Form.Group controlId="formFile" className="mb-3" style={{paddingTop:'5px'}}>
                                <Form.Control type="text" placeholder='Search Product' style={{width:'300px',fontStyle:'Poppins', fontWeight:'600', fontSize:'15px'}}/>
                            </Form.Group>
                            <Button style={{width:'50px', marginLeft:'10px'}} onClick={()=> navigate("/register")}>
                              <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </Button>
                    </div>
                  </div>
                  <div className='col-md-2 '>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                            <div style={{display:'flex'}}>
                              <Button2 style={{backgroundColor:'transparent'}} onClick={()=> navigate("/login")}>
                                <img src='./icon/profil.png'></img>
                              </Button2>
                            </div>
                            <div style={{display:'inline-block', position:'relative', paddingTop:'10px', marginLeft:'15px', marginRight:'15px'}}>
                              <Button2 style={{backgroundColor:'transparent'}} onClick={()=> navigate("/login")}>
                                <img src='./icon/lonceng.png'></img>
                                <Badge>1</Badge>
                              </Button2>
                            </div>
                            <div style={{display:'flex', paddingTop:'10px'}}>
                              <Button2 style={{backgroundColor:'transparent', display:'flex', paddingTop:'13px'}} onClick={()=> navigate("/login")}>
                                <img src='./icon/keranjang.png'></img>
                              </Button2>
                              <h5 style={{color:'black', paddingTop:'10px'}}>0</h5>
                            </div>
                            
                    </div>
                  </div>
              </div>
            
        </div>
      </nav>
     
        
  )
}

export default Navbar