import React from 'react'
import BlueTitle from '../../component/BlueTitle'
import {Row, Col, Card, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import './index.css'
import {Parallax} from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'

const {Meta} = Card;

class Freedropship extends React.Component{
    render(){
        return (
        <div>
            <BlueTitle
            title='优趣直邮助手'
            content='帮助您0库存开启电商创业'/>
            {this.renderP1()}

            <Parallax
            animation={null}
            style={{ transform: 'translateX(0px)', opacity: 1 }}
            >
                {this.renderP2()}
            </Parallax>

            <Parallax
            animation={null}
            style={{ transform: 'translateX(0px)', opacity: 1 }}
            >
                {this.renderP3()}
            </Parallax>

            {this.renderP4()}

            <Parallax
            animation={null}
            style={{ transform: 'translateY(0px)', opacity: 1 }}
            >
                {this.renderP5()}
            </Parallax>

        </div>
        )
    }
    renderP1(){
        return (
                <QueueAnim type='bottom' duration='1000'>
                     <Row
                    className="block2 white intro-p1"
                    type='flex'
                    align='middle'
                    key='a'>
                    <Col md={{span:10,order:1}} sm={{span:24,order:2}} xs={{span:24,order:2}}>
                        <Parallax
                        animation={null}
                        style={{ transform: 'translateX(0px)', opacity: 1 }}
                        >
                        <h3>应用简介</h3>
                        <div>
                        直邮代发（Dropshipping） 是一种让你零库存快速开启电商创业的最酷方法。
                        而优趣直邮助手正是抖店平台中一款优秀的 Dropshipping 工具。
                        它能把你从电商创业的选品、上架、打包、发货的繁琐事务中解放出来，让你专注于市场营销、品牌推广，从而更有效地创造收入，扩大生意。
                        </div>
                        </Parallax>
                    </Col>
                    <Col md={{span:10,push:3,order:2}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                        <Parallax
                        animation={null}
                        style={{ transform: 'translateX(0px)', opacity: 1 }}
                        >
                            <img alt="" src={require('../../assets/introduce/img_3.png')}/>
                        </Parallax>
                    </Col>
                </Row>
            </QueueAnim>
        )
    }
    renderP2(){
        return (
            <Row
            className="white intro-p2"
            type='flex'
            align='middle'
            key='b'
            >
                <Col md={10} sm={24} xs={24}>
                    <h3 className='mobile-title'>在优趣工作</h3>
                    <img alt="" src={require('../../assets/introduce/img_2.png')}/>
                </Col>
                <Col md={{span:10,push:3}} sm={24} xs={24} className='intro-box'>
                    <h3>核心功能1 - 商品上架</h3>
                    <div>
                    你可以用优趣直邮助手快速地寻找供应商的商品，您可以按照您的需要选择是否调整，之后可以一键发布到你的抖店中。
                    </div>
                </Col>
            </Row>
        )
    }
    renderP3(){
        return (
            <Row
            className="white intro-p2"
            type='flex'
            align='middle'
            key='c'
            >
                <Col md={{span:10,order:1}} sm={{span:24,order:2}} xs={{span:24,order:2}} className='intro-box'>
                    <h3>核心功能2 - 订单履行</h3>
                    <div>
                    当有客户从你的抖网购买了一个由优趣直邮助手发布的商品后，你在优趣直邮助手中通过点击下单来给你的供应商下单后，供应商会直接将商品邮寄给你的购买者，节省你大量的时间。
                    </div>
                </Col>
                <Col md={{span:10,push:3,order:2}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                    <h3 className='mobile-title'>丰富的企业活动</h3>
                    <img alt="" src={require('../../assets/introduce/img.png')}/>
                </Col>
            </Row>
        )
    }
    renderP4(){
        return (
                <div className='white intro-p4'>
                    <h3>版本介绍</h3>
                    <Row>
                    <Parallax
                    animation={null}
                    style={{ transform: 'translateX(0px)', opacity: 1 }}
                    >
                        <Col md={10} sm={24} xs={24} className='intro-card-box'>
                            <Card hoverable='true' className='card'>
                                <Avatar
                                className='avatar'
                                src={require('../../assets/introduce/img_4.png')}/>
                                <div className='title'>免费版</div>
                                <div className='label'>CTO</div>
                                <div className='body'>优趣天下创始人，负责公司全球化的服务及产品研发策略以及公司的技术架构，全球最流行的安卓Python应用QPython作者，Google开发者南宁社区活跃组织者，前Zynga高级开发工程师、前绿盟科技产品经理、前新浪邮件高级开发工程师。</div>
                                <div className='contact'>
                                    <i className='git'></i>
                                    <i className='weibo'></i>
                                </div>
                            </Card>
                        </Col>
                        </Parallax>
                        <Parallax
                        animation={null}
                        style={{ transform: 'translateX(0px)', opacity: 1 }}
                        >
                        <Col md={{span:10,push:3}} sm={24} xs={24} className='intro-card-box'>
                            <Card hoverable='true' className='card'>
                                <Avatar
                                className='avatar'
                                src={require('../../assets/introduce/img_5.png')}/>
                                <div className='title'>付费版</div>
                                <div className='label'>COO</div>
                                <div className='body'>优趣天下联合创始人，著名开源邮件系统Exmail创始人、前zynga高级系统工程师、前platform系统运维经理、前智联招聘系统运维经理、前新浪邮件高级系统工程师。</div>
                                <div className='contact'>
                                    <i className='git'></i>
                                    <i className='weibo'></i>
                                </div>
                            </Card>
                        </Col>
                        </Parallax>
                    </Row>
                </div>

        )
    }
    renderP5(){
        return (
                <div className='white intro-p4 intro-p5'>
                    <h3>优质服务</h3>
                    <Row className='row' key='a'>
                        <Col md={5} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_6.png')}/>}
                            >
                               <Meta
                               title='Huang Mei'
                               description='Product Manager'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={{span:5,push:1}} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_11.png')}/>}
                            >
                               <Meta
                               title='Wei Zhang'
                               description='Product Manager'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={{span:5,push:2}} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_9.png')}/>}
                            >
                               <Meta
                               title='Qiu Weiming'
                               description='Fullstack Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={{span:5,push:3}} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_12.png')}/>}
                            >
                               <Meta
                               title='Meng Cunfang'
                               description='Python Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='row' key='b'>
                        <Col md={{span:5,push:3}} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_8.png')}/>}
                            >
                               <Meta
                               title='He Qiuling'
                               description='React Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={{span:5,push:4}} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_10.png')}/>}
                            >
                               <Meta
                               title='Yan Fufeng'
                               description='React Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={{span:5,push:5}} sm={12} xs={12}>
                            <Card
                            className='card'
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_7.png')}/>}
                            >
                               <Meta
                               title='Vince  Chou'
                               description='Marketing Analyst'
                               className='mess'
                               />
                            </Card>
                        </Col>
                    </Row>
                </div>

        )
    }
}

export default Freedropship;