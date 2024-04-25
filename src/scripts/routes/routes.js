import Home from '../views/home';
import Detail from '../views/detail';
import Favorite from '../views/favorite';

const routes = {
    '/': Home,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default routes;
