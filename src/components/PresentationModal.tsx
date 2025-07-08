"use client";

import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

type SlideModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  embedUrl: string;
};

export default function PresentationModal({
  isOpen,
  onClose,
  title,
  embedUrl,
}: SlideModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center px-4 py-6">
          <DialogPanel
            className="w-full max-w-4xl transform overflow-hidden rounded-xl border border-gray-800 bg-gray-900 text-white shadow-xl transition-all duration-300 ease-out scale-100 opacity-100 relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded hover:bg-white/10 text-gray-300"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <div className="px-6 py-4 border-b border-gray-800">
              <h2 className="text-lg font-bold text-gray-100 select-text">
                {title}
              </h2>
            </div>

            {/* Slide */}
            <div className="relative aspect-video bg-black border-t border-gray-800">
              <iframe
                src={embedUrl}
                title={`Presentation: ${title}`}
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-b-xl"
                sandbox="allow-scripts allow-same-origin allow-presentation"
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}
