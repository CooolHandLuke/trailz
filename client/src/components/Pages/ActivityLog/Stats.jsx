import React, { useState, useEffect } from 'react';

import BarChart from '../../charts/BarChart.jsx';
import CalendarChart from '../../charts/CalendarChart.jsx';
import PieChart from '../../charts/PieChart.jsx';

const Stats = ({ barData, calData }) => {
  return (
    <div>
      <div style={{display: 'flex', marginBottom: '50px'}}>
        <div style={{flex: 1, marginLeft: '8%', marginRight: '10px'}}>
          <BarChart eventData={barData} />
        </div>
        <div style={{flex: 1, marginRight: '8%', marginLeft: '10px'}}>
          <PieChart eventData={barData} />
        </div>
      </div>
    <div>
      <CalendarChart eventData={calData} />
    </div>
  </div>
  )
}

export default Stats;