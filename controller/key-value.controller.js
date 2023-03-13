const {keyValue, KeyValue} = require('../database');
const {wrapWithErrorHandler} = require('../util');

get = async (req, res) => {
    const {key} = req.params;
    if (!key) {
        res.status(400).json({error: 'key is required'});
        return;
    }

    const result = keyValue.findOne({
        where: {key}
    });

    res.status(200).json({result});
}

insertOrUpdate = async (req, res) => {
    const {key, value} = req.params;
    if (!key || !value) {
        res.status(400).json({error: 'key and value are required'});
        return;
    }

    await KeyValue.upsert({key, value});

    res.status(200).json({result: 'success'});
}

remove = async (req, res) => {
     const {key} = req.params;
    if (!key) {
        res.status(400).json({error: 'key is required'});
        return;
    }

    await KeyValue.destroy({
        where: {key}
    })

    res.status(200).json({result: 'success'});
}

module.exports = wrapWithErrorHandler({
    get, insertOrUpdate, remove
})