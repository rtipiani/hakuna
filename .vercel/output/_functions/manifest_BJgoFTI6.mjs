import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_ByyNhJnE.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_BNwg5yew.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Dr8t9vgw.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Vercel/angelaventuratours/","cacheDir":"file:///D:/Vercel/angelaventuratours/node_modules/.astro/","outDir":"file:///D:/Vercel/angelaventuratours/dist/","srcDir":"file:///D:/Vercel/angelaventuratours/src/","publicDir":"file:///D:/Vercel/angelaventuratours/public/","buildClientDir":"file:///D:/Vercel/angelaventuratours/dist/client/","buildServerDir":"file:///D:/Vercel/angelaventuratours/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/chanchamayo","isIndex":false,"type":"page","pattern":"^\\/chanchamayo\\/?$","segments":[[{"content":"chanchamayo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chanchamayo.astro","pathname":"/chanchamayo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/contactanos","isIndex":false,"type":"page","pattern":"^\\/contactanos\\/?$","segments":[[{"content":"contactanos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactanos.astro","pathname":"/contactanos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/escolares","isIndex":false,"type":"page","pattern":"^\\/escolares\\/?$","segments":[[{"content":"escolares","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/escolares.astro","pathname":"/escolares","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/full-day","isIndex":false,"type":"page","pattern":"^\\/full-day\\/?$","segments":[[{"content":"full-day","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/full-day.astro","pathname":"/full-day","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/galeria","isIndex":false,"type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/nuestras-politicas","isIndex":false,"type":"page","pattern":"^\\/nuestras-politicas\\/?$","segments":[[{"content":"nuestras-politicas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nuestras-politicas.astro","pathname":"/nuestras-politicas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/oxapampa","isIndex":false,"type":"page","pattern":"^\\/oxapampa\\/?$","segments":[[{"content":"oxapampa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/oxapampa.astro","pathname":"/oxapampa","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/selva-central","isIndex":false,"type":"page","pattern":"^\\/selva-central\\/?$","segments":[[{"content":"selva-central","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/selva-central.astro","pathname":"/selva-central","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chanchamayo.Ylz3R_y4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Vercel/angelaventuratours/src/pages/chanchamayo.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/contactanos.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/escolares.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/full-day.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/nuestras-politicas.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/oxapampa.astro",{"propagation":"none","containsHead":true}],["D:/Vercel/angelaventuratours/src/pages/selva-central.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/chanchamayo@_@astro":"pages/chanchamayo.astro.mjs","\u0000@astro-page:src/pages/contactanos@_@astro":"pages/contactanos.astro.mjs","\u0000@astro-page:src/pages/escolares@_@astro":"pages/escolares.astro.mjs","\u0000@astro-page:src/pages/full-day@_@astro":"pages/full-day.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/nuestras-politicas@_@astro":"pages/nuestras-politicas.astro.mjs","\u0000@astro-page:src/pages/oxapampa@_@astro":"pages/oxapampa.astro.mjs","\u0000@astro-page:src/pages/selva-central@_@astro":"pages/selva-central.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BJgoFTI6.mjs","D:/Vercel/angelaventuratours/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DBJZ9sAI.mjs","D:/Vercel/angelaventuratours/src/components/Contacts":"_astro/Contacts.BS8khErN.js","D:/Vercel/angelaventuratours/src/components/Galeria":"_astro/Galeria.BxAAuXQe.js","D:/Vercel/angelaventuratours/src/components/Slider":"_astro/Slider.Dr69eiwc.js","D:/Vercel/angelaventuratours/src/components/Recomendation":"_astro/Recomendation.BmcA-Xvk.js","D:/Vercel/angelaventuratours/src/components/Socios":"_astro/Socios.Bc8AhlXf.js","D:/Vercel/angelaventuratours/src/components/Pagos":"_astro/Pagos.DMC1Cf-V.js","D:/Vercel/angelaventuratours/src/components/TopHeader.tsx":"_astro/TopHeader.BE6Nz2dA.js","D:/Vercel/angelaventuratours/src/components/Navbar.tsx":"_astro/Navbar.CWIfVZAh.js","D:/Vercel/angelaventuratours/src/components/Footer":"_astro/Footer.B_vJOm5H.js","@astrojs/react/client.js":"_astro/client.B_PwMJWB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/esc4.BxmCV4mW.png","/_astro/esc6.DvmM_NVD.png","/_astro/esc3.CUZ1gM-v.png","/_astro/esc2.CSP2Yoku.png","/_astro/esc-1.D7B9KBfH.png","/_astro/esc5.5H7KD8Zs.png","/_astro/esc10.D2XzHpx2.png","/_astro/esc7.DMywmBLt.png","/_astro/esc13.CvmTfovC.png","/_astro/esc11.Bai5t5w1.png","/_astro/esc15.DKF-AaK1.png","/_astro/esc14.C9tJQn0Z.png","/_astro/esc9.BM2iiJ3_.png","/_astro/esc12.CLerQ8tM.png","/_astro/plin.DpgYZBLE.png","/_astro/yape.CEiwUFo0.avif","/_astro/certificacion2.jiZY8iFg.png","/_astro/certificacion1.7ReHEicO.png","/_astro/bbva.C8SpIEKP.png","/_astro/bcp.BGLiXTc3.png","/_astro/esc8.DiS5f6hy.png","/_astro/pozuzo.C-qTk-sK.png","/_astro/oxapampa.BnBu8t-t.png","/_astro/perene2.wH0j6HtD.png","/_astro/villarica-4.DFCcvEKO.png","/_astro/villarica-2.BrbOGLjf.png","/_astro/villarica-1.BpiSo6u2.png","/_astro/villarica-7.DhqdLB4f.png","/_astro/promperu.Dp5CVADz.png","/_astro/dircetur.D8OQV_fm.png","/_astro/ytuqueplanes.yaGRuPB2.png","/_astro/visa.BuJowzWk.avif","/_astro/yape.CsdMIzF1.avif","/_astro/mastercard.S3RVrdZ-.avif","/_astro/plin.Ca25J89q.avif","/_astro/paypal.WbqKiSpe.avif","/_astro/western-union.T7x_6XZw.avif","/_astro/oxapampa-7.BlqL8X8q.png","/_astro/mincetur.DEE8jV3I.png","/_astro/villa-rica.D6vsBq5G.png","/_astro/gal1.BAk-AM_P.png","/_astro/iglesia-san-jose.fDWVFLMN.png","/_astro/cruz-chanchamayo.DZ_RUyM_.png","/_astro/gallito-de-las-rocas.DJHzzlaz.png","/_astro/perene.BUz1u9SV.png","/_astro/nosotros.D8tJQGAl.png","/_astro/responsabilidad.BR25b1fz.png","/_astro/catarata-bayoz.C7VOSKMD.png","/_astro/villarica-6.Qiu321FK.png","/_astro/villarica-3.ONxypKd-.png","/_astro/oxapampa-3.C7Q5NKxZ.png","/_astro/oxapampa-2.BErwAetv.png","/_astro/oxapampa-4.BorqkZx_.png","/_astro/oxapampa-6.C3C9uZic.png","/_astro/oxapampa-5.TiXauLvI.png","/_astro/chanchamayo-1.KMbZu42N.png","/_astro/chanchamayo-3.D2lwgW9t.png","/_astro/chanchamayo-6.DAlwf52b.png","/_astro/chanchamayo-5.CqmGy1Dk.png","/_astro/chanchamayo-4.DHITUxs2.png","/_astro/gal5.yo9GUKYj.png","/_astro/gal2.DUoCtRRm.png","/_astro/gal3.Df36s_5J.png","/_astro/villarica2.A-iAbbQt.png","/_astro/catarata-leon-dormido.Zk9zjj7h.png","/_astro/puente-paucartambo.CY4wzptI.png","/_astro/villarica-5.Bv3KF7ng.png","/_astro/oxapampa-1.BB8McNhQ.png","/_astro/gal4.rFrhi7Xy.png","/_astro/oxapampa.CMttPy2Q.png","/_astro/pozuzo.DrA3ua4S.png","/_astro/chanchamayo.CxBINm6D.png","/_astro/perene.Dy70kSpw.png","/_astro/logo.DjeQ78vG.webp","/_astro/villa-rica.Yqn6nPxi.png","/_astro/puente-kimiri.CeRkbHAB.png","/_astro/la-fortuna.BfVJur5X.png","/_astro/slide2.CH3jQL2I.png","/_astro/slide3.C6AoFycJ.png","/_astro/slide1.Coq6CPoY.png","/_astro/fa-brands-400.BfBXV7Mm.woff2","/_astro/fa-solid-900.8GirhLYJ.woff2","/_astro/fa-regular-400.BVHPE7da.woff2","/_astro/chanchamayo.Ylz3R_y4.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/_astro/client.B_PwMJWB.js","/_astro/Contacts.BS8khErN.js","/_astro/Footer.B_vJOm5H.js","/_astro/Galeria.BxAAuXQe.js","/_astro/index.Be8AcK8B.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/logo.C5KIjogX.js","/_astro/Navbar.CWIfVZAh.js","/_astro/Pagos.DMC1Cf-V.js","/_astro/Recomendation.BmcA-Xvk.js","/_astro/Slider.Dr69eiwc.js","/_astro/Socios.Bc8AhlXf.js","/_astro/TopHeader.BE6Nz2dA.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"4Go/2eEgI/GCKNBPapKTKiiu2YLfR8FxAz08ozllzIA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
