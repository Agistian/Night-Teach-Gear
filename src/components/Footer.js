import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faYoutube } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Content = styled.div`
	width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color:#277BC0;
    position:absolute;
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
      font-size:15px;
      &:hover{
        background-color:#FFD87F;
      }
`;

function Footer() {
    const navigate = useNavigate()
  return (
    <Content>
        <div className="col-md-12" style={{display:'flex',  alignItems:'center', flexDirection:'column'}}>
            <div className="col-md-11" style={{color:'white', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                {/* left */}
                <div className="" style={{display:'flex', flexDirection:'column'}}>
                    {/* logo */}
                    <div className="" style={{display:'flex', alignItems:'left',marginTop:'10px'}}>
                        <img src="./logo/LOGO.png" alt="" />
                    </div>

                    {/* lokasi */}
                    <div style={{display:'flex', marginTop:'5px'}}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{paddingTop:'5px', marginRight:'5px'}}/>
                        <p>1623 Wycliff Drive, Orlando, FL, 32803 US</p>
                    </div>

                    {/* menu */}
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <div style={{display:'flex', flexDirection:'column', marginRight:'10px'}}>
                            <h5>Shop</h5>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <p>Shoes</p>
                                <p>Lights</p>
                            </div>
                        </div>

                        <div style={{display:'flex', flexDirection:'column', marginRight:'10px'}}>
                            <h5>Information</h5>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <p>Story</p>
                                <p>Guide</p>
                                <p>Contact</p>
                            </div>
                        </div>

                        <div style={{display:'flex', flexDirection:'column', marginRight:'10px'}}>
                            <h5>Blog</h5>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <p>Tips & Tricks</p>
                                <p>News</p>
                            </div>
                        </div>

                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h5>Reviews</h5>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <p>All Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="" height="fit-content" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className="" style={{display:'flex', width:'100%',justifyContent:'space-between'}}>
                        <img src="./icon/youtube.png" height="30px" width="46px"/>
                        <img src="./icon/twitter.png" height="36px" width="44px"/>
                        <img src="./icon/facebook.png" height="42px" width="27px"/>
                        <img src="./icon/pinterest.png" height="42px" width="42px"/>
                        <img src="./icon/ig.png" height="42px" width="42px"/>
                    </div>
                    <hr style={{width:'100%', backgroundColor:'white'}}/>
                    <div>
                        <p style={{fontStyle:'Poppins'}}>Sign up to get the latest, new releases, and more...</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <Form.Group controlId="formFile" className="mb-3" style={{paddingTop:'5px'}}>
                            <Form.Control type="text" placeholder='Email Address' style={{width:'300px',fontStyle:'Poppins', fontWeight:'600', fontSize:'15px'}}/>
                        </Form.Group>
                        <Button style={{width:'70px', marginLeft:'10px', color:'white'}} onClick={()=> navigate("/register")}>
                           SIGN UP
                        </Button>
                    </div>
                </div>
            </div>
            <hr style={{width:'100%'}}/>
            <div className="col-md-11" style={{display:'flex', textAlign:'left', marginBottom:'20px',  color:'white', fontStyle:'Poppins'}}>
                <p>&copy;<b>2022</b> Night Tech Gear</p>
            </div>
        </div>
    </Content>
  )
}

export default Footer