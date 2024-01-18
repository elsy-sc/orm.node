function use(app, express) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

exports.use = use;