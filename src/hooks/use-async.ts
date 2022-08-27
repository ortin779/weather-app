import { useEffect, useState } from 'react';

export type AsyncState<T> = {
  isLoading: boolean;
  hasError: boolean;
  result?: T;
};

type AsyncReturn<T> = [state: AsyncState<T>, triggerFn: () => Promise<T>];

type UseAsyncEffectParams<T> = {
  fn: () => PromiseLike<T>;
  dependencies: unknown[];
  triggerCondition?: boolean;
};

/**
 * AsyncFunc that runs async task and returns the AsyncState and triggerFunction
 * @param fn : an async function
 * @returns an object with AsyncState and triggerFn
 */
export function asyncFunc<T>(fn: () => PromiseLike<T>): AsyncReturn<T> {
  const [state, setState] = useState<AsyncState<T>>({
    isLoading: false,
    hasError: false,
  });

  async function go() {
    setState((s) => ({ ...s, isLoading: true, hasError: false }));

    try {
      const result = await fn();
      setState((s) => ({ ...s, isLoading: false, result }));
      return result;
    } catch (error) {
      setState((s) => ({ ...s, isLoading: false, hasError: true }));
      throw error;
    }
  }

  return [state, go];
}

/**
 * Extended version of asyncFunc to support re-running async task when dependencies changes
 * @param UseAsyncEffectParams that contains fn: asyncFunction , dependencies: list of dependencies and triggerCondition: to trigger useEffect
 * @returns
 */

export function useAsyncEffect<T>({
  fn,
  dependencies,
  triggerCondition = true,
}: UseAsyncEffectParams<T>): AsyncReturn<T> {
  const [state, triggerFn] = asyncFunc<T>(fn);
  useEffect(() => {
    if (triggerCondition) {
      triggerFn();
    }
  }, dependencies);

  return [state, triggerFn];
}
