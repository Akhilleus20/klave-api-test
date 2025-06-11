import { Notifier, JSON, HttpRequest, HTTP } from '@klave/sdk';
import { ErrorMessage, DataResult } from './types';


/**
 * @query
 */
export function grabData(): void {

    const queryHttp: HttpRequest = {
        hostname: 'http://api.zippopotam.us',
        port: 443,
        path: '/us/98121',
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