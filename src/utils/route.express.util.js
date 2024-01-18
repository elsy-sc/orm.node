function use(app, routes) {
    if (!Array.isArray(routes)) routes = [routes];
    routes.forEach((route) => {
        app.use('/' + process.env.APP_NAME|| 'app', route);
    });
}

exports.use = use;