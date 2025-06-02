import React from 'react';
import MarkdownViewer from '../utils/MarkdownViewer';

export default function Page({ path }) {
  return (
    <main>
      <MarkdownViewer src={path} />
    </main>
  );
}
