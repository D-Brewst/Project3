const Router = require("express").Router();
const userController = require("../controllers/userController");

// routes that we want to protect
Router.route("/users").post(userController.createNew);

Router.use("/messages", require("../controllers/messageController"));

Router.post('/create_link_token', function(request, response, next) {
    const configs = {
      'user': {
        // This should correspond to a unique id for the current user.
        'client_user_id': 'user-id',
      },
      'client_name': "Plaid Quickstart",
      'products': PLAID_PRODUCTS,
      'country_codes': PLAID_COUNTRY_CODES,
      'language': "en",
    }
  
    if (PLAID_REDIRECT_URI !== '') {
      configs.redirect_uri = PLAID_REDIRECT_URI;
    }
    
    client.createLinkToken(configs, function(error, createTokenResponse) {
        if (error != null) {
          prettyPrintResponse(error);
          return response.json({
            error: error,
          });
        }
        response.json(createTokenResponse);
    })
  });

module.exports = Router;
