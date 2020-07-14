storageService = {

     Add: function(item, storageKey) {

        var storageData = [];
    
        var existingStorage = localStorage.getItem(storageKey);
    
        if (existingStorage != null) {
            storageData = JSON.parse(existingStorage);
        }
    
        if (storageData.indexOf(item) == -1) {
            storageData.push(item);
        }

        localStorage.setItem(storageKey, JSON.stringify(storageData));

    },

    Remove: function (item, storageKey) {

        var existingStorage = localStorage.getItem(storageKey);

        if (existingStorage != null) {
            var storage = JSON.parse(existingStorage);
    
            storage = storage.filter(x => {
                return x != item;
            })
    
            localStorage.setItem(storageKey, JSON.stringify(storage));
        }
    },

     Exists(item, storageKey) {

        var existingStorage = localStorage.getItem(storageKey);
        var exists = false;
    
        if (existingStorage != null) {
            var parsed = JSON.parse(existingStorage);
            exists = parsed.indexOf(item) != -1
        }
    
        return exists;
    }

}