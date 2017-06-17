import idbKeyval from 'idb-keyval';
import _ from 'underscore';

export function IndexedDBStorage() {
  'ngInject';

  return {
    get: function() {
      return idbKeyval.get('DIM-data').then((value) => {
        // Fall back to local storage as a migration aid
        if (!value || _.isEmpty(value)) {
          return JSON.parse(localStorage.getItem('DIM'));
        }
        return value;
      });
    },

    set: function(value) {
      return idbKeyval.set('DIM-data', value);
    },

    supported: true,
    enabled: true,
    name: 'IndexedDBStorage'
  };
}
