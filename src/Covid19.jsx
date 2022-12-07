import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Covid19 = () => {


    const[cdata, setCdata] =useState([]);
    const[indData, setInd] =useState([]);

    const CovidData = async () => {
        const getdata = await axios.get("https://disease.sh/v3/covid-19/countries");
       // console.log(getdata.data[0].deaths);
         setCdata(getdata.data);
         setInd(getdata.data[101]);
        // console.log(getdata.data[94]);
    }

    useEffect( ()=>{
        CovidData();
    },[]);

  return (
      
    <>
    <div className='indcontainer'>
         <h1> <span>INDIA</span>  COVID-19 DATA</h1>
         <div className='inddata'>
            <p> <span> Totle Cases </span>   {indData.cases}</p>
            <p> <span> Today Cases </span>  {indData.todayCases}</p>
            <p> <span>Deaths </span>  {indData.deaths}</p>
            <p> <span> Recovered </span>  {indData.recovered}</p>
            <p> <span> Active Cases </span>  {indData.active}</p>
         </div>
    </div>




    <div className='worldcontainer'>
       
       <h1> ALL COUNTRIES COVID-19 DATA </h1>

  <table className='tablecls'>
    <thead className='heading'>
      <tr className='tablerow'>
        <th>Country</th>
         <th>Cases</th>
         <th>Today Cases</th>
         <th>Deaths</th>
         <th>Active</th>
         <th>Recovered</th>
         
      </tr>
    </thead>

    <tbody className='tablebody'>

    { cdata.map( (values) =>{
         const {id,country, cases, todayCases, deaths, active, recovered} = values;
         return(
          <tr key={id}>
            <td>{country}</td>
            <td>{cases}</td>
            <td>{todayCases}</td>
            <td>{deaths}</td>
            <td>{active}</td>
            <td>{recovered}</td>
      </tr>
         );
           } )  }
    
    </tbody>


  </table>

  </div>
      


    </>
  )
}

export default Covid19;
