import React, { Component } from 'react'
import axios from 'axios'



class ProductList extends Component{
    state={
        products:[]
    }

    componentDidMount(){
        let url = "http://localhost:3000/product/all"
        axios.get(url,{withCredentials:false})
        .then(p=>{
            // console.log(user)
            this.setState({products:[p.data]})
        
        })
        .catch(e=>console.log(e))
    }

    render(){
        const {products}= this.state
        console.log(products)
        if(products.length === 0) return<div>Loading...</div>
        return(
            <div> 
                <div> 
                      {products.map((product, index)=>{
                        
                return(
                    <div key={index} className="home-available" >
            
                    <p><b>{product.name}</b></p>
                    <p># <b>{product.quantity}</b></p>
            
                </div>
                )   
            })}
            </div>

            </div>
        )
                } 
    
            }

export default ProductList
