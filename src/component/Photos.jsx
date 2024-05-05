// ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
      console.log("data is => ", response.data)
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <img key={image.id} src={image.download_url} loading='lazy' alt={image.author} className="rounded-lg h-64 w-full object-cover" />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrevPage} disabled={page === 1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
          Previous
        </button>
        <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </div>
  );
};

export default Photos;
