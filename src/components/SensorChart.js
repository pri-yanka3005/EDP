
import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const SensorChart = ({ fieldNumber, sensorName, apiKey, channelId, color }) => {
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState(null);

  const isAlert = (value) => {
    if (sensorName.includes("Heart") && value > 100) return true;
    if (sensorName.includes("MQ7") && value > 50) return true;
    return false;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.thingspeak.com/channels/${channelId}/fields/${fieldNumber}.json?api_key=${apiKey}&results=20`
        );
        const json = await res.json();
        const formatted = json.feeds
          .map(feed => {
            const raw = feed[`field${fieldNumber}`];
            const parsed = parseFloat(raw);
            return raw && !isNaN(parsed)
              ? {
                  time: new Date(feed.created_at).toLocaleTimeString(),
                  value: parsed,
                }
              : null;
          })
          .filter(Boolean);
        setData(formatted);
        if (formatted.length > 0 && !isNaN(formatted[formatted.length - 1].value)) {
          setCurrentValue(formatted[formatted.length - 1].value);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, [fieldNumber, apiKey, channelId]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "12px",
        margin: "1rem",
        minWidth: "400px",
        flex: 1,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{sensorName}</h3>
      {currentValue !== null && (
        <p style={{
          fontWeight: "bold",
          fontSize: "1.1rem",
          color: isAlert(currentValue) ? "red" : "#333",
          marginBottom: "0.5rem",
        }}>
          Current: {currentValue}
        </p>
      )}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;


