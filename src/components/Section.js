import "./Section.css"
import green_cafe from "../assets/images/green_coffee.jpg";
import dessert from "../assets/images/dessert.png"
import cafe_royal from "../assets/images/cafe_royal.jpg"
import barista from "../assets/images/barista.jpg"

const Section = () => {
    return (
        <div className="Section">
            <div className="img_container">
                <img src={green_cafe} alt="" width="550px" height="400px"/>
                <h2>W naszej kawiarni również serwujemy kawę zieloną Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error fugiat laboriosam possimus sit soluta voluptate.</h2>
            </div>
            <div className="img_container">
                <img src={dessert} alt="image" width="550px" height="400px"/>
                <h2>Desery Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam delectus distinctio impedit iusto placeat qui quos?</h2>
            </div>
            <div className="img_container">
                <img src={cafe_royal} alt="image" width="550px" height="400px" />
                <h2>Satysfakcja Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam delectus distinctio impedit iusto placeat qui quos?</h2>
            </div>
            <div className="img_container" >
                <img src={barista} alt="image" width="550px" height="400px"/>
                <h2>Barista w naszej kawiarni Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam delectus distinctio impedit iusto placeat qui quos?</h2>
            </div>
    </div>);
}
export default Section