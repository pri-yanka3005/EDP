
import React from "react";
import SensorChart from "./components/SensorChart";

const channelId = "2890175";
const apiKey = "RD42ETDDQXFXXNDS"; 

function App() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>📊 IoT Sensor Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <SensorChart
          fieldNumber={1}
          sensorName="❤️ Heart Rate"
          apiKey={apiKey}
          channelId={channelId}
          color="#ff4d4d"
        />
        <SensorChart
          fieldNumber={2}
          sensorName="💧 Humidity"
          apiKey={apiKey}
          channelId={channelId}
          color="#00bfff"
        />
        <SensorChart
          fieldNumber={3}
          sensorName="🌡️ Temperature"
          apiKey={apiKey}
          channelId={channelId}
          color="#ffa500"
        />
        <SensorChart
          fieldNumber={4}
          sensorName="🛢️ MQ7 (Gas Sensor)"
          apiKey={apiKey}
          channelId={channelId}
          color="#8a2be2"
        />
        <SensorChart
          fieldNumber={5}
          sensorName="🧪 MQ135 (Air Quality)"
          apiKey={apiKey}
          channelId={channelId}
          color="#32cd32"
        />
      </div>
    </div>
  );
}

export default App;


