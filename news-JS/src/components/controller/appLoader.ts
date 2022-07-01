import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3000231c228d4d13b42806036c3a767f',
        });
    }
}

export default AppLoader;
