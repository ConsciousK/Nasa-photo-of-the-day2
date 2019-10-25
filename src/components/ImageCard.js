import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";


export default function ImageCard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=jad07zoq0RscmTZa5rSyscaha1LUNUHLm3ztewE0&`
      )
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <Card
      style={{
        margin: "0 25%",
        border: "3px solid black"
      }}
    >
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle style={{ marginBottom: ".75rem" }}>
        {data.copyright}
      </Card.Subtitle>
      <Card.Img
        src={data.url}
        alt={data.title}
        style={{
          border: "1px solid black"
        }}
      />
      <Card.Body>
        <Card.Text
          style={{
            padding: "10px",
            border: "1px solid black",
            margin: "5px"
          }}
        >
          {data.explanation}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
