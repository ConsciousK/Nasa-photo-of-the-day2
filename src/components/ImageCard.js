import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import DateSelector from "./DateSelector";

export default function ImageCard() {

    const [data, setData] = useState({});

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=jad07zoq0RscmTZa5rSyscaha1LUNUHLm3ztewE0&date=2012-03-14`)
        .then(res => {
          console.log(res.data)
          setData(res.data)
        });
    }, []);
  
    return (
        <div>
            <DateSelector />
            <h2>{data.title}</h2>
            <img src={data.url} alt={data.title} />
            <p>{data.explanation}</p>
            <h3>{data.copyright}</h3>
        </div>
    )
}

