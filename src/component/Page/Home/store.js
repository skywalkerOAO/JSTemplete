/*
 * @Description: 
 * @Author: Hex575A
 * @Date: 2022-02-11 14:04:56
 * @LastEditTime: 2022-06-08 10:20:53
 * @LastEditors: Please set LastEditors
 * @references: 
 */
import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import api_Path from '../../Api/index';
class Store {
    @observable userlist = "I'm remote Data"

    @action.bound getUsrInfo = async (params = {}) => {
        try {
            let res = await axios.post(api_Path.index_services, params)
            runInAction(() => {
                this.userlist = res.data.Data
            })
        } catch (error) {
            console.log(`获取失败，错误信息：${error}`)
        }
    }
}
export default new Store()