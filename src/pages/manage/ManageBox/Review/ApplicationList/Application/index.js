import React from 'react'
import {Anchor, Avatar, Badge, Card, Cascader, DatePicker, Descriptions, Input, Slider} from 'antd';
import {MAJORANDCLASS} from '../../../../../constants/baseInfo'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';


// antd组件结构
const {TextArea} = Input;
const {Link} = Anchor;
const {Meta} = Card;


export default function Application() {

    const handleDateChange = (value) => {
        console.log(value);
    }

    return (
        <div style={{display: "flex"}}>
            <div>
                <Descriptions title="" bordered={true} column={2}>
                    <Descriptions.Item label="姓名">
                        <Input placeholder="请填写姓名"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="性别">
                        <Input placeholder="请填写性别"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="联系方式">
                        <Input placeholder="请填写联系方式"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="兴趣爱好" span={2}>
                        <Input placeholder="请填写兴趣爱好"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="学院/专业/班级">
                        <Cascader options={MAJORANDCLASS} defaultValue={['学院', '专业', '班级']}
                                  onChange={(value) => {
                                      console.log(value);
                                  }}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="生日">
                        <DatePicker onChange={handleDateChange} bordered={false} placeholder="请选择生日" locale/>
                    </Descriptions.Item>
                    <Descriptions.Item label="自我评价" span={2}>
                        沟通能力：<Slider defaultValue={80} disabled={false}/>
                        表达能力：<Slider defaultValue={80} disabled={false}/>
                        合作能力：<Slider defaultValue={80} disabled={false}/>
                        抗压能力：<Slider defaultValue={80} disabled={false}/>
                        <TextArea rows={4}/>
                    </Descriptions.Item>
                    <Descriptions.Item label="加入社团的期望" span={2}>
                        <TextArea rows={4}/>
                    </Descriptions.Item>
                    <Descriptions.Item label="面试结果评价">
                        <Input placeholder="请填写兴趣爱好"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="纳新审核结果">
                        <Badge status="processing" text="审核中"/>
                    </Descriptions.Item>
                </Descriptions>
            </div>

            <div>
                <Card
                    style={{width: 300}}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        </div>
    )
}