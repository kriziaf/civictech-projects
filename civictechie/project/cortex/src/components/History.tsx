import { Search, Filter, FileText, Calendar, Clock } from 'lucide-react';
import { Transcription } from './Home';
import { useState } from 'react';
import { TranscriptionDetail } from './TranscriptionDetail';

const allTranscriptions: Transcription[] = [
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
  {
    id: '3',
    title: 'Research Interview #5',
    size: '18 kb',
    date: 'Nov 12, 2025',
    duration: '52:18',
    content: 'Interview with subject discussing their experience with the research study parameters.'
  },
  {
    id: '4',
    title: 'Team Standup',
    size: '8 kb',
    date: 'Nov 11, 2025',
    duration: '23:45',
    content: 'Daily standup meeting covering progress updates and blockers from team members.'
  },
  {
    id: '5',
    title: 'Client Presentation',
    size: '22 kb',
    date: 'Nov 10, 2025',
    duration: '1:34:12',
    content: 'Presentation of research findings to client stakeholders with Q&A session.'
  },
  {
    id: '6',
    title: 'Lab Notes Recording',
    size: '15 kb',
    date: 'Nov 9, 2025',
    duration: '38:56',
    content: 'Voice notes from laboratory observations and experimental procedures.'
  },
];

export function History() {
  const [selectedTranscription, setSelectedTranscription] = useState<Transcription | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTranscriptions = allTranscriptions.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="mb-6">
        <h1 className="text-3xl mb-2">History</h1>
        <p className="text-gray-500">All your transcriptions</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transcriptions"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400"
          />
        </div>
        <button className="bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors">
          <Filter className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Transcriptions List */}
      <div className="space-y-3">
        {filteredTranscriptions.map((transcription) => (
          <button
            key={transcription.id}
            onClick={() => setSelectedTranscription(transcription)}
            className="w-full bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all text-left"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 mb-1 truncate">{transcription.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {transcription.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {transcription.duration}
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                {transcription.size}
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredTranscriptions.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No transcriptions found</p>
        </div>
      )}
    </div>
  );
}
