<template>
    <div style="width:100%;height:100%;" ref="lineChart" class="pie-chart">
    </div>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: 'PieChart',
        props: {
            data: {
                type: Object,
                required: true
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
                    item.type = 'pie'
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
            legend() {
                return this.data.legend
            }
        },
        mounted() {
            this.$nextTick(() => {
                var pieChart = echarts.init(this.$refs.lineChart);
                const option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: this.legend,
                    series: [...this.series]
                };
                pieChart.setOption(option);
                window.addEventListener('resize', function() {
                    pieChart.resize();
                });
            });
        }
    };
</script>
