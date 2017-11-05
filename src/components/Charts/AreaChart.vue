<template>
    <div style="width:100%;height:100%;" ref="areaChart" class="area-chart">
    </div>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: 'AreaChart',
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
            const valueAxis = {
                type: 'value'
            }
            const categoryAxis = {
                type: 'category',
                boundaryGap: false,
                data: this.captions,
            }
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '3%',
                    left: '1.2%',
                    right: '1%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: categoryAxis,
                yAxis: valueAxis,
                series: this.series
            };
            const areaChart = echarts.init(this.$refs.areaChart);
            areaChart.setOption(option);
            window.addEventListener('resize', function() {
                areaChart.resize();
            });
        }
    };
</script>