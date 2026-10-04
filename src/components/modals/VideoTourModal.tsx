import React from 'react';
import { Modal } from '../ui/Modal';
import { Play } from 'lucide-react';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="TIS 22-Acre Campus Video Tour" maxWidth="4xl">
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            title="Tulas International School Campus Video Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Play className="w-3.5 h-3.5" /> High Definition Virtual Walkthrough
          </span>
          <span>Location: Dehradun, Uttarakhand</span>
        </div>
      </div>
    </Modal>
  );
};
