import React from 'react';
import './Heading.css'

export const Heading = () =>{
    return(
    <nav className="Heading">
        <h2>Kawiarnia</h2>
    <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Galeria</a></li>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Kontakt</a></li>
    </ul>
        <button>Source code on my Github</button>
    </nav>
    )
}
export default Heading

/*
<ul>
<li>Regulamin</li>
<li>Dla firm</li>
<li>Polityka prywatności</li>
<li>Kariera</li>
<li>Kontakt</li>
</ul>*/
