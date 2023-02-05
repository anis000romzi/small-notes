import React from 'react';
import LocaleContext from '../context/LocaleContext';

function Loader() {
  const { theme } = React.useContext(LocaleContext);

  return (
    <div className="loader-container">
      <div className={`loadingio-spinner-rolling-iheef5lfcws ${theme === 'bright' ? '' : 'dark'}`}>
        <div className={`ldio-m9ot0311l7 ${theme === 'bright' ? '' : 'dark'}`}>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Loader;
