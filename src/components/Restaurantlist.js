import React from 'react'
import { useState,useEffect } from 'react'

function Restaurantlist() {
    const [allrestaurant,setAllrestaurants]=useState([])


  //fuction to api call for datas inside json file
const getrestaurantdata=async()=>{
    await fetch('/restaurants.json')
    .then(data=>{data.json().then(result=>{
       // console.log(result);
       setAllrestaurants(result)
      

    })

})
}

//console.log(allrestaurant);

useEffect(()=>{
    getrestaurantdata()
}, [])

    
    
  
return (


    <div>
    {
       allrestaurant.map(item=>(
        <RestCard/>
      ))
      
     
    }

    </div>
  )
}

export default Restaurantlist