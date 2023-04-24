import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review'
import { useDispatch,useSelector } from 'react-redux';


function ViewRest() {
   
        const params= useParams()
        // const [allrestaurent,setallrestaurent]= useState([ ])
        //  //function to api call for datas inside json file
        // const getrestaurentdata= async () => {
        
        //  await fetch('/restaurants.json ')
        //   .then(data=>{ data.json().then(result=>{
        //        setallrestaurent(result.restaurants)
        //     })
    
        //   })
        // }
        
        useEffect(()=>{
            // getrestaurentdata()
        },[])
        const result=useSelector(state=>state.restaurentReducer)
        const {restaurantList}=result

        const restData=restaurantList.find(item=>item.id==params.id)
        console.log(restData);
        
       
        return (
         <>
         {restData?(  
         <Row>
            <Col>
             <Image className='p-6 ' src={restData.photograph} fluid/>
            </Col>
            <Col className='mt-5'>
                <h1>{restData.name}</h1>
                <h3>{restData.neighborhood}</h3>
                <h4>cusine type: {restData.cuisine_type}</h4>
                <h4>address: {restData.address}</h4>
               
                
                <Operatingtime timedata={restData.operating_hours}></Operatingtime> <br></br>
                <Review reviewData ={restData.reviews}></Review>
            </Col>
        </Row>
        
        ):'null'}
         </>  
        )

         }


export default ViewRest
