import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


export const options = {
    responsive: true,
    interaction: {
      mode: 'index',
    },
    stacked: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom', 
        labels: {
          usePointStyle: true, 
          
        },
      },
    },
  };

export const DoughnutChart = () => {
  const allData = useSelector((store) => store.data);
  const [uniqueSuppliers, setUniqueSuppliers] = useState([]);

  useEffect(() => {
    const uniqueSuppliersList = Array.from(new Set(allData.map((data) => data.supplier)));
    setUniqueSuppliers(uniqueSuppliersList);
  }, [allData]);

  
  const getTotalEmissionsBySupplier = (supplier) => {
    return allData
      .filter((data) => data.supplier === supplier)
      .reduce((totalEmissions, data) => totalEmissions + data.emissions, 0);
  };

  const chartData = {
    labels: uniqueSuppliers,
    datasets: [{
      type: 'doughnut',
      
      backgroundColor: ["#544B8D", "#FF5733", "#5CAB7D", "#FFC300", '#FFC400',
      '#3BB85E',
      '#B54F69',
      '#E994B1',
      '#7C95EA',
      '#544B8D',], 
      borderWidth: 1,
      data: uniqueSuppliers.map((supplier) => getTotalEmissionsBySupplier(supplier)),
    }],
  };

  return (
    <div>
      <Doughnut  options={options} data={chartData}/>
    </div>
  );
};
