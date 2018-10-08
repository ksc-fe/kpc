export default {
    expandedKeys: [],
    selectedKey: '',

    isExpanded(key) {
        return this.expandedKeys.indexOf(key) > -1;
    },
};
