import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function NoneFile() {
  const [days, setDays] = useState(0);
  const [hourds, setHourds] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const deadline = "july,6,2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHourds(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return ()=>  clearInterval(interval);
  }, []);
  return (
    <>
      <Row>
        <Col xs={3}>
          <h1>Days</h1>
          <h3>{days < 10 ? "0" + days : days}</h3>
        </Col>
        <Col xs={3}>
          <h1>Hours</h1>
          <h3>{hourds < 10 ? "0" + hourds : hourds}</h3>
        </Col>
        <Col xs={3}>
          <h1>mins</h1>
          <h3>{mins < 10 ? "0" + mins : mins}</h3>
        </Col>
        <Col xs={3}>
          <h1>secs</h1>
          <h3>{secs < 10 ? "0" + secs : secs}</h3>
        </Col>
      </Row>
    </>
  );
}

export default NoneFile;
