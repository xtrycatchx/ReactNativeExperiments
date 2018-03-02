import { AsyncStorage } from 'react-native';

createData = (id, data) => {
    return await AsyncStorage.setItem(`@SamplePersistence:${id}`, data);
}

readData = id => {
    return await AsyncStorage.getItem(`@SamplePersistence:${id}`);
}

updateData = (id, data) => {
    let updatedData = readData(id);
    updatedData = data;
    return await AsyncStorage.setItem(`@SamplePersistence:${id}`, updatedData);
}

deleteData = id => {
    AsyncStorage.removeItem(`@SamplePersistence:${id}`);
}

exports.create = createData;
exports.read = readData;

exports.update = updateData;
exports.delete = deleteData;