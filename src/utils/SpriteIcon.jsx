import React from 'react';
import './SpriteIcon.css';
import spriteImage from '../assets/sprite.png';

export default function SpriteIcon({ index, size = 32 }) {
  const SPRITE_SIZE = 32;
  const SHEET_WIDTH = 256;
  const SPRITES_PER_ROW = SHEET_WIDTH / SPRITE_SIZE;

  const row = Math.floor(index / SPRITES_PER_ROW);
  const col = index % SPRITES_PER_ROW;

  const offsetX = -col * SPRITE_SIZE;
  const offsetY = -row * SPRITE_SIZE;

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${spriteImage})`,
        backgroundPosition: `${offsetX}px ${offsetY}px`,
        backgroundSize: `${SHEET_WIDTH}px ${SHEET_WIDTH}px`,
        imageRendering: 'pixelated',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
