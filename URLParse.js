import {NativeModules} from 'react-native';

export default class URLParse {
    static async parse(urlSpec: string) {
        const url = await NativeModules.RNURLParseModule.parse(urlSpec);
        if (url && url.query) {
            const expressions = url.query.split('&');
            const queryMap = {};
            for (let expression of expressions) {
                const values = expression.split('=');
                queryMap[values[0]] = (values[1] ? values[1] : null);
            }
            url['queryMap'] =  queryMap;
        }
        return url;
    }
}
