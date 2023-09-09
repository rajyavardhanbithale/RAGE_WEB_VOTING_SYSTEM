import React, { Component, useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import Cookies from 'universal-cookie';

const pieOptions = {
    title: 'Election Results',
    pieHole: 0.4,
  };
  
  class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pieData: null,
        idFromUrl: null, // Initialize the idFromUrl state
      };
    }
  
    componentDidMount() {
      // Parse the URL to get the "id" parameter
      const searchParams = new URLSearchParams(window.location.search);
      const idFromUrl = searchParams.get('id');
  
      // Set the "id" from the URL in the component's state
      this.setState({ idFromUrl });
      console.log(idFromUrl)
  
      // Make an HTTP GET request to fetch election data from your FastAPI backend
      axios
        .get(`http://127.0.0.1:8000/getelecions/${idFromUrl}`) // Replace with the correct API endpoint
        .then((response) => {
          const { candis, totalvotes } = response.data;
  
          // Create the data structure
          const pieData = [['Name', 'Votes']];
          for (let i = 0; i < candis.length; i++) {
            pieData.push([candis[i], totalvotes[i]]);
          }
  
          // Set the data in the component's state
          this.setState({ pieData });
        })
        .catch((error) => {
          console.error('Error fetching election data:', error);
        });
    }
  render() {
    const { pieData } = this.state;


 
    return (
      <>
      <br /><br />
      <br />
        <div className='w-full flex justify-center p-5 text-3xl bg-blue-600 text-white font-bold '>
          Election result
        </div>
        <div>
          {pieData && (
            <div className='w-full flex justify-center item center  '>
              {/* Render candidate information here */}
              {pieData.map((candidateData, index) => (
                <div
                  key={index}
                  className='w-full m-5 h-24 bg-blue-600 text-white flex justify-center flex-col item center text-center rounded-md text-2xl hover:shadow-gray-500 shadow-5'
                >
                  <span>{candidateData[0]}</span>
                  <span>{candidateData[1] }</span>
                  
                </div>
              ))}
            </div>
          )}

          {pieData && (
            <div className='w-full flex justify-center flex-col items-center h-fit '>
              <div className='font-bold text-3xl mt-10'>Pie Chart of election result</div>
              <div className='h-72 w-1/3 mt-10 '>
                <Chart
                  width={'700px'}
                  height={'400px'}
                  chartType='PieChart'
                  loader={<div className='text-center w-full'>Loading...</div>}
                  data={pieData}
                  options={pieOptions}
                  rootProps={{ 'data-testid': '3' }}
                />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Dashboard;
