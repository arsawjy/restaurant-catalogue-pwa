import runtime from 'serviceworker-webpack-plugin';

const swRegister = async () => {
    if('serviceWorker' in navigator) {
        await runtime.register();
        return;
    }
    console.log('Service worker not supported in this browser');
};

export default swRegister;