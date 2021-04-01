import { toHex } from "@wessberg/color";

import { ColorUtil } from './ColorUtil';
import { SrmUtil } from './SrmUtil';

describe('srmToHexColor', () => {
  test ('it should return #E0D01B for an srm of 5', () => {
    expect(SrmUtil.srmToHexColor(5)).toBe('#e0d01b');
  });

  test ('it should return rgb(76, 40, 27) for an srm of 21.44', () => {
    expect(SrmUtil.srmToRgb(21.44)).toBe('rgb(76, 40, 27)');
  });
});
