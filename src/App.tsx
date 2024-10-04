import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null); // Track hovered photo index

  const toggleMessage = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  const photos = [
    { src: "Nikos1.png", alt: "birthday memory" },
    { src: "Nikos2.png", alt: "birthday memory" },
    { src: "Nikos3.png", alt: "birthday memory" },
    { src: "Nikos4.jpg", alt: "birthday memory" },
  ];

  return (
    <div className="App">
      <div className="background-decor">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className={`photo ${hoveredPhoto === index ? 'hovered' : ''}`} // Add class based on hover state
            onMouseEnter={() => setHoveredPhoto(index)} // Set hovered index
            onMouseLeave={() => setHoveredPhoto(null)} // Reset hovered index
          />
        ))}
      </div>

      <div className="envelope" onClick={toggleMessage}>
        <div className="flap"></div>
      </div>

      {isMessageVisible && (
        <>
          <div className="overlay" onClick={toggleMessage}></div>
          <div className="messageBox">
            <h2>🎉 Happy Birthday! 🎉</h2>
            <p>To Nikos :DD</p>
            <p></p>
            <p>Exactly one year from now, we celebrated your birthday that night where you were stressed but still made the most out of it.</p>
            <p>That day was one of the days that really made me feel connected to all of you, and I'm very thankful for everything that your light has given me :DD</p>
            <p>By "mean light," I mean all the stuff we've been through, all the hardships, all the stress, and most of all the happiness!</p>
            <p></p>
            <p>We may not always see each other or hang out,</p>
            <p>or even be together to celebrate it now,</p>
            <p>but remember I'll always be here for you, birthday boi :DD</p>
            <p>I am still one call away no matter the distance (medj totoo to kasi hindi naman ako pinapagalitan kung sanan pako pumupunta, paalam mo lang ako kay Pristine HAHAHAHAHA jk maybe idk) but yea :DD</p>
            <p></p>
            <p>Happy birthday, Nikosss! And I hope you're doing amazing! Sorry I can't be with you at the moment, but I'll surely make it up to you next time we meet (treat ko tara labas).</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
