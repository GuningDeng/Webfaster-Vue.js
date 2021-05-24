const fetch = require('node-fetch');

const loadAllData = async () => {

    try {
        let response = await fetch(`https://api.publicapis.org/entries`);
        let json = await response.json();

        const { entries } = await json;

        const data = entries.map((item) => ({
            API: item?.API || undefined
        }));
        // console.log(data);
        return data;
    } catch (error) {

    }
}

module.exports = loadAllData();