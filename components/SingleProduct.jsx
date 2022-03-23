import { Navbar } from "./Navbar";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProductList = () => {


    // make a request to get the details
    const {productId} = useParams();
    console.log(productId)
    const [data, setData]=useState(null);

    useEffect(()=>{
      axios({
        method:"get",
        url:`https://movie-fake-server.herokuapp.com/products/${productId}`,
      })
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err));
    },[])
    return ( 
      <>
    <Navbar />
    <h2>Single Product Details</h2>
    {data && (
      <>
      <h2>{data.brand}</h2>
      <img src={data.image}/>
      <p>{data.price}</p>
      </>
    )}
    
      </>
      
      );
};



export default SingleProductList;