
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

  const selectedStory = stories.find(story => story.id === selectedStoryId);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <main className="container mx-auto p-4 md:p-6">
        {selectedStory ? (
          <StoryDetail story={selectedStory} onBack={handleBackToList} />
        ) : (
          <StoryList stories={stories} onSelectStory={handleSelectStory} />
        )}
      </main>
    </div>
  );
};

export default App;
