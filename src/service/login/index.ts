import request from '../request';
import { LoginParamsType } from './type';

enum Api {
	login = '/login',
}

export const reqLogin = (data: LoginParamsType) => request.post({ url: Api.login, data });
