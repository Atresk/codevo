import React from 'react';
import MarkdownViewer from '../utils/MarkdownViewer';

export default function Page_1() {
  return (
    <main>
        <MarkdownViewer src={"/docs/test.md"}/>
    </main>
  );
}
