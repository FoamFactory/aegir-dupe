import { lighten, toHex, toRgb, rgbStringToRgbTuple } from "@wessberg/color";

// NOTE: This may import ColorUtil, but NOT the other way around.
import { ColorUtil } from './ColorUtil';

const srmTable = [
  '#F3F993', // 1
  '#F5F75C', // 2
  '#F6F513', // 3
  '#EAE615', // 4
  '#E0D01B', // 5
  '#D5BC26', // 6
  '#CDAA37', // 7
  '#C1963C', // 8
  '#BE8C3A', // 9
  '#BE823A', // 10
  '#C17A37', // 11
  '#BF7138', // 12
  '#BC6733', // 13
  '#B26033', // 14
  '#A85839', // 15
  '#985336', // 16
  '#8D4C32', // 17
  '#7C452D', // 18
  '#6B3A1E', // 19
  '#5D341A', // 20
  '#4E2A0C', // 21
  '#4A2727', // 22
  '#361F1B', // 23
  '#261716', // 24
  '#231716', // 25
  '#19100F', // 26
  '#16100F', // 27
  '#120D0C', // 28
  '#100B0A', // 29
  '#010101' // 30
];

export class SrmUtil {
  static srmToHexColor(srm) {
    return toHex(SrmUtil.srmToRgb(srm));
  }

  static srmToRgb(srm) {
    if (srm > 30) {
      srm = 30;
    }

    if (Number.isInteger(srm)) {
      let rgbForm = rgbStringToRgbTuple(toRgb(srmTable[srm - 1]));
      return `rgb(${rgbForm[0]}, ${rgbForm[1]}, ${rgbForm[2]})`;
    }

    // Otherwise, linearly interpolate between the two closest numbers.
    let rgb1 = rgbStringToRgbTuple(toRgb(srmTable[Math.floor(srm) - 1]));
    let rgb2 = rgbStringToRgbTuple(toRgb(srmTable[Math.ceil(srm) - 1]));

    let t = srm - Math.floor(srm);
    let lerpedRgb = ColorUtil.lerp(rgb1, rgb2, t, true);
    return `rgb(${Math.round(lerpedRgb[0])}, ${Math.round(lerpedRgb[1])}, ${Math.round(lerpedRgb[2])})`;
  }

  static isBeerColorTooLightForText(srm) {
    let baseColor = SrmUtil.srmToHexColor(srm);
    let lightestBeerColor
      = ColorUtil.getLightenedColorAtLeastDistanceFrom(baseColor, 1, '#FFFFFF',
                                                       23);
    return ColorUtil.getContrast(lightestBeerColor, '#FFFFFF') < 2.5;
  }

  static getCSSForBeerGradientWithHighlight(srm) {
    let baseColor = SrmUtil.srmToHexColor(srm);

    // The highlights can be white, but the beer color should never be white.
    let highlightBase = lighten(baseColor, 65);
    let highlightBaseRgb = toRgb(highlightBase);
    let highlightBaseTrans1 = ColorUtil.rgbToRgba(highlightBaseRgb, 0.42);
    let highlightBaseTrans2 = ColorUtil.rgbToRgba(highlightBaseRgb, 0.0);


    let baseBeerColor = toRgb(baseColor);
    let baseBeerWithTrans = ColorUtil.rgbToRgba(baseBeerColor, 0.72);
    let lightBeerColor =
      ColorUtil.getLightenedColorAtLeastDistanceFrom(baseColor, 2, '#FFFFFF',
                                                     10);

    let lightBeerRgba = ColorUtil.rgbToRgba(lightBeerColor, 0.72);
    let lightestBeerColor
      = ColorUtil.getLightenedColorAtLeastDistanceFrom(baseColor, 1, '#FFFFFF',
                                                       23);
    let lightestRgba = ColorUtil.rgbToRgba(lightestBeerColor, 0.72);
    let darkBeerColor = ColorUtil.rgbToRgba(toRgb(lighten(baseColor, -2)),
                                            0.72);

    return `radial-gradient(9.93% 163.62% at 21.5% 50%,
                                ${highlightBase} 0%,
                                ${highlightBaseTrans1} 23.96%,
                                ${highlightBaseTrans2} 100%),
                                linear-gradient(90deg,
                                                ${lightestRgba} 1%,
                                                ${lightBeerRgba} 11%,
                                                ${lightBeerRgba} 24%,
                                                ${baseBeerWithTrans} 39%,
                                                ${darkBeerColor} 64%,
                                                ${lightBeerRgba} 82%,
                                                ${lightBeerRgba} 92%)`;
  }
}
