System.register(['angular2/platform/browser', "./service/logger.service", "./component/app/app.component"], function(exports_1) {
    var browser_1, logger_service_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [logger_service_1.Logger]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map