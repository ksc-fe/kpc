module.exports = (config) => {
    const rules = config.module.rules;

    // ['babel', 'vdt', 'stylus', 'css', 'vue'].forEach(rule => {
    rules.store.forEach(rule => {
        // const uses = rules.get(rule).uses;
        if (rule.name === 'gif' || rule.name === 'file') return;
        const uses = rule.uses;
        const entries = uses.entries();
        uses.clear().end().use('thread').loader('thread-loader');
        for (let key in entries) {
            uses.set(key, entries[key]);
        }
    });

    return config;
};
