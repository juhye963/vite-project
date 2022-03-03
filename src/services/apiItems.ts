import { BackendApiItem } from './backend';

const apiItems: Array<BackendApiItem> = [
    {
        name: 'AUTH_LOGIN',
        methods: 'get',
        endpoint: '/login' // 현 단계에서는 페이커 사용할것임
    }
]

export function getApiItem (name: string): BackendApiItem|undefined {
    return apiItems.find((apiItem) => {return apiItem.name == name});
}