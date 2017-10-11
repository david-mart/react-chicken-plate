import path from "path";

const resolvePaths = (...args) => {
  return path.resolve(__dirname, "src", ...args);
};

const aliases = ["components", "contants", "reducers", "utilities"];

export default aliases.reduce(
  (list, item) => ({ ...list, [item]: resolvePaths(item) }),
  {}
);
