
import React from 'react';

interface NewsTickerProps {
  news: string;
}

const NewsTicker: React.FC<NewsTickerProps> = ({ news }) => {
  return (
    <div className="bg-brand-secondary text-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-12 flex items-center justify-center">
          <p className="whitespace-nowrap animate-marquee font-semibold">
            {news}
          </p>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: inline-block;
          padding-left: 100%;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
