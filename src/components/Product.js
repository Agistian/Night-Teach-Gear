import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Button = styled.button`
    background-color:#277BC0;
    width:100%;
    height: 50px;
    padding-bottom:5px;
    border-color:transparent;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    a{
        font-style: Poppins;
        font-weight: 1000;
        font-size:20px;
        color:white;
    }
    &:hover{
        background-color:#4FB0FF;
    }
`;

function Product() {
  return (
    <div className="col-md-12" style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                <div className="col-md-12" style={{marginBottom:'70px', marginTop:'20px', 
                display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                    
                    <div className="col-md-2 " style={{paddingTop:'50px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '15rem'}}>
                            <Card.Img variant="top" src="./foto/product1.png" />
                            <Card.Body  style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Card.Title style={{fontWeight:'600', textAlign:'center'}}>Night Runner 270 Shoe Lights</Card.Title>
                                <Card.Text style={{fontWeight:'450', textAlign:'center'}}>
                                    <img src='./foto/star.png'/>
                                </Card.Text>
                                <Card.Text style={{fontWeight:'600', textAlign:'center', color:'#FFB200', fontSize:'20px'}}>
                                    $59.95 <strike style={{color:'black'}}>$64.90</strike>
                                </Card.Text>
                               
                                <Button>
                                    <a
                                    href="https://wa.me/6285855271398"
                                    target="_blank"
                                    style={{textDecoration:'none'}}
                                    >SHOP NOW
                                    </a>
                                </Button>
                              
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2"  style={{paddingTop:'50px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '15rem'}}>
                            <Card.Img variant="top" src="./foto/product2.png" />
                            <Card.Body style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                            <Card.Title style={{fontWeight:'600', textAlign:'center'}}>Night Trek X Shoe Lights</Card.Title>
                                <Card.Text style={{fontWeight:'450', textAlign:'center'}}>
                                    <img src='./foto/star.png'/>
                                </Card.Text>
                                <Card.Text style={{fontWeight:'700', textAlign:'center', color:'red', fontSize:'20px'}}>
                                    SOLD OUT
                                </Card.Text>
                               
                                <Button>
                                    <a
                                    href="https://wa.me/6285855271398"
                                    target="_blank"
                                    style={{textDecoration:'none'}}
                                    >SHOP NOW
                                    </a>
                                </Button>
                               
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2 "  style={{paddingTop:'50px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '15rem'}}>
                            <Card.Img variant="top" src="./foto/product3.png" />
                            <Card.Body style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                            <Card.Title style={{fontWeight:'600', textAlign:'center'}}>Night Shift Safety Lights</Card.Title>
                                <Card.Text style={{fontWeight:'450', textAlign:'center'}}>
                                    <img src='./foto/star.png'/>
                                </Card.Text>
                                <Card.Text style={{fontWeight:'600', textAlign:'center', color:'#FFB200', fontSize:'20px'}}>
                                    $69.70 <strike style={{color:'black'}}>$84.50</strike>
                                </Card.Text>
                               
                                <Button>
                                    <a
                                    href="https://wa.me/6285855271398"
                                    target="_blank"
                                    style={{textDecoration:'none'}}
                                    >SHOP NOW
                                    </a>
                                </Button>
                                
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-2" style={{paddingTop:'50px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '15rem'}}>
                            <Card.Img variant="top" src="./foto/product4.png" />
                            <Card.Body  style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Card.Title style={{fontWeight:'600', textAlign:'center'}}>Ruck Gear Box</Card.Title>
                                <br/>
                                <Card.Text style={{fontWeight:'450', textAlign:'center'}}>
                                    <img src='./foto/star.png'/>
                                </Card.Text>
                                <Card.Text style={{fontWeight:'600', textAlign:'center', color:'#FFB200', fontSize:'20px'}}>
                                    $40.99 <strike style={{color:'black'}}>$54.45</strike>
                                </Card.Text>
                               
                                <Button>
                                    <a
                                    href="https://wa.me/6285855271398"
                                    target="_blank"
                                    style={{textDecoration:'none'}}
                                    >SHOP NOW
                                    </a>
                                </Button>
                                
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
  )
}

export default Product