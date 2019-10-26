import React from "react";
import Card from "react-bootstrap/Card";
import { Player } from "../../node_modules/video-react";
import "../../node_modules/video-react/dist/video-react.css";

export default function ImageCard(props) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 20%",
        border: "3px solid black"
      }}
    >
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle style={{ marginBottom: ".75rem" }}>
        {props.copyright}
      </Card.Subtitle>

      {props.mediatype === "image" && (
        <Card.Img
          src={props.url}
          alt={props.title}
          style={{
            objectFit: "scale"
          }}
        />
      )}

      {props.mediatype === "video" && (
        <div className="embed-responsive">
          <iframe
            id="ytplayer"
            type="text/html"
            src={props.url}
            fs='0'
            style={{
              display: 'flex',
              margin: '0 auto',
              width:'800px',
              height:'600px'
            }}
          />
        </div>
      )}

      <Card.Body>
        <Card.Text
          style={{
            padding: "10px",
            border: "1px solid black",
            margin: "5px"
          }}
        >
          {props.explanation}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
