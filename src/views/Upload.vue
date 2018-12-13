<template>
    <div class="upload">
        <group>
            <selector title="开展地点：" v-model="form.area" :options="list"></selector>
            <x-textarea title="文字描述：" v-model="form.des" :max="200"></x-textarea>
            <uploader
                :max="9"
                :images="images"
                :handle-click="false"
                :show-header="true"
                title="活动图片："
                :upload-url="uploadUrl"
                name="img"
                :params="params"
                :autoUpload="false"
                size="small"
                @upload-image="addFile"
                ref="uploadForm"
            ></uploader>
        </group>
        <x-button class="mint-cell login-btn" @click.native="login">确认上传</x-button>
    </div>
</template>

<script>
    import { XInput, Group, XButton, XTextarea, Selector } from 'vux';
    import Uploader from 'vux-uploader';

    export default {
        name: "Upload",
        data() {
            return {
                form: {},
                list: ['呢接口', 'asd', 'asdas'],
                images: [],
                uploadUrl: '555',
                params: {},
            }
        },
        computed: {
            type() {
                return this.$route.params.type;
            },
            bId() {
                return this.$route.params.id;
            }
        },
        methods: {
            preview() {

            },
            addFile(form) {
                console.log(this.$refs.uploadForm.$refs.input.files, document.getElementsByTagName("input"))
                this.images = this.$refs.uploadForm.$refs.input.files;

                // this.$refs.input.click();
            },
            removeImage() {

            }
        },
        components: {
            XInput, Group, XButton, XTextarea, Selector, Uploader
        },
        mounted() {
            document.getElementsByTagName("input")[0].multiple = true;
        }
    }
</script>

<style>
    .weui-uploader__title {
        text-align: left !important;
    }
    .upload .weui-label {
        text-align: left;
    }
    .upload {
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .upload .mint-cell {
        background-color: #c72626;
        color: #fff;
        width: 90%;
        height: 1rem;
        margin: .5rem auto;
        padding: 0 .4rem;
        border: 0;
        border-radius: .5rem;
    }
    .upload .weui-cells {
        margin-top: 0 !important;
    }
</style>
