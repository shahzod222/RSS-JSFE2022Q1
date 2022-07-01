/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataType } from '../view/appView';

/* eslint-disable @typescript-eslint/ban-types */
class Loader {
    baseLink: string;
    options: Object;
    constructor(baseLink: string, options: Object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint = '', options = {} },
        callback = (data: DataType) => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Object, endpoint: string): string {
        const urlOptions: Object = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?` as string;
        let key: keyof typeof urlOptions;
        for (key in urlOptions) {
            url += `&${key}=${urlOptions[key]}`;
        }
        return url.replace('&', '');
    }

    load(method: string, endpoint: string, callback: Function, options: Object = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: Object) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
