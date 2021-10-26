export const joinPaths = (path1: string, path2: string) => {
  const processedPath1 = path1.endsWith("/")
    ? path1.slice(0, path1.length - 1)
    : path1;
  const processedPath2 = path2.startsWith("/")
    ? path2.slice(1, path2.length)
    : path2;
  return `${path1}/${path2}`;
};
