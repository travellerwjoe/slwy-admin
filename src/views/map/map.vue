<template>
    <section>
        <Row>
            <Col span="8">
            <Card>
                <div slot="title">中国地图（气泡）</div>
                <ChinaMapBubble class="map-chart" :city-data="chinaMapBubbleData"></ChinaMapBubble>
            </Card>
            </Col>
            <Col span="12" class="padding-left-10">
            <Card>
                <div slot="title">中国地图</div>
                <ChinaMap class="map-chart" :data="chinaMapData"></ChinaMap>
            </Card>
            </Col>
        </Row>
    </section>
</template>

<script>
    import {
        ChinaMap,
        ChinaMapBubble
    } from '@c/Map'
    export default {
        data() {
            return {
                chinaMapBubbleData: [{
                    "name": "海门",
                    "value": [121.15, 31.89, 45] //横值，纵值，大小（可选）
                }, {
                    "name": "鄂尔多斯",
                    "value": [109.781327, 39.608266, 34]
                }, {
                    "name": "招远",
                    "value": [120.38, 37.35, 47]
                }, {
                    "name": "舟山",
                    "value": [122.207216, 29.985295, 22]
                }, {
                    "name": "齐齐哈尔",
                    "value": [123.97, 47.33, 74]
                }, {
                    "name": "广州",
                    "value": [113.23, 23.16, 138]
                }, {
                    "name": "盐城",
                    "value": [120.13, 33.38, 15]
                }, {
                    "name": "北京",
                    "value": [116.46, 39.92, 250]
                }, {
                    "name": "深圳",
                    "value": [114.07, 22.62, 141]
                }, {
                    "name": "赤峰",
                    "value": [118.87, 42.28, 16]
                }, {
                    "name": "青岛",
                    "value": [120.33, 36.07, 89]
                }, {
                    "name": "乳山",
                    "value": [121.52, 36.89, 18]
                }, {
                    "name": "金昌",
                    "value": [102.188043, 38.520089, 34]
                }, {
                    "name": "泉州",
                    "value": [118.58, 24.93, 21]
                }, {
                    "name": "莱西",
                    "value": [120.53, 36.86, 66]
                }, {
                    "name": "日照",
                    "value": [119.46, 35.42, 45]
                }, {
                    "name": "胶南",
                    "value": [119.97, 35.88, 23]
                }, {
                    "name": "南通",
                    "value": [121.05, 32.08, 54]
                }, {
                    "name": "拉萨",
                    "value": [91.11, 29.97, 22]
                }, {
                    "name": "云浮",
                    "value": [112.02, 22.93, 78]
                }, {
                    "name": "梅州",
                    "value": [116.1, 24.55, 23]
                }, {
                    "name": "文登",
                    "value": [122.05, 37.2, 78]
                }, {
                    "name": "上海",
                    "value": [121.48, 31.22, 218]
                }],
                chinaMapData: {
                    title: {
                        text: "全国流量分布",
                        subtext: "全国各省的PC/APP流量分布图",
                    },
                    dataRange: {
                        min: 0,
                        max: 2500,
                        text: ["高", "低"], // 文本，默认为数值文本,
                    },
                    legend:["PC", "Android", "IOS"],
                    // zoom: true,
                    series: [{
                            name: "PC",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            data: [{
                                    name: "北京",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "天津",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "上海",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "重庆",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "河北",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "河南",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "云南",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "辽宁",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "黑龙江",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "湖南",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "安徽",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "山东",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "新疆",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "江苏",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "浙江",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "江西",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "湖北",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "广西",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "甘肃",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "山西",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "内蒙古",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "陕西",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "吉林",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "福建",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "贵州",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "广东",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "青海",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "西藏",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "四川",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "宁夏",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "海南",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "台湾",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "香港",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "澳门",
                                    value: Math.round(Math.random() * 1000)
                                }
                            ]
                        },
                        {
                            name: "Android",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            data: [{
                                    name: "北京",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "天津",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "上海",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "重庆",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "河北",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "安徽",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "新疆",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "浙江",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "江西",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "山西",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "内蒙古",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "吉林",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "福建",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "广东",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "西藏",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "四川",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "宁夏",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "香港",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "澳门",
                                    value: Math.round(Math.random() * 1000)
                                }
                            ]
                        },
                        {
                            name: "IOS",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            data: [{
                                    name: "北京",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "天津",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "上海",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "广东",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "台湾",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "香港",
                                    value: Math.round(Math.random() * 1000)
                                },
                                {
                                    name: "澳门",
                                    value: Math.round(Math.random() * 1000)
                                }
                            ]
                        }
                    ]
                }
            }
        },
        components: {
            ChinaMap,
            ChinaMapBubble
        }
    }
</script>

<style>
    .map-chart {
        height: 400px;
    }
</style>
