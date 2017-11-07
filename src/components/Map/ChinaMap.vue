<template>
    <div class="china-map" ref="chinaMap">
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "ChinaMap",
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        computed: {
            series() {
                return this.data.series.map(item => {
                    item.type = "map"
                    item.mapType = "china"
                    if (typeof this.data.zoom === 'boolean') {
                        item.roam = this.data.zoom || false
                    }
                    return item;
                });
            },
            title() {
                if (typeof this.data.title === 'object') {
                    this.data.title.x = 'center'
                }
                return this.data.title
            },
            dataRange(){
                return this.data.dataRange
            },
            legend(){
                return this.data.legend
            }
        },
        mounted() {
            const chinaMap = echarts.init(this.$refs.chinaMap);

            chinaMap.setOption({
                title: this.title,
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    orient: "vertical",
                    x: "left",
                    data:this.legend
                },
                dataRange: Object.assign({
                    x: "left",
                    y: "bottom",
                    calculable: true
                }, this.dataRange),
                toolbox: {
                    show: true,
                    orient: "vertical",
                    x: "right",
                    y: "center",
                    feature: {
                        mark: {
                            show: true
                        },
                        // dataView: {
                        //     show: true,
                        //     readOnly: false
                        // },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                roamController: {
                    show: true,
                    x: "right",
                    mapTypeControl: {
                        china: true
                    }
                },
                series: this.series
            });
        }
    };
</script>

<style>

</style>
