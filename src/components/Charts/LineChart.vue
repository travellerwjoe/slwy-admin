<template>
    <div style="width:100%;height:100%;" ref="lineChart" class="line-chart">
    </div>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: 'LineChart',
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
                    item.type = "line"
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
                let lineChart = echarts.init(this.$refs.lineChart, 'macarons');

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
                lineChart.setOption(option);
                window.addEventListener('resize', function() {
                    lineChart.resize();
                });
            });
        }
    };
</script>
