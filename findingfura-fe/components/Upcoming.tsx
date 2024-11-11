'use client'
import React from 'react';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight, MdArrowForward } from 'react-icons/md';

interface Event {
  title: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
}

const events: Event[] = [
  {
    title: "Event Title",
    description: "This is the event description, a short paragraph could be added here.",
    imageUrl: "/images/event-8.jpg",
    detailsUrl: "/event-details",
    },
    {
    title: "Event Title",
    description: "This is the event description, a short paragraph could be added here.",
    imageUrl: "/images/event-8.jpg",
    detailsUrl: "/event-details",
    },
    {
    title: "Event Title",
    description: "This is the event description, a short paragraph could be added here.",
    imageUrl: "/images/event-8.jpg",
    detailsUrl: "/event-details",
    },
    {
    title: "Event Title",
    description: "This is the event description, a short paragraph could be added here.",
    imageUrl: "/images/event-8.jpg",
    detailsUrl: "/event-details",
    },
    {
    title: "Event Title",
    description: "This is the event description, a short paragraph could be added here.",
    imageUrl: "/images/event-8.jpg",
    detailsUrl: "/event-details",
  },
  // Add more events as needed
];

const Events: React.FC = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider') as HTMLDivElement | null;
    if (slider) {
      slider.scrollLeft -= 300;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider') as HTMLDivElement | null;
    if (slider) {
      slider.scrollLeft += 300;
    }
  };

  return (
    <div className="my-10">
      <div className="relative flex items-center">
        <div onClick={slideLeft} className="cursor-pointer text-[#AA163F]">
          <MdChevronLeft size={30} />
        </div>

         <div id="slider" className="flex overflow-x-scroll scrollbar-hide w-full space-x-9 px-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-[#AA163F] bg-opacity-10 rounded-sm transition-transform duration-300 w-60 min-w-[250px] h-[300px] p-1 group hover:scale-105"
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                
                {/* Image fills the card size */}
                <Image
                  src={event.imageUrl}
                  layout="fill"
                  objectFit="cover" 
                  alt={`Image of ${event.title}`}
                  className="rounded-sm transition-transform duration-300"
                />
                
                {/* Overlay with rotated and blurred arrow on hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 hover:backdrop-blur-sm p-3 rounded-sm flex flex-col justify-between">
                  
                  <div className="absolute top-3 right-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform bg-white rounded-full text-opacity-35 -rotate-45 p-1">
                    <a href={event.detailsUrl}>
                      <MdArrowForward size={24} />
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-bold text-white text-xl">{event.title}</p>
                    <p className="text-white text-sm font-extralight group-hover:pr-10 pt-3 leading-6">{event.description}</p>
                  </div>
                  
                  <button className="bg-[#AA163F] text-white rounded-xl px-5 py-2 self-start">
                    See details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div onClick={slideRight} className="cursor-pointer text-[#AA163F]">
          <MdChevronRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Events;
