import React from 'react'

function Adventure() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/running.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>RUNNING</p>
        </div>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center' , marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/hiking.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>HIKING</p>
        </div>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/camping.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>CAMPING</p>
        </div>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/fishing.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>FISHING</p>
        </div>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/hunting.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>HUNTING</p>
        </div>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/dog.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>DOG WALKING</p>
        </div>
        <div className='' style={{display:'flex', flexDirection:'column', flexWrap:'wrap',justifyContent:'center',alignItems:'center', marginLeft:'50px', marginRight:'50px'}}>
            <div>
                <img src='./foto/cycling.png' height="120px" width="120px"/>
            </div>
            <p style={{fontWeight:'600'}}>CYCLING</p>
        </div>
    </div>
  )
}

export default Adventure