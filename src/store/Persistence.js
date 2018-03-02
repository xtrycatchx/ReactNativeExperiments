import { AsyncStorage } from 'react-native';

const createData = (id, data) => AsyncStorage.setItem(`@SamplePersistence:${id}`, data);

const readData = id => AsyncStorage.getItem(`@SamplePersistence:${id}`);

const updateData = (id, data) => {
    let updatedData = readData(id);
    updatedData = data;
    return AsyncStorage.setItem(`@SamplePersistence:${id}`, updatedData);
}

const deleteData = id => AsyncStorage.removeItem(`@SamplePersistence:${id}`);

exports.createRecord = createData;
exports.readRecord = readData;
exports.updateRecord = updateData;
exports.deleteRecord = deleteData;