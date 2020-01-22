import React, { Component } from "react";

import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import authProviders from "../../authProviders";

class AuthProviderList extends Component {
  render() {
    // Properties
    const { gutterBottom, performingAction } = this.props;

    // Events
    const { onAuthProviderClick } = this.props;

    return (
      <Box mb={gutterBottom ? 3 : 0}>
        <ButtonGroup
          disabled={performingAction}
          fullWidth
          orientation="vertical"
          variant="outlined"
        >
          {authProviders.map(authProvider => {
            return (
              <Button
                key={authProvider.providerId}
                startIcon={authProvider.icon}
                onClick={() => onAuthProviderClick(authProvider.providerId)}
              >
                {authProvider.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
    );
  }
}

AuthProviderList.defaultProps = {
  gutterBottom: false,
  performingAction: false
};

AuthProviderList.propTypes = {
  // Properties
  gutterBottom: PropTypes.bool,
  performingAction: PropTypes.bool,

  // Events
  onAuthProviderClick: PropTypes.func.isRequired
};

export default AuthProviderList;
