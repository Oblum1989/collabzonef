'use client';
import { useState } from "react";
import { EmojiPicker } from "../EmojiPicker";

interface EmojiCount {
  [emoji: string]: number;
}

export default function Emoticons() {
  const [emojis, setEmojis] = useState<EmojiCount>({});
  const [showEmojisPicker, setShowEmojisPicker] = useState(false)

  const handleEmojiSelect = (emoji: { native: string }) => {
    setEmojis(prevEmojis => {
      const newEmojis = { ...prevEmojis };
      if (newEmojis[emoji.native]) {
        newEmojis[emoji.native] += 1;
      } else {
        newEmojis[emoji.native] = 1;
      }
      return newEmojis;
    });
    setShowEmojisPicker(false);
  };

  return (
    <div className="flex flex-col mt-3 gap-2 relative">
      <div className="flex justify-start gap-2 flex-wrap">
        {
          Object.keys(emojis).map((emoji, index) => (
            <div key={index} className="flex items-center gap-1 text-xs bg-slate-200 rounded-xl py-1 px-2">
              <span>{emojis[emoji]}</span>
              <span>{emoji}</span>
            </div>
          ))
        }
        <div className="flex items-center gap-1 text-xs bg-slate-200 rounded-xl py-1 px-2 cursor-pointer" onClick={()=>setShowEmojisPicker(!showEmojisPicker)}>
          <span>+</span>
        </div>
      </div>
      {showEmojisPicker && <div className="absolute top-9 z-50"><EmojiPicker onEmojiSelect={handleEmojiSelect} /></div>}
    </div>
  )
}
