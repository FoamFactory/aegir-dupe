import { MathUtil } from './MathUtil';
import {toRgb, rgbStringToRgbTuple, lighten} from "@wessberg/color";
import {rgb, differenceEuclidean, wcagContrast} from 'culori';

export class ColorUtil {
  /**
   *  Linearly interpolate between two colors.
   *
   *  @param  {Array of 3 integers} rgb1 An array of integers specifying the
   *          color to interpolate from.
   *  @param  {Array of 3 integers} rgb2 An array of integers specifying the
   *          color to interpolate toward.
   *  @param  {float} t The percentage along the path to dedicate to rgb1.
   *  @param  {Boolean} [round=false] Whether or not to round the values to the
   *          nearest integer.
   *
   *  @return {Array of 3 values} An array of numbers specifying the red, green,
   *          and blue color values from the interpolation. If `round` is true,
   *          these will be integers.
   */
  static lerp(rgb1, rgb2, t, round=false) {
    let red = MathUtil.lerp(rgb1[0], rgb2[0], t);
    let green = MathUtil.lerp(rgb1[1], rgb2[1], t);
    let blue = MathUtil.lerp(rgb1[2], rgb2[2], t);
    return [
      round ? Math.round(red) : red,
      round ? Math.round(green) : green,
      round ? Math.round(blue) : blue
    ];
  }

  static rgbToRgba(rgb, alpha) {
    let rgbTuple = rgbStringToRgbTuple(rgb);
    return `rgba(${rgbTuple[0]}, ${rgbTuple[1]}, ${rgbTuple[2]}, ${alpha})`;
  }

  static getContrast(color1, color2) {
    let color1Culori = rgb(color1);
    let color2Culori = rgb(color2);
    return wcagContrast(color1Culori, color2Culori);
  }

  static getEuclideanDifferenceBetweenColors(color1, color2) {
    let differenceFunction = differenceEuclidean();
    let color1Culori = rgb(color1);
    let color2Culori = rgb(color2);
    return differenceFunction(color1Culori, color2Culori);
  }

  static getLightenedColorAtLeastDistanceFrom(color, distanceLowerBound,
                                              basisColorHex,
                                              initialAmount = 10) {
    let lightenedColor = toRgb(lighten(color, initialAmount));
    let lightenedCulori = rgb(lightenedColor);
    let basisCulori = rgb(basisColorHex);
    let differenceFunction = differenceEuclidean();

    while(differenceFunction(lightenedCulori, basisCulori) < 1) {
      initialAmount -= 1;
      lightenedColor = toRgb(lighten(color, initialAmount));
      lightenedCulori = rgb(lightenedColor);
    }

    return lightenedColor;
  }
}
