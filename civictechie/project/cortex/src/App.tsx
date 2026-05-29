import { useState } from 'react';
import { Home } from './components/Home';
import { LiveTranscribe } from './components/LiveTranscribe';
import { History } from './components/History';
import { Home as HomeIcon, History as HistoryIcon, Box } from 'lucide-react';

type Screen = 'home' | 'live' | 'history';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-[375px] h-[812px] bg-white rounded-[3rem] shadow-2xl overflow-hidden relative border-[14px] border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[209px] h-[30px] bg-gray-800 rounded-b-[1.25rem] z-50"></div>
        
        {/* Status Bar */}
        <div className="px-8 pt-3 pb-2 flex justify-between items-center">
          <span className="text-sm">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-3 border border-black rounded-sm relative">
              <div className="absolute inset-0.5 bg-black rounded-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-[calc(100%-120px)] overflow-y-auto">
          {currentScreen === 'home' && <Home />}
          {currentScreen === 'live' && <LiveTranscribe />}
          {currentScreen === 'history' && <History />}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('home')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <HomeIcon className={`w-6 h-6 ${currentScreen === 'home' ? 'text-blue-600' : 'text-gray-600'}`} />
            <span className={`text-xs ${currentScreen === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>
              Home
            </span>
          </button>

          <button
            onClick={() => setCurrentScreen('live')}
            className="flex flex-col items-center -mt-8"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Box className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-gray-600 mt-1">Live Transcribe</span>
          </button>

          <button
            onClick={() => setCurrentScreen('history')}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <HistoryIcon className={`w-6 h-6 ${currentScreen === 'history' ? 'text-blue-600' : 'text-gray-600'}`} />
            <span className={`text-xs ${currentScreen === 'history' ? 'text-blue-600' : 'text-gray-600'}`}>
              History
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
