
import React from 'react';
import type { Story } from '../types';

interface StoryListProps {
  stories: Story[];
  onSelectStory: (id: number) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onSelectStory }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8 gap-4">
        <a href="https://apfel.ir/geschichten" aria-label="Back" className="p-2 rounded-full hover:bg-slate-200 transition-colors" target="_top" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
        </a>
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-slate-200">
          <span className="font-bold text-slate-800 text-2xl">A1</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => onSelectStory(story.id)}
            className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl border-2 border-transparent transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center text-center relative pt-8 hover:border-yellow-500"
          >
            <div className="absolute top-[-1rem] left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md bg-yellow-500 border-2 border-white">
              {story.id}
            </div>
            <p className="font-semibold text-slate-800" dir="ltr">
              {story.germanTitle}
            </p>
            <p className="font-vazir text-slate-600 mt-1" dir="rtl">
              {story.persianTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryList;
