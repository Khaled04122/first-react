import ButtonAppBar from "./navBar";
import newComponant from "./classComponant";
import './Css/home.css'
import { useState } from "react";

export default function Home(props){
    var[category,setCategory]=useState('all')
    var allproduct=[ 
    { name:'product1',price:100,category:'men',dis:'this is aproduct 1'},
    { name:'product1',price:200,category: 'menubar',dis:'this is aproduct 2'},
    { name:'product1',price:300,category: 'menubar',dis:'this is aproduct 3'},
    { name:'product1',price:400,category: 'menubar',dis:'this is aproduct 4'},
    { name:'product1',price:500,category: 'menubar',dis:'this is aproduct 5'},
    ]

    var filterdProducts = category =='all'?allproduct:allproduct.filter(product => product.category === category)
    return(
        <>
        <ButtonAppBar/>
        <div>
            <h1 className="title">welcome to home page{props.name}</h1>
            <select onChange={(e)=>{

                    setCategory(e.target.value)


            


                }}>
<option value={"all"}>all</option>
<option value={"men"}>men</option>
<option value={"menubar"}>menubar</option>

                    </select>

        {filterdProducts.map(product=> (
<div key={product.name}>
<h3>{product.name}</h3>
<p>{product.price}</p>
<p>{product.category}</p>
<p>{product.dis}</p>



</div>



)
)}
</div>

        </>
    )
    

}