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
    <div className="col-md-10" style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                <div className="col-md-10" style={{marginBottom:'70px', 
                display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
                    <div className="col-md-3 " style={{paddingTop:'20px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '23rem', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className='' style={{display:'flex',justifyContent:'space-between', paddingTop:'10px'}}>
                            <div className='' style={{display:'flex', paddingLeft:'5px'}}>
                                <div className='Lingkaran' style={{backgroundColor:'#FF5C00', borderRadius:'30px 30px 30px 30px', width:'30px', height:'30px', textAlign:'center', color:'white', marginRight:'5px'}}>CP</div>
                                <div className='' style={{fontSize:'20px', fontStyle:'Poppins',fontWeight:'400'}}>Caroline Pristine</div>
                            </div>
                            <div className='' style={{display:'flex',justifyContent:'space-between', alignSelf:'end'}}><img src='./foto/star2.png'/></div>
                        </div>
                        <hr></hr>
                            <Card.Body  style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Card.Text style={{fontWeight:'400', textAlign:'center', fontSize:'20px', textAlign:'left'}}>
                                It’s very comfy in my feet. I’m much happier in my hiking.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3 " style={{paddingTop:'20px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '23rem', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className='' style={{display:'flex',justifyContent:'space-between', paddingTop:'10px'}}>
                            <div className='' style={{display:'flex', paddingLeft:'5px'}}>
                                <div className='Lingkaran' style={{backgroundColor:'#277BC0', borderRadius:'30px 30px 30px 30px', width:'30px', height:'30px', textAlign:'center', color:'white', marginRight:'5px'}}>JS</div>
                                <div className='' style={{fontSize:'20px', fontStyle:'Poppins',fontWeight:'400'}}>Jordi Stanford</div>
                            </div>
                            <div className='' style={{display:'flex',justifyContent:'space-between', alignSelf:'end'}}><img src='./foto/star2.png'/></div>
                        </div>
                        <hr></hr>
                            <Card.Body  style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Card.Text style={{fontWeight:'400', textAlign:'center', fontSize:'20px', textAlign:'left'}}>
                                Very comfy in hiking tracks. Recomended!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3 " style={{paddingTop:'20px', marginLeft:'10px', marginRight:'10px'}}>
                        <Card style={{ width: '23rem', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className='' style={{display:'flex',justifyContent:'space-between' , paddingTop:'10px'}}>
                            <div className='' style={{display:'flex', paddingLeft:'5px'}}>
                                <div className='Lingkaran' style={{backgroundColor:'#FAFF00', borderRadius:'30px 30px 30px 30px', width:'30px', height:'30px', textAlign:'center', color:'black', marginRight:'5px'}}>DP</div>
                                <div className='' style={{fontSize:'20px', fontStyle:'Poppins',fontWeight:'400'}}>David Prosfche</div>
                            </div>
                            <div className='' style={{display:'flex',justifyContent:'space-between', alignSelf:'end'}}><img src='./foto/star2.png'/></div>
                        </div>
                        <hr></hr>
                            <Card.Body  style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Card.Text style={{fontWeight:'400', textAlign:'center', fontSize:'20px', textAlign:'left'}}>
                                The lights is really helpful in the dark road. Price also still affordable for me.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
  )
}

export default Product