<template>
    <div style="width:100%;height:100%;" ref="gaugeChart" class="gauge-chart">
    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        name: 'GaugeChart',
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        computed: {
            series() {
                const captions = this.data.captions
                return this.data.series.map(item => {
                    const style = item.itemStyle
                    item.type = "gauge"
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
        },
        mounted() {
            let gaugeChart = echarts.init(this.$refs.gaugeChart);
            const option = {
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                series: this.series
            };
            option.series[0].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
            gaugeChart.setOption(option);
            window.addEventListener('resize', function() {
                gaugeChart.resize();
            });
        }
    };
</script>
