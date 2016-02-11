
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS, HTTP_BINDINGS, Http} from "angular2/http";
import {App} from "./app";
import { PortfolioDataService } from './service/portfoliodataservice';

bootstrap(App,[ROUTER_PROVIDERS, HTTP_PROVIDERS, PortfolioDataService]);




