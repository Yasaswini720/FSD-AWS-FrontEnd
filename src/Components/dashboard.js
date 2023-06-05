import React from 'react';
import './dashboard.css';    


const ImageDashboard = () => {
    const images = [
        {
          id: 1,
          src: 'https://dol7e6xw7wdui.cloudfront.net/img.jpg',
          title: 'Image 1',
        },
        {
          id: 2,
          src: 'https://dol7e6xw7wdui.cloudfront.net/img2.jpg',
          title: 'Image 2',
        },
        {
          id: 3,
          src: 'https://dol7e6xw7wdui.cloudfront.net/img3.jpg',
          title: 'Image 3',
        },
      ];

//   const images = [
//     'https://dol7e6xw7wdui.cloudfront.net/img.jpg',
//     'https://dol7e6xw7wdui.cloudfront.net/img2.jpg',
//     'https://dol7e6xw7wdui.cloudfront.net/img3.jpg'
//     // Add more image URLs as needed
//   ];

  return (
    <div className="dashboard">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.src} alt={image.title} className="image" />
          <h3 className="image-title">{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageDashboard;
