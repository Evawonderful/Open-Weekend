import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faThumbtack } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({ event }) => {
    return (
        <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={event.img} alt={event.title} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <ol className="mt-2 flex justify-start gap-2"><li>{event.type}</li> <li>{event.state}</li> <li>{event.price}</li></ol>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Read more</button>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-red-600">
                      <FontAwesomeIcon icon={faHeart} /> {event.likes}
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <FontAwesomeIcon icon={faComment} /> {event.comments}
                    </button>
                    <button className="text-gray-600 hover:text-yellow-600">
                      <FontAwesomeIcon icon={faThumbtack} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default EventCard;

