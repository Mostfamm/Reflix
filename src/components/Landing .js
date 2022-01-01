import React, { Component } from 'react';
import Catalog from './Catalog'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/home.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { id: 1, name: "Mostfa" },
                { id: 2, name: "Ahmad" },
                { id: 3, name: "Omar" },
            ]
        }
    }

    
    render() {
        return (

            <div>
                <h1 id="home-title">Hho's Watching?</h1>

                <div>
                    {this.state.users.map(c =><Link className='button'  to="/catalog"  > <span className="main-directory-text ">{c.name}</span></Link>)}
                </div>
            </div>

        );
    }
}

export default Landing;


// render() {
//     return (
//         <div>
//           <h1 id="fentities-title">{/*Get from `match`*/}</h1>
//             <div id="fentities-container">
//               {fentities.map(f => {
//                     return (
//                         <div className="mini">
//                           <img className="directory-img" src={f.imgUrl} alt="" />
//                           <span>{f.name}</span>
//                         </div>
//                     )
//                 })}
//             </div>
//           </div>
//     )
// }
