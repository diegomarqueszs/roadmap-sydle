import { b as bootstrapLazy } from './index-51280380.js';
export { s as setNonce } from './index-51280380.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["custom-welcome_2",[[1,"custom-welcome"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map