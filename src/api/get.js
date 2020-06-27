import axios from 'axios';

const Url = 'http://140.114.87.70:3000';

export function getinfo(user_id) {
    let url = `${Url}/get/info?user_id=${user_id}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
