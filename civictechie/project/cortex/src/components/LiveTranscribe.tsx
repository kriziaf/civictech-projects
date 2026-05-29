import { Mic, Square, Pause, X, Trash2, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function LiveTranscribe() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    if (isRecording && !isPaused) {
      interval = window.setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording, isPaused]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      setIsPaused(false);
      setDuration(0);
      setTitle('');
    } else {
      // Start recording
      setIsRecording(true);
    }
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleClose = () => {
    setIsRecording(false);
    setIsPaused(false);
    setDuration(0);
    setTitle('');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {!isRecording ? (
        /* Pre-recording State */
        <div className="px-6 pt-4 pb-6 h-full flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl mb-2">Live Transcribe</h1>
            <p className="text-gray-500">Record and transcribe in real-time</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center">
              <button
                onClick={handleStartStop}
                className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Mic className="w-12 h-12 text-white" />
              </button>
              <p className="text-gray-600">Tap to start recording</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mt-auto">
            <h3 className="text-sm mb-2 text-blue-900">Tips for better transcription:</h3>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Speak clearly and at a moderate pace</li>
              <li>• Minimize background noise</li>
              <li>• Keep microphone at a consistent distance</li>
            </ul>
          </div>
        </div>
      ) : (
        /* Recording State - Card Style */
        <div className="h-full flex flex-col">
          {/* Card Content */}
          <div className="flex-1 bg-white rounded-t-3xl px-6 pt-6 pb-4 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={handleClose} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Trash2 className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Title Input */}
            <input
              type="text"
              placeholder="Add a Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg mb-12 outline-none placeholder-gray-900"
            />

            {/* Recording Button with Pulsing Circles */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative mb-8">
                {/* Outer pulsing circle */}
                {!isPaused && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-red-200 rounded-full opacity-30 animate-ping" style={{ animationDuration: '2s' }}></div>
                  </div>
                )}
                
                {/* Middle pulsing circle */}
                {!isPaused && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-36 h-36 bg-red-300 rounded-full opacity-40 animate-pulse" style={{ animationDuration: '1.5s' }}></div>
                  </div>
                )}
                
                {/* Inner static circle */}
                <div className="relative w-32 h-32 bg-red-400 rounded-full opacity-50 flex items-center justify-center">
                  {/* Core button */}
                  <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-800">
                {isPaused ? 'Paused' : 'Listening'}
              </p>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="bg-blue-500 px-6 py-6 flex items-center justify-between">
            <button
              onClick={handlePauseResume}
              className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
            >
              <Pause className="w-6 h-6 text-white" />
            </button>
            
            <span className="text-white text-xl tabular-nums">{formatDuration(duration)}</span>
            
            <button
              onClick={handleStartStop}
              className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
            >
              <Square className="w-5 h-5 text-white fill-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}