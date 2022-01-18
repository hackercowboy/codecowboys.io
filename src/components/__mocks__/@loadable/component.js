import React from 'react';

function loadable(load) {
  let Component;

  const loadPromise = load.importAsync().then((val) => { Component = val.default; });

  function Loadable(props: any) {
    if (!Component) {
      throw new Error(
        `Bundle split module not loaded yet, ensure you beforeAll(() => MyLazyComponent.load()) in your test, import statement: ${
          load.toString()}`,
      );
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  }
  Loadable.load = () => loadPromise;
  return Loadable;
}

export default loadable;
