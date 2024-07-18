function getRouter(file) {
    return require(`../routes/${file}`);
}

module.exports = getRouter;