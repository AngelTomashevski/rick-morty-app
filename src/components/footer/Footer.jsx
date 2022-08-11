import "./Footer.scss"


const Footer =({info}) =>{
    
    return <div className="footer-container">
        <p>Charachters: {info?.count}</p>
        <p>Pages: {info?.pages}</p>
        <div className="status-alive"> Server status: 
            <p className="dot" ></p>
        </div>
    </div>
}


export default Footer