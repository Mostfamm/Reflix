import React, { Component } from 'react';
import '../styles/about.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            testText: "",
            budget:10
        }
    }
    changeMovieStatus = (id) => {
        this.props.changeMovieStatus(id)
    }
    updateTestText = (event) => {
        this.setState({
            testText: event.target.value
        })
    }
    addBudget=()=>{
        let budget =this.state.budget+3
        this.setState({
            budget: budget
        })

    }
    subBudget=(id)=>{
        
        let budget =this.state.budget-3
        if(budget>0){
            this.changeMovieStatus(id)
        this.setState({
            budget: budget
        })
    }else{
        alert("you cant rent this movie")
    }

    }
    render() {
        return (
            <div id="about">
                <div id="u-input">
                    <input type="text" placeholder="Search" value={this.state.testText} onChange={this.updateTestText} />
                    <p>Budget:{this.state.budget}</p>
                </div>
                <div>
                    {this.props.items.map(i => {
                        if (i.title.toUpperCase().includes(this.state.testText.toUpperCase())) {
                            return <div class='button-container'>
                                {/* <Route exact path="/movies" render={() => <Movie items={i}  />} > <img src={i.img} width={200} height={200} /> </Route> */}
                                <Link to={"/movies/" + i.id}>
                                    <img src={i.img} width={200} height={200} />
                                </Link>
                                {i.isRented ? (
                                    <a className='link' onClick={() => { this.changeMovieStatus(i.id) ,this.addBudget() }} >-</a>
                                ) : (
                                    <a className='link' onClick={() => { this.subBudget(i.id)  }} >+</a>
                                )}


                            </div>
                        }

                    })}
                </div>
                <div>
                    <h5>Rented</h5>
                    {this.props.items.map(i => {
                        if (i.title.toUpperCase().includes(this.state.testText.toUpperCase())) {
                            if (i.isRented) {

                                return <div class='button-container'>

                                    <img src={i.img} width={200} height={200} />
                                    {i.isRented ? (
                                        <a className='link' onClick={() => { this.changeMovieStatus(i.id) ,this.addBudget() }} >-</a>
                                    ) : (
                                        <a className='link' onClick={() => { this.changeMovieStatus(i.id) ,this.subBudget() }} >+</a>
                                    )}


                                </div>


                            }
                        }
                    })}
                </div>


            </div >
        );
    }
}

export default Catalog;

// <div > <img className='my_image'  src={i.img} />
//                             <button className='my_button' onClick={()=>{this.changeMovieStatus(i.id)}}>+</button>
//                         </div>