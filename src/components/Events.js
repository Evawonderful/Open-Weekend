import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../assets/Event1.png';
import event2 from '../assets/Event2.png';
import event3 from '../assets/Event3.png';
import event4 from '../assets/Event4.png';
import event5 from '../assets/Event5.png';
import event6 from '../assets/Event6.png';


const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const events = [
    { id: 1, title: 'Religious Events', img: event1 },
    { id: 2, title: 'Parties', img: event2 },
    { id: 3, title: 'Festivals', img: event3 },
    { id: 4, title: 'Concerts', img: event4 },
    { id: 5, title: 'Workshops and Corporate Events', img: event5 },
    { id: 6, title: 'Sports Events', img: event6 }, 
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore your new city</h2>
        <div className="mb-6 text-center">
          <span className='flex justify-between'>
            <h3 className='text-2xl font-medium'>Events</h3>
            <a href="#" className="text-blue-600 hover:underline">View all</a>
          </span> 
          <p className='text-left'>Check out the events in your city</p> 
        </div>
        <Slider {...settings}>
          {events.map(event => (
            <div key={event.id} className="p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={event.img} alt={event.title} className="w-full h-80 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Events;
