import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeAds = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/mainads/Home Ads`)
      .then((response) => {
        response.data.sort(
          (a, b) => new Date(b.dateField) - new Date(a.dateField)
        );

        const latestAds = response.data.slice(0, 5);

        setAds(latestAds);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error fetching ads: {error.message}</div>;
  }

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        height: "fit-content",
        listStyleType: "none", // Remove list dots
        padding: 0, // Remove default padding
      }}
    >
      {ads.map((ad) => (
        <li
          key={ad.id}
          className="ad-item"
          style={{
            width: "269px",
            height: "269px",
          }}
        >
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.image}
              alt={ad.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HomeAds;
