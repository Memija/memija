/**
 * Date utility.
 */
export class DateUtility {
  /**
   * Get current year value.
   * @returns Current year value.
   */
  static getCurrentYearValue(): Number {
    return new Date().getFullYear();
  }
}
