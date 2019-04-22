import React, { Component } from 'react'

import axios from 'axios'



class ProductForm extends Component{
    state={
        product:{}
    }
    eventHandler=(e)=>{
        let {product} = this.state
        product[e.target.name] = e.target.value

        this.setState({ product })
        console.log(product)
    }
    sendToServer=()=>{
        let {product} = this.state
        let url = "http://localhost:3000/product/create"
        axios.post(url,product, {withCredentials:false})
        .then(user=>{
            // console.log(user)
            this.props.history.push('/all')
        })
        .catch(e=>console.log(e))

    }
    render(){
        // const {product}= this.state
        return(
            <div className="login-container">
            <div className="main-card">
                <input className="signup-input" onChange={this.eventHandler} name="name" type="text" placeholder="Name" />

                <input onChange ={this.eventHandler} name="quantity" type="number" min="0" max="100" />
                <button onClick={this.sendToServer}> Submit </button>
                {/* <p style={{ color: "red" }}>{errors.password}</p> */}
            </div>
            </div>
        )
    }
}

export default ProductForm
