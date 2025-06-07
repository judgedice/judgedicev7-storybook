import React, { useState, useEffect, useCallback } from 'react';
import './colors.css';

interface ColorChange {
  colorName: string;
  oldValue: string;
  newValue: string;
  timestamp: number;
}

interface ColorSwatchProps {
  name: string;
  value: string;
  description?: string;
  className?: string;
  onColorChange?: (name: string, value: string) => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, description, className = '', onColorChange }) => {
  const getComputedColorValue = (cssVarOrColor: string) => {
    if (cssVarOrColor.startsWith('var(--')) {
      const varName = cssVarOrColor.slice(4, -1);
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    }
    return cssVarOrColor;
  };

  const [currentValue, setCurrentValue] = useState(() => getComputedColorValue(value));

  useEffect(() => {
    setCurrentValue(getComputedColorValue(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrentValue(newValue);
    onColorChange?.(name, newValue);
  };

  return (
    <div className={`vs-color-swatch ${className}`}>
      <div className="vs-color-swatch__color" style={{ backgroundColor: currentValue }} />
      <div className="vs-color-swatch__info">
        <h4 className="vs-color-swatch__name">{name}</h4>
        <p className="vs-color-swatch__value">{currentValue}</p>
        {description && <p className="vs-color-swatch__description">{description}</p>}
        {onColorChange && (
          <input
            type="color"
            value={currentValue}
            onChange={handleChange}
            className="vs-color-swatch__input"
            aria-label={`Change ${name} color`}
          />
        )}
      </div>
    </div>
  );
};

interface ColorsProps {
  editable?: boolean;
  onColorChange?: (change: ColorChange) => void;
}

export const Colors: React.FC<ColorsProps> = ({ editable = false, onColorChange }) => {
  const [history, setHistory] = useState<ColorChange[]>([]);
  const [colors, setColors] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const newColors: Record<string, string> = {};

    colorGroups.forEach(group => {
      group.colors.forEach(color => {
        const cssValue = computedStyle.getPropertyValue(color.variable).trim();
        if (cssValue) {
          newColors[color.name] = cssValue;
        }
      });
    });

    setColors(newColors);
  }, []);

  const handleColorChange = useCallback((colorName: string, newValue: string) => {
    const oldValue = colors[colorName] || '';
    const change: ColorChange = {
      colorName,
      oldValue,
      newValue,
      timestamp: Date.now(),
    };

    const root = document.documentElement;
    const colorGroup = colorGroups.find(group => 
      group.colors.some(color => color.name === colorName)
    );
    const colorDef = colorGroup?.colors.find(color => color.name === colorName);
    
    if (colorDef) {
      root.style.setProperty(colorDef.variable, newValue);
      
      setColors(prev => ({ ...prev, [colorName]: newValue }));
      
      setHistory(prev => [...prev, change]);
      
      onColorChange?.(change);
    }
  }, [colors, onColorChange]);

  const handleUndo = useCallback(() => {
    if (history.length === 0) return;

    const lastChange = history[history.length - 1];
    const root = document.documentElement;
    const colorGroup = colorGroups.find(group => 
      group.colors.some(color => color.name === lastChange.colorName)
    );
    const colorDef = colorGroup?.colors.find(color => color.name === lastChange.colorName);

    if (colorDef) {
      root.style.setProperty(colorDef.variable, lastChange.oldValue);
      
      setColors(prev => ({ ...prev, [lastChange.colorName]: lastChange.oldValue }));
      
      setHistory(prev => prev.slice(0, -1));
      
      onColorChange?.({
        ...lastChange,
        newValue: lastChange.oldValue,
        oldValue: lastChange.newValue,
        timestamp: Date.now(),
      });
    }
  }, [history, onColorChange]);

  const colorGroups = [
    {
      title: 'Brand Colors',
      colors: [
        { name: 'Primary', variable: '--vs-color-primary', description: 'Main brand color used for primary actions and key UI elements' },
        { name: 'Primary Dark', variable: '--vs-color-primary-dark', description: 'Darker shade of primary color for hover states' },
        { name: 'Secondary', variable: '--vs-color-secondary', description: 'Secondary brand color used for supporting elements' },
        { name: 'Accent', variable: '--vs-color-accent', description: 'Accent color used for highlights and special elements' },
      ],
    },
    {
      title: 'Text Colors',
      colors: [
        { name: 'Text', variable: '--vs-color-text', description: 'Main text color for body content' },
        { name: 'Text Light', variable: '--vs-color-text-light', description: 'Lighter text color for secondary content' },
        { name: 'Text Lighter', variable: '--vs-color-text-lighter', description: 'Very light text color for subtle content' },
      ],
    },
    {
      title: 'Status Colors',
      colors: [
        { name: 'Success', variable: '--vs-color-success', description: 'Color indicating successful actions or states' },
        { name: 'Error', variable: '--vs-color-error', description: 'Color indicating errors or destructive actions' },
        { name: 'Warning', variable: '--vs-color-warning', description: 'Color indicating warnings or cautionary states' },
        { name: 'Info', variable: '--vs-color-info', description: 'Color indicating informational states' },
      ],
    },
    {
      title: 'Background Colors',
      colors: [
        { name: 'Background', variable: '--vs-color-background', description: 'Main background color' },
        { name: 'Background Alt', variable: '--vs-color-background-alt', description: 'Alternative background color for contrast' },
        { name: 'Border', variable: '--vs-color-border', description: 'Border color for subtle separators' },
      ],
    },
    {
      title: 'Highlight Colors',
      colors: [
        { name: 'Highlight', variable: '--vs-color-highlight', description: 'Highlight color for emphasis and focus' },
        { name: 'Highlight Light', variable: '--vs-color-highlight-light', description: 'Light version of highlight color' },
        { name: 'Highlight Dark', variable: '--vs-color-highlight-dark', description: 'Dark version of highlight color' },
      ],
    },
  ];

  return (
    <div className="vs-colors">
      {editable && (
        <div className="vs-colors__controls">
          <button
            className="vs-colors__undo-button"
            onClick={handleUndo}
            disabled={history.length === 0}
            aria-label="Undo last color change"
          >
            Undo Last Change
          </button>
        </div>
      )}
      {colorGroups.map((group) => (
        <div key={group.title} className="vs-colors__group">
          <h3 className="vs-colors__group-title">{group.title}</h3>
          <div className="vs-colors__swatches">
            {group.colors.map((color) => (
              <ColorSwatch
                key={color.name}
                name={color.name}
                value={colors[color.name] || `var(${color.variable})`}
                description={color.description}
                className={color.name.toLowerCase().includes('light') || color.name.toLowerCase().includes('alt') ? 'vs-color-swatch--light' : ''}
                onColorChange={editable ? handleColorChange : undefined}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 