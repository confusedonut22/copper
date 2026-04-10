import { innerWidth, innerHeight } from 'svelte/reactivity/window';
import { getContext, setContext } from 'svelte';

const LAYOUT_CONTEXT_KEY = 'jackchad.layout';

const CANVAS_RATIO_TYPE_BREAK_POINTS = {
  wideSquare: 1.3,
  narrowSquare: 0.8,
};

const CANVAS_SIZE_TYPE_BREAK_POINTS = {
  smallMobile: 375,
  mobile: 480,
  tablet: 820,
  largeTablet: 1024,
};

const getRatio = (value) => value.width / (value.height || 1);

const STANDARD_MAIN_SIZES_MAP = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 1920, height: 1920 },
  landscape: { width: 1920, height: 1080 },
  portrait: { width: 1080, height: 1920 },
};

export const createLayout = (layoutOptions) => {
  const canvasSizes = () => ({ width: innerWidth.current ?? 1, height: innerHeight.current ?? 1 });
  const canvasRatio = () => getRatio(canvasSizes());
  const canvasRatioType = () => {
    if (canvasRatio() >= CANVAS_RATIO_TYPE_BREAK_POINTS.wideSquare) return 'longWidth';
    if (canvasRatio() <= CANVAS_RATIO_TYPE_BREAK_POINTS.narrowSquare) return 'longHeight';
    return 'almostSquare';
  };
  const canvasSizeType = () => {
    const deviceWidth = Math.min(canvasSizes().width, canvasSizes().height);
    if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.smallMobile) return 'smallMobile';
    if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.mobile) return 'mobile';
    if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.tablet) return 'tablet';
    if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.largeTablet) return 'largeTablet';
    return 'desktop';
  };
  const layoutType = () => {
    if (canvasRatioType() === 'almostSquare') return 'tablet';
    if (canvasRatioType() === 'longHeight') return 'portrait';
    if (canvasSizeType() === 'mobile' || canvasSizeType() === 'smallMobile') return 'landscape';
    return 'desktop';
  };
  const isStacked = () => ['portrait', 'tablet'].includes(layoutType());

  const createMainLayout = (mainSizesMap) => () => {
    const x = canvasSizes().width * 0.5;
    const y = canvasSizes().height * 0.5;
    const mainSizes = mainSizesMap[layoutType()];
    const widthScale = canvasSizes().width / mainSizes.width;
    const heightScale = canvasSizes().height / mainSizes.height;
    const scale = Math.min(widthScale, heightScale);

    return {
      x,
      y,
      scale,
      width: mainSizes.width,
      height: mainSizes.height,
      anchor: 0.5,
    };
  };

  const mainLayout = createMainLayout(layoutOptions.mainSizesMap);
  const mainLayoutStandard = createMainLayout(STANDARD_MAIN_SIZES_MAP);

  const createBackgroundLayout = ({ scale, ratio }) => {
    const ratioNow = getRatio(canvasSizes());

    if (ratioNow < ratio) {
      return {
        x: canvasSizes().width / 2,
        y: canvasSizes().height / 2,
        height: canvasSizes().height * scale,
      };
    }

    return {
      x: canvasSizes().width / 2,
      y: canvasSizes().height / 2,
      width: canvasSizes().width * scale,
    };
  };

  const normalBackgroundLayout = ({ scale }) =>
    createBackgroundLayout({ scale, ratio: layoutOptions.backgroundRatio.normal });
  const portraitBackgroundLayout = ({ scale }) =>
    createBackgroundLayout({ scale, ratio: layoutOptions.backgroundRatio.portrait });

  const stateLayout = $state({
    showLoadingScreen: true,
  });

  const stateLayoutDerived = {
    canvasSizes,
    canvasRatio,
    canvasRatioType,
    canvasSizeType,
    layoutType,
    isStacked,
    mainLayout,
    mainLayoutStandard,
    normalBackgroundLayout,
    portraitBackgroundLayout,
  };

  return {
    stateLayout,
    stateLayoutDerived,
  };
};

export const { stateLayout, stateLayoutDerived } = createLayout({
  backgroundRatio: {
    normal: 1.777,
    portrait: 0.5625,
  },
  mainSizesMap: STANDARD_MAIN_SIZES_MAP,
});

export const setContextLayout = (value = { stateLayout, stateLayoutDerived }) => {
  setContext(LAYOUT_CONTEXT_KEY, value);
  return value;
};

export const getContextLayout = () => getContext(LAYOUT_CONTEXT_KEY);

export const initializeLayoutContext = () =>
  setContextLayout({ stateLayout, stateLayoutDerived });
