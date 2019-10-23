import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import ImageCard from './components/ImageCard'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=jad07zoq0RscmTZa5rSyscaha1LUNUHLm3ztewE0')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      });
  }, []);

  return (
    <div className="App">
          <ImageCard title={data.title}
                     url = {data.url}
                     explanation = {data.explanation}
                     copyright={data.copyright}/>
    </div>
  );
}

export default App;
