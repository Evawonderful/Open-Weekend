import React, { useState } from 'react';
import EventCard from './EventCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import event1 from '../assets/Event1.png';
import event2 from '../assets/Event2.png';
import event3 from '../assets/Event3.png';
import event4 from '../assets/Event4.png';
import event5 from '../assets/Event5.png';
import event6 from '../assets/Event6.png';

const eventsData = [
    // Example data, replace with your actual data
    { id: 1, title: 'Tech Conference', type: 'conference', state: 'Lagos', price: 'paid', img: event1 , likes: 500, comments: 12,},
    { id: 2, title: 'Religious Event', type: 'religious', state: 'Abuja', price: 'free', img: event2 , likes: 500, comments: 12,},
    { id: 3, title: 'Music Concert', type: 'entertainment', state: 'Kano', price: 'paid', img: event3, likes: 500, comments: 12, },
    { id: 1, title: 'Tech Conference', type: 'conference', state: 'Lagos', price: 'paid', img: event4, likes: 500, comments: 12, },
    { id: 2, title: 'Religious Event', type: 'religious', state: 'Abuja', price: 'free', img: event5, likes: 500, comments: 12,},
    { id: 3, title: 'Music Concert', type: 'entertainment', state: 'Kano', price: 'paid', img: event6, likes: 500, comments: 12, },
    // Add more events
];

const EventsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ state: '', type: '', price: '' });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };

    const filteredEvents = eventsData.filter(event => {
        return (
            (filter.state === '' || event.state === filter.state) &&
            (filter.type === '' || event.type === filter.type) &&
            (filter.price === '' || event.price === filter.price) &&
            (event.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <>
        <Header/>
            <div className="container p-10">
                <h1 className="text-3xl mb-4">Events in Nigeria</h1>
                <div className="flex mb-4">
                    <div className="relative mr-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 border border-gray-300 rounded"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <FontAwesomeIcon icon={faSearch} className="absolute right-2 top-2 text-gray-500" />
                    </div>
                    <select
                        name="state"
                        value={filter.state}
                        onChange={handleFilterChange}
                        className="p-2 border border-gray-300 rounded mr-2"
                    >
                        <option value="">All States</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Kano">Kano</option>
                        {/* Add more states */}
                    </select>
                    <select
                        name="type"
                        value={filter.type}
                        onChange={handleFilterChange}
                        className="p-2 border border-gray-300 rounded mr-2"
                    >
                        <option value="">All Types</option>
                        <option value="conference">Conference</option>
                        <option value="religious">Religious</option>
                        <option value="entertainment">Entertainment</option>
                        {/* Add more types */}
                    </select>
                    <select
                        name="price"
                        value={filter.price}
                        onChange={handleFilterChange}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Prices</option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default EventsPage;
