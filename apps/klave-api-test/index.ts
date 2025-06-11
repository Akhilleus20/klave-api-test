import { Notifier, JSON, HttpRequest, HTTP } from '@klave/sdk';
import { ErrorMessage, DataResult } from './types';


/**
 * @query
 */
export function grabData(): void {

    const queryHttp: HttpRequest = {
        hostname: 'vpic.nhtsa.dot.gov',
        port: 443,
        path: '/api/vehicles/getallmakes?format=json',
        headers: [],
        body: '',
        method: 'GET',
        version: 'HTTP/1.1',
    };

    const response = HTTP.request(queryHttp);
    if (!response) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `HTTP call went wrong !`
        });
        return;
    }

    const ratesData = JSON.parse<string>(response.body);
    Notifier.sendJson<DataResult>({
        success: true,
        data: ratesData
    });
};