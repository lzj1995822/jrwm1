<template>
    <div class="upload">
        <group>
            <popup-picker title="开展地点：" :data="list" :columns="2" v-model="form.area" ref="picker3" :show-name="true" :display-format="formatValue"></popup-picker>
            <x-textarea title="文字描述：" v-model="form.content" :max="200"></x-textarea>
            <uploader
                :max="5"
                :images="images"
                :handle-click="false"
                :show-header="true"
                title="活动图片："
                :upload-url="uploadUrl"
                name="file"
                :params="params"
                :autoUpload="false"
                size="small"
                @upload-image="addFile('uploadForm', images)"
                ref="uploadForm"
            ></uploader>
            <uploader
                :max="4"
                :images="videos"
                :handle-click="false"
                :show-header="true"
                title="活动视频："
                :upload-url="uploadUrl"
                name="file"
                :params="params"
                :autoUpload="false"
                size="small"
                @upload-image="addFile('videoForm', videos)"
                ref="videoForm"
            ></uploader>
        </group>
        <x-button class="mint-cell login-btn" @click.native="login">确认上传</x-button>
    </div>
</template>

<script>
    import { XInput, Group, XButton, XTextarea, PopupPicker } from 'vux';
    import Uploader from 'vux-uploader';

    export default {
        name: "Upload",
        data() {
            return {
                form: {
                    area: []
                },
                list: [],
                images: [],
                videos: [],
                uploadUrl: 'http://47.254.44.188:8088/upload',
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
        created() {
            this.loadList();
        },
        methods: {
            addFile(formName, obj) {
                this.$vux.loading.show({text: '上传中'});
                let files = this.$refs[formName].$refs.input.files;
                for (let i = 0; i < files.length; i++) {
                    let formData = new FormData();
                    formData.append('file', files[i]);
                    this.$http('POST','upload', formData).then(
                        data => {
                            obj.push({url: `http://47.254.44.188:8088/files/${data}`, name: data});
                            if (i === (files.length - 1)) {
                                this.$vux.loading.hide();
                            }
                        }
                    )
                }

            },
            loadVaillage(townId){
                this.$http('POST', `queryCountryByTownId?townId=${townId}`).then(
                    data => {
                        data.forEach(item => {
                            this.list.push({
                                value: item.id,
                                name: item.name,
                                parent: `town${townId}`
                            })
                        })
                    }
                )
            },
            loadList() {
                this.$http('POST', 'queryTown').then(
                    data => {
                        data.forEach(item => {
                            this.list.push({
                                name: item.name,
                                value: `town${item.id}`,
                                parent: 0
                            });
                            this.loadVaillage(item.id)
                        })
                    }
                )
            },
            formatValue(value) {
                let item = this.list.filter(item => item.value == Number(value[1] || 0));
                return item[0] ? item[0].name : '';
            },
            login() {
                if (!this.form.area[1]) {
                    this.$vux.alert.show({
                        title: '验证',
                        content: '请选择开展地点！'
                    });
                    return;
                }
                let data = {
                    planId: this.bId,
                    resultPic: this.images.join('|'),
                    resultContent: this.form.content,
                    practiceId: this.form.area[1],
                    resultVideo: this.videos.join("|")
                }
                this.$http('POST', 'executePlan', data).then(
                    () => {
                        this.$vux.alert.show({
                            title: '结果',
                            content: '上传成功！'
                        });
                        this.$router.go(-1);
                    }
                )
            }
        },
        components: {
            XInput, Group, XButton, XTextarea, PopupPicker , Uploader
        },
        mounted() {
            document.getElementsByTagName("input")[0].multiple = true;
            document.getElementsByTagName("input")[1].accept = "video/*";
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
        background-color: #c72626 !important;
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
    .weui-dialog__hd {
        padding: 0 !important;
    }
</style>
