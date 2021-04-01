export class ABVCalculator {
  static calculateStandard(originalGravity, finalGravity) {
    // let og = Math.floor((originalGravity) - 1000);
    // let fg = Math.floor((finalGravity);

    // console.log(`og - fg: ${og-fg}`);
    return ((originalGravity - finalGravity) * 131.25).toFixed(2);
  }
}
