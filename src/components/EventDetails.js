import React from 'react';
import { useParams } from 'react-router-dom';
import event1 from '../assets/Event1.png';
import event2 from '../assets/Event2.png';
import event3 from '../assets/Event3.png';
import event4 from '../assets/Event4.png';
import event5 from '../assets/Event5.png';
import event6 from '../assets/Event6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faThumbtack } from '@fortawesome/free-solid-svg-icons';

const eventDetailsData = [
    { id: 1, title: 'Tech Conference', type: 'conference', state: 'Lagos', price: 'paid', img: event1 , likes: 500, comments: 12,},
    { id: 2, title: 'Religious Event', type: 'religious', state: 'Abuja', price: 'free', img: event2 , likes: 500, comments: 12,},
    { id: 3, title: 'Music Concert', type: 'entertainment', state: 'Kano', price: 'paid', img: event3, likes: 500, comments: 12, },
    { id: 1, title: 'Tech Conference', type: 'conference', state: 'Lagos', price: 'paid', img: event4, likes: 500, comments: 12, },
    { id: 2, title: 'Religious Event', type: 'religious', state: 'Abuja', price: 'free', img: event5, likes: 500, comments: 12,},
    { id: 3, title: 'Music Concert', type: 'entertainment', state: 'Kano', price: 'paid', img: event6, likes: 500, comments: 12, },
    // Add more events
];

const EventDetails = () => {
    const { id } = useParams();
    const event = eventDetailsData.find(event => event.id === parseInt(id));

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={event.img} alt={event.title} className="w-full h-80 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <ol className="mt-2 flex justify-start gap-2"><li>{event.type}</li> <li>{event.state}</li> <li>{event.price}</li></ol>
                <div className="mt-4 flex justify-between items-center">
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
                    <a href={event.bookingLink} className="px-4 py-2 bg-blue-500 text-white rounded">Book Now</a>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;
