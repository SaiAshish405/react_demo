import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchImages = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos?offset=${(page - 1) * 2}&limit=100`
      );
      setImages((prevImages) => [...prevImages, ...response.data.photos]);
      if (response.data.photos.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>You've seen it all!</p>}
    >
      <div className="gallery">
        {images.map((image, index) => (
          <LazyLoad key={index} height={200} offset={100} once>
            <img src={image.url} alt={image.title} />
          </LazyLoad>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
