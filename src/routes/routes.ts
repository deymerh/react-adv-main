import { lazy, LazyExoticComponent } from "react";
import {Nolazy} from '../lazyload-module/pages/Nolazy';

type JSXComponent = () => JSX.Element;

interface Routes {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(()=> import(/* wecpackChuckName: "LazyPage1" */ '../lazyload-module/layout/Lazylayout'));

export const routes: Routes[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: Nolazy,
        name: 'No - lazyload'
    }
]