<template>
    <section>
        <Row>
            <Col span="6">
            <Card>
                <div slot="title">
                    <Icon type="stats-bars"></Icon>
                    柱状图
                </div>
                <div class="chart">
                    <BarChart :data="barChartData">
                    </BarChart>
                </div>
            </Card>
            </Col>
            <Col span="6" class="padding-left-10">
            <Card>
                <div slot="title">
                    <Icon type="stats-bars"></Icon>
                    柱状图（水平)
                </div>
                <div class="chart">
                    <BarChart :data="barChartData" direction="horizontal">
                    </BarChart>
                </div>
            </Card>
            </Col>
            <Col span="10" class="padding-left-10">
            <Card>
                <div slot="title">
                    <Icon type="pie-graph"></Icon>
                    饼状图
                </div>
                <div class="chart">
                    <PieChart :data="pieChartData">
                    </PieChart>
                </div>
            </Card>
            </Col>
        </Row>
        <Row class="margin-top-10">
            <Col span="10">
            <Card>
                <div slot="title">
                    <Icon type="ios-pulse"></Icon>
                    折线图
                </div>
                <div class="chart">
                    <LineChart :data="barChartData">
                    </LineChart>
                </div>
            </Card>
            </Col>
            <Col span="12" class="padding-left-10">
            <Card>
                <div slot="title">
                    <Icon type="speedometer"></Icon>
                    仪表盘
                </div>
                <div class="chart">
                    <GaugeChart :data="GaugeChartData">
                    </GaugeChart>
                </div>
            </Card>
            </Col>
        </Row>
        <Row class="margin-top-10">
            <Col span="22">
            <Card>
                <div slot="title">
                    <Icon type="steam"></Icon>
                    面积图
                </div>
                <div class="chart">
                    <AreaChart :data="AreaChartData">
                    </AreaChart>
                </div>
            </Card>
            </Col>
        </Row>
    </section>
</template>

<script>
    import {
        BarChart,
        PieChart,
        LineChart,
        AreaChart,
        GaugeChart
    } from '@c/Charts'
    export default {
        data() {
            return {
                barChartData: {
                    captions: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['PC访问', 'App访问']
                    },
                    series: [{
                        name: 'PC访问',
                        data: [{
                                value: 453682,
                                name: 'Mon',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            },
                            {
                                value: 879545,
                                name: 'Tues',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            },
                            {
                                value: 2354678,
                                name: 'Wed',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            },
                            {
                                value: 1598403,
                                name: 'Thur',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            },
                            {
                                value: 543250,
                                name: 'Fri',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            },
                            {
                                value: 1305923,
                                name: 'Sat',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            },
                            {
                                value: 1103456,
                                name: 'Sun',
                                itemStyle: {
                                    normal: {
                                        color: '#2d8cf0'
                                    }
                                }
                            }
                        ]
                    }, {
                        name: 'App访问',
                        data: [223333, 430029, 322110, 400331, 1022303, 2320039, 200320],
                        itemStyle: {
                            normal: {
                                color: '#64d572'
                            }
                        }
                    }]
                },
                pieChartData: {
                    captions: ['ios', 'android', 'pc', 'web', 'others'],
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['ios', 'android', 'pc', 'web', 'others']
                    },
                    series: [{
                        name: '访问来源',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [2103456, 1305923, 543250, 798403, 302340],
                        itemStyle: {
                            normal: {
                                color: ['#9bd598', '#ffd58f', '#abd5f2', '#ab8df2', '#e14f60']
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                },
                AreaChartData: {
                    captions: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    series: [{
                            name: '运营商/网络服务',
                            stack: '总量',
                            areaStyle: {
                                normal: {
                                    color: '#2d8cf0'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '银行/证券',
                            stack: '总量',
                            areaStyle: {
                                normal: {
                                    color: '#10A6FF'
                                }
                            },
                            data: [257, 358, 278, 234, 290, 330, 310]
                        },
                        {
                            name: '游戏/视频',
                            stack: '总量',
                            areaStyle: {
                                normal: {
                                    color: '#0C17A6'
                                }
                            },
                            data: [379, 268, 354, 269, 310, 478, 358]
                        },
                        {
                            name: '餐饮/外卖',
                            stack: '总量',
                            areaStyle: {
                                normal: {
                                    color: '#4608A6'
                                }
                            },
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '快递/电商',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: '#398DBF'
                                }
                            },
                            data: [820, 645, 546, 745, 872, 624, 258]
                        }
                    ]
                },
                GaugeChartData: {
                    series: [{
                            name: '入流量',
                            min: 0,
                            max: 1000,
                            detail: {
                                formatter: '{value}Mb+',
                                fontSize: 18,
                                offsetCenter: [0, '50px']
                            },
                            data: [{
                                value: 50,
                                name: '当前入流量'
                            }],
                            center: ['25%', '50%'],
                            radius: '80%',
                            title: {
                                offsetCenter: [0, '80px']
                            },
                            axisLine: {
                                lineStyle: {
                                    // color: [],
                                    width: 20
                                }
                            },
                            splitLine: {
                                length: 20
                            }
                        },
                        {
                            name: '出流量',
                            min: 0,
                            max: 1000,
                            detail: {
                                formatter: '{value}Mb+',
                                fontSize: 18,
                                offsetCenter: [0, '50px']
                            },
                            data: [{
                                value: 50,
                                name: '当前出流量'
                            }],
                            center: ['75%', '50%'],
                            radius: '80%',
                            title: {
                                offsetCenter: [0, '80px']
                            },
                            axisLine: {
                                lineStyle: {
                                    // color: [],
                                    width: 20
                                }
                            },
                            splitLine: {
                                length: 20
                            }
                        }
                    ]
                }
            }
        },
        components: {
            BarChart,
            PieChart,
            LineChart,
            AreaChart,
            GaugeChart
        }
    }
</script>

<style lang="less">
    .chart {
        height: 250px;
    }
</style>
