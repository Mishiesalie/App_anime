import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const AnimePlayer = ({ videoUrl, episodeData }) => {
  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [buffering, setBuffering] = useState(false);
  const [quality, setQuality] = useState('auto');
  const { user } = useAuth();

  let controlsTimeout;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    const handleBuffering = () => {
      setBuffering(true);
      video.addEventListener('playing', () => setBuffering(false), { once: true });
    };

    const handleKeyPress = (e) => {
      switch(e.key.toLowerCase()) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlay();
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'm':
          toggleMute();
          break;
        case 'arrowleft':
          skip(-10);
          break;
        case 'arrowright':
          skip(10);
          break;
        case 'arrowup':
          adjustVolume(0.1);
          break;
        case 'arrowdown':
          adjustVolume(-0.1);
          break;
      }
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('waiting', handleBuffering);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('waiting', handleBuffering);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setVolume(videoRef.current.muted ? 0 : 1);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    videoRef.current.muted = newVolume === 0;
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const skip = (seconds) => {
    const newTime = videoRef.current.currentTime + seconds;
    videoRef.current.currentTime = Math.max(0, Math.min(newTime, duration));
  };

  const adjustVolume = (change) => {
    const newVolume = Math.max(0, Math.min(volume + change, 1));
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="relative bg-black rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full aspect-video cursor-pointer"
        src={videoUrl}
        onClick={togglePlay}
        playsInline
      />

      {/* Buffering Indicator */}
      {buffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
        </div>
      )}

      {/* Video Controls */}
      <div 
        ref={controlsRef}
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 transition-opacity duration-300
          ${showControls ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Progress Bar */}
        <div className="relative group/progress">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer
              hover:h-2 transition-all duration-150"
          />
          <div 
            className="absolute left-0 top-0 h-1 bg-pink-500 rounded-lg pointer-events-none
              group-hover/progress:h-2 transition-all duration-150"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-4">
            <button onClick={togglePlay} className="text-white hover:text-pink-500 transition">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            
            <div className="group relative">
              <button onClick={toggleMute} className="text-white hover:text-pink-500 transition">
                {volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute bottom-full left-0 w-24 h-1 bg-gray-600 rounded-lg appearance-none 
                  cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Skip Buttons */}
            <button 
              onClick={() => skip(-10)} 
              className="text-white hover:text-pink-500 transition"
              title="Rewind 10s"
            >
              ⏪
            </button>
            <button 
              onClick={() => skip(10)} 
              className="text-white hover:text-pink-500 transition"
              title="Forward 10s"
            >
              ⏩
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quality Selector */}
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="bg-transparent text-white text-sm border border-gray-600 rounded px-2 py-1
                focus:outline-none focus:border-pink-500"
            >
              <option value="auto">Auto</option>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>

            <button 
              onClick={toggleFullscreen} 
              className="text-white hover:text-pink-500 transition"
            >
              {isFullscreen ? '⤓' : '⤢'}
            </button>
          </div>
        </div>
      </div>

      {/* Episode Info */}
      {episodeData && (
        <div className="bg-gray-800 p-4 mt-4 rounded-lg">
          <h2 className="text-white text-lg font-medium mb-2">
            Episode {episodeData.number}: {episodeData.title}
          </h2>
          <p className="text-gray-400">{episodeData.description}</p>
        </div>
      )}
    </div>
  );
};

export default AnimePlayer; 