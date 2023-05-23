import Heading from "./Heading";
import './Footer.css'
import fb from "../assets/images/fb.png";
import inst from "../assets/images/insta.png";

const Author = {
    name: 'MC',
    year: 2023
}

const Footer = () => {
    return(
        <div className="Footer">
            <div className="upper">
                <h4>Mail: aa@gmail.com</h4>
                <h4>Telefon: +48 047 047 047</h4>
                <h4>Lokalizacja: ul. Niebieska 10, 07-960 Zamość</h4>
            </div>
            <div className="icons">   <a href="#"><img src={fb} alt="fb" width="50px" height="50px" /></a>
                <a href="#" target="_blank"><img src={inst} alt="inst" width="50px" height="50px" /></a>
            </div>
            <div className="author">  <h4>Created in React ©{Author.year} {Author.name}</h4></div>
        </div>

    );
}

export default Footer