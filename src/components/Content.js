import './Content.css'
import cafe_icon from "../assets/images/cafe_icon.png";
import map from "../assets/images/map.jpg";




const Contentment = () => {
    return (
        <div className="Content">
            <div className="Content_icons">
            <div className="lining"><img src={cafe_icon} alt="icon"/> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi libero molestiae, necessitatibus nobis pariatur quidem tempore vero? Accusantium asperiores enim excepturi illo ipsum, labore molestiae placeat velit veritatis voluptatem!</p> </div>
            <div className="lining"><img src={cafe_icon} alt="icon"/> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore fuga ipsum sit unde. Animi dolorum eligendi, eum tempore vel vitae! At illo ipsam itaque, libero neque perspiciatis quaerat voluptatum.</p> </div>
            <div className="lining"><img src={cafe_icon} alt="icon"/> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur, cum debitis distinctio dolorum eius est magni nihil placeat provident quae quam quis reiciendis similique vel? Accusamus nihil optio porro.</p></div>
            </div>
            <div className="Content_map">
                <h2>Tutaj jesteśmy:</h2>
                <img src={map} alt="map"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus deleniti distinctio dolor esse et, excepturi fugit incidunt molestias odio officiis quae quas quis repellat sapiente, sequi tenetur vero voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aspernatur consequatur cum doloremque eaque, enim expedita fugit, impedit modi nisi odio, officia provident quaerat quam repellat repellendus totam ut!</p>
            </div>
        </div>
    );
}

export default Contentment