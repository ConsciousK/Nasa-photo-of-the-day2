import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import DatePicker from "react-datepicker";
import '../node_modules/react-datepicker/dist/react-datepicker.css'

function App() {
  
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = startDate.getFullYear() + "-" + (startDate.getMonth() + 1)+ "-" + startDate.getDate()

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=jad07zoq0RscmTZa5rSyscaha1LUNUHLm3ztewE0&date=${formattedDate}`
      )
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, [formattedDate]);

  return (
    <div className="App">
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
      <ImageCard
        mediatype={data.media_type}
        title={data.title}
        copyright={data.copyright}
        url={data.url}
        explanation={data.explanation}
      />
    </div>
  );
}

export default App;
