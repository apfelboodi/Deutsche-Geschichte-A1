
import React, { useState } from 'react';
import { stories } from './data/stories';
import StoryList from './components/StoryList';
import StoryDetail from './components/StoryDetail';
import type { Story } from './types';

const App: React.FC = () => {
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  const handleSelectStory = (id: number) => {
    setSelectedStoryId(id);
  };

  const handleBackToList = () => {
    setSelectedStoryId(null);
  };

  const handleNextStory = () => {
    if (selectedStoryId === null) return;
    const currentIndex = stories.findIndex(story => story.id === selectedStoryId);
    if (currentIndex < stories.length - 1) {
      const nextStory = stories[currentIndex + 1];
      setSelectedStoryId(nextStory.id);
    }
  };

  const handlePreviousStory = () => {
    if (selectedStoryId === null) return;
    const currentIndex = stories.findIndex(story => story.id === selectedStoryId);
    if (currentIndex > 0) {
      const prevStory = stories[currentIndex - 1];
      setSelectedStoryId(prevStory.id);
    }
  };

  const selectedStory = stories.find(story => story.id === selectedStoryId);
  const isFirstStory = selectedStoryId === stories[0]?.id;
  const isLastStory = selectedStoryId === stories[stories.length - 1]?.id;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <main className="container mx-auto p-4 md:p-6">
        {selectedStory ? (
          <StoryDetail 
            story={selectedStory} 
            onBack={handleBackToList} 
            onPrevious={handlePreviousStory}
            onNext={handleNextStory}
            isFirstStory={isFirstStory}
            isLastStory={isLastStory}
          />
        ) : (
          <StoryList stories={stories} onSelectStory={handleSelectStory} />
        )}
      </main>
    </div>
  );
};

export default App;
