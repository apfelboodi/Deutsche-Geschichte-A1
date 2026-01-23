
import React, { useState } from 'react';
import type { Story } from '../types';

interface StoryDetailProps {
  story: Story;
  onBack: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirstStory: boolean;
  isLastStory: boolean;
}

const StoryDetail: React.FC<StoryDetailProps> = ({ story, onBack, onPrevious, onNext, isFirstStory, isLastStory }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="bg-white p-6 md:p-12 rounded-xl shadow-lg max-w-6xl mx-auto animate-fade-in">
      <div className="relative mb-10">
        <div className="absolute top-0 left-0">
          <button onClick={onBack} aria-label="Back to list" className="p-2 rounded-full hover:bg-slate-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
        </div>
        
        <div className="absolute top-0 right-0 flex items-center gap-2">
            {!isFirstStory && (
                <button onClick={onPrevious} aria-label="Previous Story" className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            )}
            {!isLastStory && (
            <button onClick={onNext} aria-label="Next Story" className="p-2 rounded-full hover:bg-slate-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            )}
        </div>

        <div className="text-center pt-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md bg-[#eab308] border-2 border-white">
              {story.id}
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#eab308]">
              <span className="font-bold text-[#a16207] text-xl">A1</span>
            </div>
          </div>
          <div className="inline-block p-3 px-6 md:p-4 md:px-8 rounded-lg border-2 border-[#eab308] bg-[#fef9c3]">
            <h2 className="text-xl md:text-2xl font-bold text-[#a16207]" dir="ltr">
              {story.germanTitle}
            </h2>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div dir="ltr" className="text-left">
          <p className="text-xl leading-relaxed whitespace-pre-wrap text-slate-800 text-justify">
            {story.germanText}
          </p>
        </div>

        <div className="text-right">
          <button onClick={toggleTranslation} className="px-6 py-3 rounded-xl text-base font-bold font-vazir bg-[#eab308] text-white hover:bg-[#ca8a04] transition-colors flex-shrink-0 shadow-md">
            {showTranslation ? 'پنهان کردن ترجمه' : 'ترجمه فارسی'}
          </button>
        </div>

        <div className="w-full">
          <audio controls src={story.audioSrc} className="w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
        
        {showTranslation && (
          <div dir="rtl" className="text-right animate-fade-in">
             <div className="px-6 py-4 md:px-10 md:py-6 bg-[#fefce8] border border-[#eab308] rounded-2xl shadow-sm">
                <p className="text-xl leading-normal whitespace-pre-wrap text-slate-800 text-justify font-vazir">
                    {story.persianText}
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryDetail;
