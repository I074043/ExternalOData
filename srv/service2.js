module.exports = function TestExternalOData() {
    this.on('getExternalData', async () => {
        const SapCfAxios = require('sap-cf-axios').default;
        const axios = SapCfAxios("Northwind");
        const response = await axios.get('/Experimental/OData/OData.svc/Products', {
            params: { format: 'json' },
            headers: { 'content-type': 'application/json' }
        });
        return response.data;
    });
}
