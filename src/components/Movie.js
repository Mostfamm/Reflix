import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/movie.css'

class Movie extends Component {
    constructor() {
        super()
        this.state = {
        }
    }


    render() {
        return (
            <div>{this.props.items.map(movie => {
                if (movie.id == this.props.match.params.id) {
                    return <div >
                        <h1 className='center'>{movie.title}({movie.year})</h1>
                        <img className='center' src={movie.img} width={400} height={400} />
                        <p>{movie.descrShort}</p>
                    </div>
                }
            })}
            </div>
        );
    }
}

export default Movie;