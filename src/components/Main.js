import "./Main.css"
import cafe1 from "../assets/images/cafe.jpg";
import cafe2 from "../assets/images/cafe_type.jpg";
import cafe3 from "../assets/images/cafe3.jpg";

const Main = () =>{
    return(
    <main className="Main"><h1>Kawiarnia wita</h1><p>Lorem ipsum</p><p className="Timeline">Lorem ipsum lorem ipsum</p>

        <div className="slide_container">
            <div className="slide">
                <img src={cafe1} alt="cafe"/>
                <div className="text">Przyjemne i klimatyczne miejsce</div>
            </div>
            <div className="slide">
                <img src={cafe2} alt="cafe"/>
                <div className="text">Najlepsze składniki</div>
            </div>
            <div className="slide">
                <img src={cafe3} alt="cafe"/>
                <div className="text">Promocje</div>
            </div>
        </div>

    </main>
    )
}

export default Main


