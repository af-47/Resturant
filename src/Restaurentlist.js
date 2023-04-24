import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {RestaurantListAction} from '../src/actions/restuarantAction'
import { useDispatch,useSelector } from 'react-redux';


function Restaurentlist() {
    // const [allrestaurent,setallrestaurent]= useState([ ])
     //function to api call for datas inside json file
    // const getrestaurentdata=async()=>{
    
    //  await fetch('./restaurants.json ')
    //   .then(data=>{ data.json().then(result=>{
    //        setallrestaurent(result.restaurants)
    //     })

    //   })
    //  }
    // console.log(allrestaurent);
    const dispatch= useDispatch()
    const result=useSelector(state=>state.restaurentReducer)
    const {restaurantList}=result
    useEffect(()=>{
        // getrestaurentdata()
        dispatch(RestaurantListAction())
    },[])
     return (
   
    
    <Row>
      {
        restaurantList.map(item=>(
          <RestCard data={item}></RestCard>
        ))
      }
    </Row>
  )
}
 



export default Restaurentlist
