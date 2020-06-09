import React, { Component } from 'react';
import NewMvTab from '../components/NewMvComponents/NewMvTab'
import NewMvPagination from '../components/NewMvComponents/NewMvPagination'

import {mvAll} from '../util/request'

class Mv extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            secitionData: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
            typeData: ['全部', '官方版', '原声', '现场版', '网易出品'],
            orderData: ['上升最快', '最热', '最新'],
            newMvData: [],
            area: '全部',
            type: '全部',
            order: '上升最快',
            limit: 8,
            currentPage: 1,
            count: 0  // 数据总数
        }
    }

    async getMvData() {
        if(this.state.newMvData.length!==0) {
           this.setState({
            newMvData: []
           })
        }
        const area = this.state.area
        const type = this.state.type
        const order = this.state.order
        const limit = this.state.limit
        const currentPage = this.state.currentPage
        const offset = (currentPage - 1)*limit
        const res = await mvAll(area, type, order, limit, offset)
        const data = res.data.data
        const count = res.data.count
        return {
            data, 
            count
        }
    }

    async componentWillMount() {
        const newMvData = await this.getMvData()
        this.setState({
            newMvData: newMvData.data,
            count: newMvData.count
        })
    }


    async changeSecition(secition) {
        await this.setState({
            area: secition
        })
        const newMvData = await this.getMvData()
        this.setState({
            newMvData: newMvData.data,
        })
    }

    async changeType(type) {
        await this.setState({
            type: type
        })
        const newMvData = await this.getMvData()
        this.setState({
            newMvData: newMvData.data,
        })
    }

    async changeOrder(order) {
        await this.setState({
            order: order
        })
        const newMvData = await this.getMvData()
        this.setState({
            newMvData: newMvData.data,
        })
    }

    async changeCurrentPage(page) {
        await this.setState({
            currentPage: page
        })
        const newMvData = await this.getMvData()
        this.setState({
            newMvData: newMvData.data,
        })
    }

    async changePageSize(limit) {
        await this.setState({
            limit
        })
        const newMvData = await this.getMvData()
        this.setState({
            newMvData: newMvData.data,
        })
    }

    goPlayMv(id) {
        // 跳转到 MV 播放页面
        this.props.history.push(`/mv/${id}`)
    }

    render() { 
        return ( 
            <div>
                <NewMvTab
                    secitionData={this.state.secitionData}
                    typeData={this.state.typeData}
                    orderData={this.state.orderData}
                    changeSecition={this.changeSecition.bind(this)}
                    changeType={this.changeType.bind(this)}
                    changeOrder={this.changeOrder.bind(this)}
                    
                />
                <NewMvPagination 
                    newMvData={this.state.newMvData}
                    total={this.state.count}
                    limit={this.state.limit}
                    changeCurrentPage={this.changeCurrentPage.bind(this)}
                    changePageSize={this.changePageSize.bind(this)}
                    goPlayMv={this.goPlayMv.bind(this)}
                />
            </div>
        );
    }
}
 
export default Mv;