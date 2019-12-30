import React from 'react';
import LocalizationContext from '../../context/localization';

const withLocalization = WrappedComponent => {
  return function WithLocalization(props) {
    console.log(props);

    return (
      <LocalizationContext.Consumer>
        {context => <WrappedComponent {...props} localization={context} />}
      </LocalizationContext.Consumer>
    );
  };
};

export default withLocalization;
