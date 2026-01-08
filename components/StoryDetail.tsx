
import React, { useState } from 'react';
import type { Story } from '../types';

interface StoryDetailProps {
  story: Story;
  onBack: () => void;
  onNext: () => void;
  isLastStory: boolean;
}

const StoryDetail: React.FC<StoryDetailProps> = ({ story, onBack, onNext, isLastStory }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto animate-fade-in">
      <div className="relative mb-8">
        <div className="absolute top-0 left-0">
          <button onClick={onBack} aria-label="Previous Story" className="p-2 rounded-full hover:bg-slate-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
        </div>
        
        {!isLastStory && (
           <div className="absolute top-0 right-0">
            <button onClick={onNext} aria-label="Next Story" className="p-2 rounded-full hover:bg-slate-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        )}

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md bg-yellow-500 border-2 border-white">
              {story.id}
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-slate-200">
              <span className="font-bold text-slate-800 text-lg">A1</span>
            </div>
          </div>
          <div className="inline-block p-3 px-6 rounded-lg border-2 border-yellow-500 bg-yellow-100">
            <h2 className="text-2xl font-bold text-yellow-700" dir="ltr">
              {story.germanTitle}
            </h2>
          </div>
        </div>
      </div>

      <div>
        <div dir="ltr" className="text-left mb-6">
          <p className="text-lg leading-relaxed whitespace-pre-wrap text-slate-800 text-justify">
            {story.germanText}
          </p>
        </div>

        <div className="text-right mb-4">
          <button onClick={toggleTranslation} className="px-4 py-2 rounded-lg text-sm font-bold font-vazir bg-yellow-300 text-yellow-900 hover:bg-yellow-400 transition-colors flex-shrink-0">
            {showTranslation ? 'پنهان کردن ترجمه' : 'ترجمه فارسی'}
          </button>
        </div>

        <div className="mb-6">
          <audio controls src={story.audioSrc} className="w-full rounded-lg">
            Your browser does not support the audio element.
          </audio>
        </div>
        
        {showTranslation && (
          <div dir="rtl" className="text-right mb-6 border-t pt-6 animate-fade-in">
             <p className="text-lg leading-relaxed whitespace-pre-wrap text-slate-700 text-justify font-vazir">
                {story.persianText}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default StoryDetail;
