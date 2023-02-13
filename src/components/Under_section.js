import './Under_section.css';

const Under_section = () =>{
    return(
        <div className="Under_section">
            <p>Godziny otwarcia i zamknięcia kawiarni:</p>
            <table>
                <tr><span>Poniedziałek</span>   08:00 - 21:00</tr>
                <tr><span>Wtorek</span>   08:00 - 21:00</tr>
                <tr><span>Środa</span>   08:00 - 21:00</tr>
                <tr><span>Czwartek</span>   08:00 - 21:00</tr>
                <tr><span>Piątek</span>   08:00 - 21:00</tr>
                <tr><span>Sobota</span>   08:00 - 21:00</tr>
                <tr><span>Niedziela</span>   08:00 - 21:00</tr>
            </table>
        </div>
    )
}
export default Under_section;