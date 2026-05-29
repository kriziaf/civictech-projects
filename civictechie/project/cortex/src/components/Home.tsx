import { Search, Mic, Upload, Cloud, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Settings } from 'lucide-react';
import profileImg from 'figma:asset/2cc02108435217145e62d325ad92ba4d6fd100a7.png';
import { TranscriptionCard } from './TranscriptionCard';
import { useState } from 'react';
import { TranscriptionDetail } from './TranscriptionDetail';

export interface Transcription {
  id: string;
  title: string;
  size: string;
  date: string;
  duration?: string;
  content?: string;
}

const recentTranscriptions: Transcription[] = [
  {
    id: '1',
    title: 'Meeting Discussions',
    size: '12 kb',
    date: 'Nov 14, 2025',
    duration: '45:23',
    content: 'This is a sample transcription of a meeting discussion. The team discussed project timelines, deliverables, and next steps for the research project.'
  },
  {
    id: '2',
    title: 'Conference Call',
    size: '14 kb',
    date: 'Nov 13, 2025',
    duration: '1:12:45',
    content: 'Conference call transcription with multiple participants discussing research findings and methodology approaches.'
  },
];

export function Home() {
  const [selectedTranscription, setSelectedTranscription] = useState<Transcription | null>(null);

  if (selectedTranscription) {
    return (
      <TranscriptionDetail 
        transcription={selectedTranscription}
        onBack={() => setSelectedTranscription(null)}
      />
    );
  }

  return (
    <div className="px-6 pt-4 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl">Transcribe</h1>
        <div className="flex items-center gap-3">
          <ImageWithFallback 
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <Settings className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 rounded-lg pl-10 pr-10 py-3 text-gray-700 placeholder-gray-400"
        />
        <Mic className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Recent Transcriptions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">Recent Transcriptions</h2>
          <button className="text-blue-600">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {recentTranscriptions.map((transcription) => (
            <TranscriptionCard
              key={transcription.id}
              transcription={transcription}
              onClick={() => setSelectedTranscription(transcription)}
            />
          ))}
        </div>
      </div>

      {/* Create New Transcription */}
      <div>
        <h2 className="text-xl mb-4">Create a New Transcription</h2>
        <div className="space-y-3">
          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors">
            <Cloud className="w-5 h-5" />
            Upload New Document
          </button>
          
          <button className="w-full bg-blue-700 hover:bg-blue-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors">
            <Upload className="w-5 h-5" />
            Add from Drive
          </button>
          
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors">
            <Mic className="w-5 h-5" />
            Start Live Recording
          </button>
        </div>
      </div>
    </div>
  );
}
