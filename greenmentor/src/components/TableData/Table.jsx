import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettingDataSuccess } from '../../redux/actions';
import './table.css'


export function Tablechart() {
    const data = useSelector((state)=> state.data);
   console.log(data)
     
    
      const getCellStyle = (value) => {
        return value && parseFloat(value) < 0
          ? { content: <span>&#x1F851;</span>, color: 'red' }
          : { content: <span>&#129107;</span>, color: 'green'}};
  return (
    <div id='tablebox'>
    <table>
       <thead>
                    <tr>
                      <th>MONTH</th>
                      <th>EMISSION</th>
                      <th>REVENUE/EMISSION RATIO</th>
                      <th>YOY R/E CHANGE</th>
                    </tr>

       </thead>
              <tbody>
                    {
                      data.filter((data) => data.year == '2023').map((data) => {
                        return <tr>
                          <td>{data.month}</td>
                          <td>{data.emissions}</td>
                          <td>{data.r_e}</td>  
                          <td style={{ color: getCellStyle(data.yoy_r_e_change).color }}>
                            {data.yoy_r_e_change} {getCellStyle(data.yoy_r_e_change).content}
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
            </table>
    </div>
  )
}

export default Tablechart;
