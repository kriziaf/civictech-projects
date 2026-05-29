import { ArrowLeft, Share2, Download, MoreVertical, Play, Pause } from 'lucide-react';
import { Transcription } from './Home';
import { useState } from 'react';

interface TranscriptionDetailProps {
  transcription: Transcription;
  onBack: () => void;
}

export function TranscriptionDetail({ transcription, onBack }: TranscriptionDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="px-6 pt-4 pb-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2">
            <Download className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2">
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Title and Info */}
      <div className="mb-6">
        <h1 className="text-2xl mb-2">{transcription.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{transcription.date}</span>
          <span>•</span>
          <span>{transcription.duration}</span>
          <span>•</span>
          <span>{transcription.size}</span>
        </div>
      </div>

      {/* Audio Player */}
      <div className="bg-gray-100 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>
          <div className="flex-1">
            <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-1/3"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>15:23</span>
          <span>{transcription.duration}</span>
        </div>
      </div>

      {/* Transcription Content */}
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-lg mb-3">Transcription</h2>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-gray-700 leading-relaxed">
            {transcription.content}
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The discussion covered multiple key points including budget allocations, 
            resource management, and timeline considerations. Participants raised 
            important questions about methodology and data collection strategies.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Action items were assigned to various team members, with follow-up 
            meetings scheduled for the following week. The team agreed on the next 
            steps and deliverable deadlines.
          </p>
        </div>
      </div>
    </div>
  );
}
