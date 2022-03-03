import axios from 'axios';
import { getApiItem } from './apiItems';
import { env } from './function';

export interface BackendApiItem {
    name: string
    methods: string
    endpoint: string
}

function run (
    apiName: string
) {
    const apiItem = getApiItem(apiName);
    if (!apiItem) {
        return Promise.reject(new Error('CANNOT FIND API'));
    }

    const faker = env(`JU_FAKER_${apiName}_API`);
    const endpoint = faker ? faker : apiItem?.endpoint ?? '';

    switch(apiItem?.methods.toUpperCase()) {
        case 'GET':
            return axios.get(endpoint);
        case 'POST':
            return  axios.post(endpoint);
        default:
            return Promise.reject(new Error('CANNOT FIND API METHODS'));
    }
}

export default {
    run
}

