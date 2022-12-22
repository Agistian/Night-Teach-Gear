import React ,{useState} from "react";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Adventure from "../components/Adventure";
import '../App.css';
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";
// import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, Sticky, MoveOut, StickyIn, ZoomIn} from "react-scroll-motion";

const Content = styled.div`
	width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-repeat:no-repeat;
`;

const Teks = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-style: 'Poppins';
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    p{
        font-style: 'Poppins';
        justify-content:center;
        font-size: 25px;
        font-weight: 20;
        letter-spacing: 0.03em;
    }
    
`;

const Shape = styled.div`
    // background-color:green;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Button = styled.button`
    background-color:#277BC0;
    width:fit-content;
    height: 40px;
    padding-bottom:5px;
    border-color:transparent;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-style: Poppins;
    font-weight: 600;
    font-size:17px;
    color:white;
    &:hover{
        background-color:#4FB0FF;
    }
    p{
        padding-left:10px;
        padding-right:10px;
        padding-top:5px;
    }
`;

function Home() {
  return (
   
    <div>
        
        <Navbar/>
        
        <Content style={{ backgroundImage:"url('./foto/hero1.png')",marginTop:'90px'}}>
            <div style={{display:'flex', flexDirection:'column',height:'700px', width:'100%', paddingTop:'400px', justifyContent:'left'}}>       
                <div className="col-md-8 offset-1" style={{flexWrap:'wrap'}}>
                    <Teks style={{display:'flex', justifyContent:'left'}}>WHEN NIGHT FALLS, WE RISE!</Teks>
                    <Teks style={{display:'flex', justifyContent:'left'}}>
                        <p>LIGHT ANY ACTIVITY OR ADVENTURE FROM DUSK TIL DAWN.</p>
                    </Teks>
                    <Button>
                        <p>SHOP NOW</p>
                    </Button>
                </div>
            </div>
        </Content>

        <Content style={{marginTop:'50px'}}>
            <div style={{display:'flex', flexDirection:'column',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
                <Teks style={{ color:'black'}}>ADVENTURE MORE</Teks>
                <div className="col-md-8 " style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
                    <Adventure ></Adventure>
                </div>
                
            </div>
        </Content>

        <Content style={{marginTop:'50px'}}>
            <div className="col-md-12" style={{display:'flex', flexDirection:'column',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
                <Teks style={{ color:'black'}}>FAVORITE PRODUCT</Teks>
                <div className="col-md-12" style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop:'0px'}}>
                    <Product ></Product>
                </div>
                
            </div>
        </Content>

        <Content style={{marginTop:'50px',  backgroundImage:"url('./foto/hero2.png')" ,height:'600px'}}></Content>

        <Content style={{marginTop:'50px'}}>
            <div className="col-md-12" style={{display:'flex', flexDirection:'column',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
                <Teks style={{ color:'black'}}>FEATURED IN</Teks>
                <div className="col-md-10 " style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
                    <Feature ></Feature>
                </div>
                
            </div>
        </Content>

        <Content style={{ backgroundImage:"url('./foto/hero3.png')",marginTop:'90px'}}>
            <div style={{display:'flex', flexDirection:'column',height:'700px', width:'100%', paddingTop:'340px', justifyContent:'right' }}>       
                <div className="col-md-8 offset-2" style={{flexWrap:'wrap', justifyContent:'end', alignItems:'end'}}>
                    <Teks style={{display:'flex', justifyContent:'right'}}>HAPPINESS GUARANTEED</Teks>
                    <Teks style={{display:'flex', justifyContent:'right', alignItems:'end'}}>
                        <p style={{fontSize:'20px', textAlign:'right'}}>AT NIGHT TECH GEAR, WE STAND BEHIND OUR PRODUCTS.
IF YOU’RE UNSATISFIED WITH YOUR NIGHT TECH GEAR SHOE LIGHTS FOR ANY REASON SEND US A MESSAGE AND WE’LL MAKE THINGS RIGHT.</p>
                    </Teks>
                    <div style={{display:'flex', justifyContent:'right'}}>
                        <Button >
                            <p>CONTACT US</p>
                        </Button>
                    </div>
                </div>
            </div>
        </Content>

        <Content style={{marginTop:'50px', marginBottom:'50px'}}>
            <div className="col-md-12" style={{display:'flex', flexDirection:'column',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
                <Teks style={{ color:'black'}}>TESTIMONIALS</Teks>
                
                <div className="col-md-12" style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
                    <Testimonial></Testimonial>
                </div>
                
            </div>
        </Content>

        
        <Footer />
    </div>
  )
}

export default Home