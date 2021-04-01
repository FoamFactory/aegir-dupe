export class MathUtil {
  static lerp(a, b, t) {
    return a*t + b*(1-t);
  }
}
