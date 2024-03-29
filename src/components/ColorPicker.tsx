import React, { useState } from 'react';
import './ColorPicker.css';

type TOption={label:string, color:string}

interface Props{
  options: TOption[];
  initialOptionPosition?: number;
}

const ColorPicker = ({ options, initialOptionPosition=1}:Props) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(initialOptionPosition-1);

  const setActiveIdx = (index:number) => setActiveOptionIdx(index);

  const makeOptionClassName = (index:number) => {
    const optionClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;