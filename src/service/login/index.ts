import request from '../request';
import { LoginParamsType } from './type';

enum Api {
	login = '/login',
	getMenuList = '/role/menulist',
}

// 登录
export const reqLogin = (data: LoginParamsType) => request.post({ url: Api.login, data });

// 根据角色id获取菜单
export const reqGetMenuList = (params: { role_id: string }) =>
	request.get({ url: Api.getMenuList, params });
