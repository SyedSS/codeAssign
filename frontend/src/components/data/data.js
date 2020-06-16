import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './data.css'
import BarChart from './bar_chart'
import DataQueries from './data_queries'


export const DataContext = React.createContext() 

function Data() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/data/rater_data')
      .then(res => {
        setData(res.data)
      })
  }, [])

  return (
    <div className='data-container'>
      <DataContext.Provider value={data}>
        <BarChart/>
        <DataQueries/>
      </DataContext.Provider>

    </div>
  )
}


export default Data