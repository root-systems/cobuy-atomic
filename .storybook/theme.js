import { chromeDark, chromeLight} from 'react-inspector';

export const baseFonts = {
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", "Arial", sans-serif',
  color: '#444',
  WebkitFontSmoothing: 'antialiased',
};

export const monoFonts = {
  fontFamily:
    '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  color: '#444',
  WebkitFontSmoothing: 'antialiased',
}

export const normal = {
  mainBackground: '#F7F7F7 linear-gradient(to bottom right, #EEEEEE, #FFFFFF)',
  mainBorder: '1px solid rgba(0,0,0,0.1)',
  mainBorderColor: 'rgba(0,0,0,0.1)',
  mainBorderRadius: 4,
  mainFill: '#fffaef',
  barFill: 'rgba(255,255,255,1)',
  barSelectedColor: 'rgba(0,0,0,0.1)',
  inputFill: 'rgba(0,0,0,0.05)',
  mainTextFace: baseFonts.fontFamily,
  mainTextColor: baseFonts.color,
  dimmedTextColor: 'rgba(0,0,0,0.4)',
  highlightColor: '#9fdaff',
  successColor: '#0edf62',
  failColor: '#ff3f3f',
  warnColor: 'orange',
  mainTextSize: 13,
  monoTextFace: monoFonts.fontFamily,
  layoutMargin: 10,
  overlayBackground:
    'linear-gradient(to bottom right, rgba(233, 233, 233, 0.6), rgba(255, 255, 255, 0.8))',

  brand: {},

  addonActionsTheme: {
    ...chromeLight,
    BASE_FONT_FAMILY: monoFonts.fontFamily,
    BASE_BACKGROUND_COLOR: 'transparent',
  },
};

export const dark =  {
  mainBackground: '#112 linear-gradient(to right, #112, #333)',
  mainBorder: '1px solid rgba(255,255,255,0.1)',
  mainBorderColor: 'rgba(255,255,255,0.1)',
  mainBorderRadius: 4,
  mainFill: 'rgb(239, 239, 239)',
  barFill: 'rgba(0,0,0,1)',
  barSelectedColor: 'rgba(255,255,255,0.4)',
  inputFill: 'rgba(0,0,0,1)',
  mainTextFace: baseFonts.fontFamily,
  mainTextColor: '#efefef',
  dimmedTextColor: 'rgba(255,255,255,0.4)',
  highlightColor: '#9fdaff',
  successColor: '#0edf62',
  failColor: '#ff3f3f',
  warnColor: 'orange',
  mainTextSize: 13,
  monoTextFace: monoFonts.fontFamily,
  layoutMargin: 10,
  overlayBackground:
    'linear-gradient(to bottom right, rgba(17, 17, 34, 0.6), rgba(51, 51, 51, 0.8))',

  brand: {
    background: 'rgba(0,0,0,1)',
  },

  addonActionsTheme: {
    ...chromeDark,
    BASE_FONT_FAMILY: monoFonts.fontFamily,
    BASE_BACKGROUND_COLOR: 'transparent',
  },
};