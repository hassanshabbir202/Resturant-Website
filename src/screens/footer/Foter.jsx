import React from "react";
import "../footer/Footer.scss"
import footerlogo from "../../assets/logo.png"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from "react-router-dom";

const Foter = () => {
  let data = new Date().getFullYear();
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img src={footerlogo} className="f-logo" alt="" /> 

            {/* <img src="attachment_74455091-e1571114936278-removebg-preview.png" alt="" /> */}
          </span>
        </h3>

        {/* <p className="footer-links"> */}
       <div className="fff-links">
       <Link to="/" className="link-1" style={{textDecoration:"none" , color:"#92999f"}}>
            Home | 
          </Link>
          <Link style={{textDecoration:"none" , color:"#92999f"}} to="/about"> About |</Link>
          <Link style={{textDecoration:"none" , color:"#92999f"}} to="/product"> Product |</Link>
          <Link style={{textDecoration:"none" , color:"#92999f"}} to="/menu"> Menu |</Link>
          <Link style={{textDecoration:"none" , color:"#92999f"}} to="/contact"> Contact</Link>
       </div>
        {/* </p> */}

        <p className="footer-company-name" style={{marginTop:"1vh"}}>Online Resturant © {data}</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span style={{fontSize:'13px'}}>Shah Faisal Colony Karachi, Pakistan </span> <span>Whatsapp : +92 000 0000000</span>
            <span>CELL: 0000-0000000</span>
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a
              href="mailto:support@company.com"
              style={{ color: "#816712" }}
            >
              support@resturant
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span style={{color:"#816712"}}>About the Resturant</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iste. Aut!
        </p>

        <div className="footer-icons" style={{marginTop:"3vh"}}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.tZEjZvtNwRvOrFLlQiOO6gHaHa&pid=Api&P=0"
              style={{ height: "30px", width: "30px", borderRadius: "6px"}}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              style={{ height: "30px", width: "30px", bordeRadius: "50%" }}
              alt=""
            />
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&P=0"
              style={{ height: "30px", width: "30px", bordeRadius: "6px" }}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
