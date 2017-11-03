<template>

</template>

<script>
    const isEmptyObject = obj => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false
            }
        }
        return true
    }
    export default {
        methods: {
            generateDemoCode() {
                let code = ''
                const eachVNodes = VNodes => {
                    VNodes.forEach(VNode => {
                        const options = VNode.componentOptions
                        const data = VNode.data
                        const propsData = options && options.propsData
                        const tag = options ? options.tag : VNode.tag
                        const children = options ? options.children : VNode.children
                        const text = typeof VNode.text === 'string' &&  VNode.text.trim()

                        //空VNode节点
                        if(!tag && !options && !children && !text){
                            return
                        }

                        if(tag) {
                            code += '<' + tag
                        }

                        if (!isEmptyObject(propsData)) {
                            for (const key in options.propsData) {
                                const val = options.propsData[key]
                                
                                if (typeof val === 'string'){
                                    code += ` ${key}="${val}"`
                                }else{
                                    code += ` :${key}="${val}"`                                    
                                }
                            }
                        }

                        if(data && !isEmptyObject(data.attrs)) {
                            for (var key in data.attrs){
                                code += ` ${key}="${data.attrs[key]}"`
                            }
                        }

                        if(data && data.staticClass){
                            code += ` class="${data.staticClass}"`
                        }



                        if (children) {
                            code += '>\n'

                            if(text) {
                                code += text + '\n'
                            }

                            eachVNodes(children)
                            code += `</${tag}>\n`
                        }else{
                            if(text) {
                                // code += '>\n'
                                code += text + '\n'
                               if(tag) {
                                    code += `</${tag}>\n`
                               }
                            } else {
                                code += ' />\n'
                            }
                        }
                    })
                }

                try{
                    eachVNodes(this.$slots.default)
                }catch(e){
                    console.warn(e)
                }
                console.log(code)
            }
        },
        beforeCreate () {
            console.log(this.$slots.default)
            this.generateDemoCode()
        }
    }
</script>

<style>

</style>
