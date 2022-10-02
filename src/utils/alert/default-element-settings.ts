import {
  AlertTextElement,
  AlertImageElement,
  AlertLottieElement,
  AlertVideoElement,
  AlertAudioElement,
} from './../../types/schemas/alert';
import { uid } from 'uid';

export const defaultTextElementSettings = (): AlertTextElement => {
  return {
    type: 'text',
    id: uid(),
    title: 'Text element title',
    color: '#0000ff',
    posX: 0,
    posY: 0,
    width: 200,
    height: 100,
    duration: 1000,
    start_time: 0,
    settings: {
      content: 'Text element content',
      is_dynamic: false,
      dynamic_content: 'pseudo',
      animation_in: 'none',
      animation_out: 'none',
      shadow: {
        shadowColor: '#000000',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
      },
      border: {
        top: { color: '#000000', width: 1, style: 'solid' },
        right: { color: '#000000', width: 1, style: 'solid' },
        bottom: { color: '#000000', width: 1, style: 'solid' },
        left: { color: '#000000', width: 1, style: 'solid' },
      },
      background: '#ffffff',
      radius: {
        top_left: 4,
        top_right: 4,
        bottom_right: 4,
        bottom_left: 4,
      },
      text: {
        fontFamily: 'Rubik',
        fontSize: 16,
        fontWeight: '400',
        color: '#000000',
        textAlign: 'left',
        textDecoration: 'none',
        fontStyle: 'normal',
        letterSpacing: 0,
        lineHeight: 100,
        textShadow: { shadowOffsetX: 0, shadowOffsetY: 0, shadowBlur: 0, shadowColor: '#000000' },
      },
      padding: {
        top: 6,
        right: 6,
        bottom: 6,
        left: 6,
      },
    },
  };
};

export const defaultImageElementSettings = (): AlertImageElement => {
  return {
    type: 'image',
    id: uid(),
    title: 'Image element title',
    color: '#00ff00',
    posX: 0,
    posY: 0,
    width: 100,
    height: 100,
    duration: 1000,
    start_time: 0,
    settings: {
      url: 'https://avatars.githubusercontent.com/u/109690726?s=200&v=4',
    },
  };
};

export const defaultLottieElementSettings = (): AlertLottieElement => {
  return {
    type: 'lottie',
    id: uid(),
    title: 'Lottie element title',
    color: '#000ff0',
    posX: 0,
    posY: 0,
    width: 100,
    height: 100,
    duration: 1000,
    start_time: 0,
    settings: {
      url: 'https://assets10.lottiefiles.com/packages/lf20_nwttxjmp.json',
    },
  };
};

export const defaultVideoElementSettings = (): AlertVideoElement => {
  return {
    type: 'video',
    id: uid(),
    title: 'Video element title',
    color: '#0cbff0',
    posX: 0,
    posY: 0,
    width: 100,
    height: 100,
    duration: 1000,
    start_time: 0,
    settings: {
      url: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
      muted: true,
      loop: false,
    },
  };
};

export const defaultAudioElementSettings = (): AlertAudioElement => {
  return {
    type: 'audio',
    id: uid(),
    title: 'Audio element title',
    color: '#4837de',
    posX: 0,
    posY: 0,
    width: 0,
    height: 0,
    duration: 1000,
    start_time: 0,
    settings: {
      url: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
      muted: true,
      loop: false,
      volume: 50,
    },
  };
};
