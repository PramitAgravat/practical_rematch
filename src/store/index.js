import { init } from '@rematch/core';
import profile from './models';

const models = {
    profile,
};

const store = init({
    models,
});

export default store;