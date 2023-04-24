import React from "react";
import "./EspacoAnime.css";

export default function EspacoAnime({ API }) {
  return (
    <div className="container">
      {API !== undefined ? (
        <div className="anime-list">
          {API.data.map((data, id) => {
            return (
              <div key={id} className="anime-card">
                <p className="anime-title">{data.attributes.slug}</p>
                <img
                  src={data.attributes.posterImage.tiny}
                  alt="imagem"
                  className="poster-image"
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
