import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import place1 from '../assets/place1.png';
import place2 from '../assets/place2.png';
import place3 from '../assets/place3.png';

const Places = () => {
  const places = [
    {
      id: 1,
      title: 'Higher Life Conference 24',
      description: 'A major spirit-filled meeting...',
      img: place1,
      likes: 500,
      comments: 12,
    },
    {
      id: 2,
      title: 'Party Live with DJ Soweto and MC Starling',
      description: 'Experience the ultimate party...',
      img: place2,
      likes: 500,
      comments: 9,
    },
    {
      id: 3,
      title: 'Remo Stars vs Sporting Lagos',
      description: 'Enjoy the match live at City Stadium...',
      img: place3,
      likes: 500,
      comments: 8,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Top places to visit today?</h2>
        <div className="mb-6 text-center">
          <a href="#" className="text-blue-600 hover:underline">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {places.map(place => (
            <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={place.img} alt={place.title} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.title}</h3>
                <p className="mt-2">{place.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Read more</button>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-red-600">
                      <FontAwesomeIcon icon={faHeart} /> {place.likes}
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <FontAwesomeIcon icon={faComment} /> {place.comments}
                    </button>
                    <button className="text-gray-600 hover:text-yellow-600">
                      <FontAwesomeIcon icon={faThumbtack} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
