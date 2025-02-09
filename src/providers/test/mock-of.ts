/**
 * Helper function for mocking other functions.
 *
 * Import it using this:
 * ```ts
 * import { mockOf } from '@earnifi/shared/src/utils/testing/mock-of';
 * ```
 *
 * @param fn
 * @example mockOf(stripe.checkout.sessions.create).mockResolvedValue(mockSession);
 * @see https://twitter.com/scastiel/status/1631354119192473601?s=20
 */
export const mockOf = <
  FunctionParameters extends unknown[],
  FunctionReturnType,
>(
  fn: (...args: FunctionParameters) => FunctionReturnType,
) => fn as jest.Mock<FunctionReturnType, FunctionParameters>;
