import React from 'react';
import './Compiler.css'
import CodeRunner from '../utils/CodeRunner';

export default function Compiler() {
  return (
    <main>
      <div className='compiler'>
        <CodeRunner />
      </div>
    </main>
  );
}
