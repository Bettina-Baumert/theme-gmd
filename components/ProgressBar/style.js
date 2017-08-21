import cxs from 'cxs';
import Color from 'color';
import { accent } from 'Styles/colors';

const progressBarHeight = 4;
const progressBarBackground = Color(accent).lighten(0.4);

const wrapper = cxs({
  background: progressBarBackground.hsl().string(),
  position: 'relative',
  width: '100%',
  height: progressBarHeight,
  overflow: 'hidden',
  transition: 'height .3s linear',
});

const innerElement = cxs({
  transition: 'width .3s linear',
  ':before': {
    content: '""',
    position: 'absolute',
    background: accent,
    top: 0,
    left: 0,
    bottom: 0,
    willChange: 'left, right',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    background: accent,
    top: 0,
    left: 0,
    bottom: 0,
    willChange: 'left, right',
  },
});

const animating = cxs({
  ':before': {
    animation: 'indeterminateLong 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
  },
  ':after': {
    animation: 'indeterminateShort 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
    animationDelay: '1.15s',
  },
});

cxs({
  '@keyframes indeterminateLong': {
    '0%': {
      left: '-35%',
      right: '100%',
    },
    '60%': {
      left: '100%',
      right: '-90%',
    },
    '100%': {
      left: '100%',
      right: '-90%',
    },
  },
});

cxs({
  '@keyframes indeterminateShort': {
    '0%': {
      left: '-200%',
      right: '100%',
    },
    '60%': {
      left: '107%',
      right: '-8%',
    },
    '100%': {
      left: '107%',
      right: '-8%',
    },
  },
});

export default {
  wrapper,
  innerElement,
  animating,
};