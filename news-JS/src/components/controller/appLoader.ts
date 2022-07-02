import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'a628c8597cf54cf0bfd3b0c8666e1c59',
        });
    }
}

export default AppLoader;
