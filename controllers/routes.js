'use strict';
let app = app || {};

// route each url here to link controller function
page('/', app.homepage.hideElements);
page('/about', app.aboutController.hideMain);
page();
