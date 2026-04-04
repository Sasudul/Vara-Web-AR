import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        'ios-src'?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'ar-scale'?: string;
        'camera-controls'?: boolean;
        'environment-image'?: string;
        exposure?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        'auto-rotate'?: boolean;
        poster?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export {};
