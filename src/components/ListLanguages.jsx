import React from 'react';
import { languages } from '../data/languages';

function ListLanguages() {
  return (
    <div className='flex flex-wrap max-w-125 gap-x-3 mx-auto '>
      {languages.map((language, id) => (
        <p
          key={id}
          style={{
            backgroundColor: language.backgroundColor,
            color: language.color,
            padding: '8px 12px',
            borderRadius: '4px',
            margin: '6px 0',
          }}
        >
          {language.name}
        </p>
      ))}
    </div>
  );
}

export default ListLanguages;
