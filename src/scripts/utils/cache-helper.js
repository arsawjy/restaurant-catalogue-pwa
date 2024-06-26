const CACHE_NAME = new Date().toISOString();
const CacheHelper = {
    async cachingAppShell(request) {
        const cache = await this._openCache();
        cache.addAll(request);
    },

    async deleteOldCache() {
        const cacheNames = await cache.keys();
        cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((filteredName) => cache.delete(filteredName));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);

        if(response) {
            return response;
        }
        return this._fetchRequest(request);
    },

    async _openCache() {
        return caches.open(CACHE_NAME);
    },

    async _fetchRequest(request) {
        const response = await fetch(request);

        if (!response || response.status !== 200) {
            return response;
        }
        await this._addCache(request);
        return response;
    },

    async _addCache(request) {
        const cache = await this._openCache();
        cache.add(request);
    },
};

export default CacheHelper;