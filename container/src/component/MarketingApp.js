import React, { useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      nextPathname: location.pathname,
    });
  }, [location]);

  return <div ref={ref}></div>;
};

export default MarketingApp;
