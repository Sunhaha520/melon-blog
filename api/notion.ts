import axios from 'axios'

export async function getDatabaseData() {
    return axios.post('https://api.notion.com/v1/databases/dac877360d264a8a86a8da23eb2de5a7/query', {}, {
        proxy: {
            protocol: 'http',
            host: '127.0.0.1',
            port: 7890,
        },
        headers: {
            'Authorization': 'Bearer secret_gGr9EzrWixlO2Fn96tqxGtuYDYr0zXAIWLjtyh0ndz0',
            'Notion-Version': '2022-06-28'
        }
    })
    // const res = await fetch('https://api.notion.com/v1/databases/dac877360d264a8a86a8da23eb2de5a7/query', {
    //     method: 'POST',
    //     cache: 'no-cache',
    //     headers: {
    //         'Authorization': 'Bearer secret_gGr9EzrWixlO2Fn96tqxGtuYDYr0zXAIWLjtyh0ndz0',
    //         'Notion-Version': '2022-06-28'
    //     }
    // })
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }
    // return res.json()
}

export async function listPageBlock(id: string) {
    return axios.get(`https://api.notion.com/v1/blocks/${id}/children`, {
        proxy: {
            protocol: 'http',
            host: '127.0.0.1',
            port: 7890,
        },
        headers: {
            'Authorization': 'Bearer secret_gGr9EzrWixlO2Fn96tqxGtuYDYr0zXAIWLjtyh0ndz0',
            'Notion-Version': '2022-06-28'
        }
    })
    // const res = await fetch(`https://api.notion.com/v1/blocks/${id}/children`, {
    //     method: 'GET',
    //     cache: 'no-cache',
    //     headers: {
    //         'Authorization': 'Bearer secret_gGr9EzrWixlO2Fn96tqxGtuYDYr0zXAIWLjtyh0ndz0',
    //         'Notion-Version': '2022-06-28'
    //     }
    // })
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }
    // return res.json()
}
