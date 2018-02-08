// https://youtu.be/eOa_OL4rEl0

const storage = [];

const hash = (str) => {
  let h = 0;
  const sl = str.length;

  if (sl === 0) {
    return h;
  }

  for (let i = 0; i < sl; i++) {
    h = (h << 1) + str.charCodeAt(i);
  }

  return h;
};

class HashTable {
  add(key, value) {
    const index = hash(key);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i].push(key);
          storage[index][i].push(value);
          inserted = true;
        }
      }

      if (inserted === false) {
        storage[index].push([key, value]);
      }

    }
  };

  remove(key) {
    var index = hash(key);

    if (storage[index].length === 1 && storage[index][0][0] === key) {

      delete storage[index];

    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  find(key) {
    var index = hash(key);

    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index];
        }
      }
    }
  };

};


const ht = new HashTable();

ht.add('Alex', '123-3455');
ht.add('Jhon', '252-2342');
ht.add('Jhon', '535-8898');
ht.add('Bob', '123-8635');
ht.add('Jake', '543-1243');

console.log(ht.find('Bob'));

console.log(storage);
