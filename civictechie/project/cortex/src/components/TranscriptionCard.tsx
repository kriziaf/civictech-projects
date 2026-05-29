import { FileText } from 'lucide-react';
import { Transcription } from './Home';

interface TranscriptionCardProps {
  transcription: Transcription;
  onClick: () => void;
}

export function TranscriptionCard({ transcription, onClick }: TranscriptionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 rounded-xl p-4 flex flex-col items-start gap-2 hover:bg-gray-200 transition-colors"
    >
      <FileText className="w-8 h-8 text-gray-700" />
      <div className="text-left">
        <div className="text-xs text-gray-500 mb-1">{transcription.size}</div>
        <div className="text-sm text-gray-900 line-clamp-2">{transcription.title}</div>
      </div>
    </button>
  );
}
