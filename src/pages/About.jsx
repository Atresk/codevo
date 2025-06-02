import React from 'react';
import MarkdownViewer from '../utils/MarkdownViewer';

export default function About() {
  return (
    <main>
      <div className="about">
        <MarkdownViewer src={'/docs/about.md'} />
      </div>
    </main>
  );
}
