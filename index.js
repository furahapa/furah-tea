class DataHolder {
    constructor() {
      this.data = {};
    }
  
    setData(key, value) {
      this.data[key] = value;
      console.log(`Set data for key '${key}'-`, value);
    }
  
    getData(key) {
      const value = this.data[key];
      console.log(`Retrieved data for key '${key}':`, value);
      return value;
    }
  }
  
  // Example usage:
  const dataHolder = new DataHolder();
  
  dataHolder.setData('name', 'John Doe');
  dataHolder.setData('age', 25);
  
  const retrievedName = dataHolder.getData('name');
  const retrievedAge = dataHolder.getData('age');
  const retrievedUnknown = dataHolder.getData('unknownKey');
  
  console.log('Retrieved data for unknownKey:', retrievedUnknown);
  