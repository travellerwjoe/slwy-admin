<template>
    <div style="width:100%;height:100%;" ref="barChart" class="bar-chart">
    </div>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: 'BarChart',
        props: {
            data: {
                type: Object,
                required: true
            },
            direction: {
                validator(value) {
                    return ['vertical', 'horizontal'].includes(value)
                },
                default: 'vertical'
            },
        },
        data() {
            return {
                //
            };
        },
        computed: {
            series() {
                const captions = this.data.captions
                return this.data.series.map(item => {
                    const style = item.itemStyle
                    item.type = "bar"
                    item.data = item.data.map((dataItem, index) => {
                        if (typeof dataItem !== 'object') {
                            dataItem = {
                                value: dataItem
                            }
                        }
                        if (captions && captions[index]) {
                            dataItem.name = captions[index]
                        }
                        if (style) {
                            dataItem.itemStyle = JSON.parse(JSON.stringify(style))
                            for (var key in style.normal) {
                                if (typeof style.normal[key] === 'object' && style.normal[key] instanceof Array) {
                                    dataItem.itemStyle.normal[key] = style.normal[key][index]
                                }
                            }
                            for (var key in style.emphasis) {
                                if (typeof style.emphasis[key] === 'object' && style.emphasis[key] instanceof Array) {
                                    dataItem.itemStyle.emphasis[key] = style.emphasis[key][index]
                                }
                            }
                        }
                        return dataItem
                    })
                    return item
                })
            },
            captions() {
                return this.data.captions
            },
            legend() {
                return this.data.legend
            }
        },
        mounted() {
            console.log(this.legend)
            this.$nextTick(() => {
                let barChart = echarts.init(this.$refs.barChart, 'macarons');
                let xAxisData = [];
                let data1 = [];
                let data2 = [];
                for (let i = 0; i < 20; i++) {
                    xAxisData.push('类目' + i);
                    // data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                    // data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
                }
                const valueAxis = {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }
                const categoryAxis = {
                    type: 'category',
                    data: this.captions,
                    nameTextStyle: {
                        color: '#c3c3c3'
                    }
                }
                const option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        top: 0,
                        left: '2%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    legend: this.legend,
                    xAxis: this.direction === 'horizontal' ? valueAxis : categoryAxis,
                    yAxis: this.direction === 'horizontal' ? categoryAxis : valueAxis,
                    series: [...this.series]
                };
                barChart.setOption(option);
                window.addEventListener('resize', function() {
                    barChart.resize();
                });
            });
        }
    };
</script>
