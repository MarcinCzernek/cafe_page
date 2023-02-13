import "./Section.css"
import green_cafe from "../assets/images/green_coffee.jpg";
import dessert from "../assets/images/dessert.png"
import cafe_royal from "../assets/images/cafe_royal.jpg"
import barista from "../assets/images/barista.jpg"

const Section = () => {
    return (
        <div className="Section">
            <div className="img_container">
                <img src={green_cafe} alt=""/>
                <h2>W naszej kawiarni również serwujemy kawę zieloną Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error fugiat laboriosam possimus sit soluta voluptate. Aliquam cumque deserunt distinctio enim exercitationem ipsam minima necessitatibus, non repellendus similique, soluta vitae!</h2>
            </div>
            <div className="img_container">
                <img src={dessert} alt="image"/>
                <h2>Desery Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam delectus distinctio impedit iusto placeat qui quos? A amet assumenda consectetur consequatur illum iste reprehenderit. Inventore magni modi quaerat voluptates.</h2>
            </div>
            <div className="img_container">
                <img src={cafe_royal} alt="image"/>
                <h2>Satysfakcja Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam delectus distinctio impedit iusto placeat qui quos? A amet assumenda consectetur consequatur illum iste reprehenderit. Inventore magni modi quaerat voluptates.</h2>
            </div>
            <div className="img_container">
                <img src={barista} alt="image"/>
                <h2>Nasi baryścic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam delectus distinctio impedit iusto placeat qui quos? A amet assumenda consectetur consequatur illum iste reprehenderit. Inventore magni modi quaerat voluptates.</h2>
            </div>
    </div>);
}
export default Section