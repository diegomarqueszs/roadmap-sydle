import { p as promiseResolve, b as bootstrapLazy } from './index-51280380.js';
export { s as setNonce } from './index-51280380.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.12.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["custom-welcome_2",[[1,"custom-welcome"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

//# sourceMappingURL=stencil-tests.js.map