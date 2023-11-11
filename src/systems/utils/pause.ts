export const pause = async (ms: number): Promise<void> => {
  return new Promise((resolve: () => void): void => {
    window.setTimeout((): void => {
      resolve();
    }, ms);
  });
};
