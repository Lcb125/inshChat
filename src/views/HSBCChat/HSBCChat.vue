<template>
    <div id="chat"  class="all">
      <el-container>
  
      <el-header class="header">
        <div class="title">
          投保小助手
          <!-- <span v-show="language=='en'">ChatGPT Stream</span>
          <span v-show="language=='cn'">智能聊天</span> -->
          
        </div>
  
      </el-header>
      <el-main class="main">
  
        <div style="overflow-y: auto" class="bigBox">
  
  
          <div
                  v-for="(item, index) in list" :key="index"
                  class="msgCss"
                  :style="{textAlign: item.align}"
          >
            <div class="left" v-if="item && item.align == 'left'">
              <img
  
                      style="
                  width: 44px;
                  height: 44px;
                  vertical-align: middle;
                  border-radius: 50%;
                  padding-right: 10px;
                "
                      src="../../assets/support.jpg"
                      alt=""
              />
              <div class="dianxiaoer"  v-if="item && item.link == ''">
                <span class="chatInfo"  style="background-color: #b8e46f;">
                    {{item.text}}
                </span>
                
              </div>
  
  
            </div>
  
            <div class="right" v-if="item && item.align == 'right'">
              <img
                      style="
                  width: 44px;
                  height: 44px;
                  vertical-align: middle;
                  border-radius: 50%;
                  padding-left: 10px;
                "
                      src="../../assets/user.jpg"
                      alt=""
              />
              <div  class="user" >
                <span class="chatInfo"  style="background-color: rgb(136, 205, 234);">
                    {{item.text}}
                </span>
                
                
              </div>
            </div>
  
          </div>
        </div>
  
      </el-main>
      <!-- <el-footer class="footer"> -->
  
        <div class="footer" style="width: 100%; height: 100%;">
          
          <el-select v-model="value" style="width: 80%; " placeholder="请选择产品">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div class="input">
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 1, maxRows: 5}"
                    class="input-with-select"
                    v-model="input3"
                    placeholder="请输入问题"
                    ref="serachBox">
            </el-input>
          </div>
          <div class="button">
            <el-button
                    :loading="buttonLoading"
                    @keydown.enter.native="handleMsg"
                    type="success"
                    size="small"
                    @click="handleMsg">
                    发送
              </el-button>
          </div>
        </div>
  
      <!-- </el-footer> -->
  
    </el-container>
    </div>
  </template>
  <script>
  import {getAnswer} from "@/api/accessInfo";
  import { Message } from 'element-ui';
  import axios from 'axios'
  // import VConsole from 'vconsole';
  // const vConsole = new VConsole();
  
  export default {
    // name: 'Chat',
    components: {
      // HelloWorld
    },
    data: () =>({
      input3: "",
      list: [],
      buttonLoading: false,
      answerLoading: false,
      dialogVisible: false,
      checkLoading: false,
      userNo: '',
      one: '获取响应失败',
      two: '请填入四位数访问码',
      three: '验证通过',
      four: '验证失败',
      five: '当前编号设备已满或次数用尽',
      six: '请填入你的访问码',
      seven: '请填写你的问题并选择产品',
      language: 'cn',
      selectForm: {},
      demoTitle: 'GPT问答',
      sendButton: '发送',
      check: '验证',
      selectLoading: false,
      selectDialogVisible: false,
      updateAccessInfo: {},
      options: [{
          value: 'WLP',
          label: 'WLP'
        }, {
          value: '附加汇享至臻定期寿险',
          label: '附加汇享至臻定期寿险'
        }, {
          value: '附加豁免保险费（2023）重大疾病保险',
          label: '附加豁免保险费（2023）重大疾病保险'
        }, {
          value: '汇佑康宁C款重大疾病保险',
          label: '汇佑康宁C款重大疾病保险'
        }, {
          value: '增利终身寿险（万能型）',
          label: '增利终身寿险（万能型）'
        }],
        value: ''
    }),
    created: function () {
        // document.addEventListener("keydown", (e) => {
        //   let key = window.event.keyCode;
        //   if (!this.loading) {
        //     // 13是enter键的键盘码 如果等于13 就调用click的登录方法
        //     // key == 13 &&
        //     this.handleMsg();
        //   }
        // });
      },
    methods: {
      async handleMsg() {
          // console.log(this.input3, "发送信息");
          if (this.input3 !== "" && this.value !== "") {
            this.buttonLoading = true;
            await this.list.push({ align: "right", text: this.input3 });
            this.scrollTop11();
            this.getMsg();
            this.input3 = "";
          }else{
            Message.warning(this.seven);
          }
        },
        getMsg() {
          let self = this;
          // 处理接口请求 返回需要的数据

          getAnswer(self.value,self.input3) 
                  .then(async (response) => {
                    console.log(response);

                    // 自行处理需要的数据
                    const msg = response.data.answer;
                    let listMsg = {
                        align: "left",
                        text: msg,
                        link: "",
                    };
                    self.buttonLoading = false;
                    await this.list.push(listMsg);
                    this.scrollTop11();
                  }).catch(function (error) {
                      console.log(error);
                      
                      Message.error('服务器异常，请稍后重试');
                  });
                  self.buttonLoading = false;
        },
        // 处理滚动条一直保持最下方
        scrollTop11() {
          setTimeout(()=>{
            console.log(`已把滚动条保持最下方`)
            const infoBox = document.getElementsByClassName("main");
            infoBox[0].scrollTop = infoBox[0].scrollHeight;
          },0)
        },
    }
  }
  </script>
  
  <style>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
  * {
      margin: 0;
      padding: 0;
    }
  
    html,body {
      width: 100%;
      height: 100%;
      
      /* margin-bottom: 10%; */
    }
  
    .all {
      width: 100%;
      height: 100%;
    }
  
    .el-header {
      background-color: #4a85d3;
      color: #333;
      text-align: center;
      padding: 0px 0px;
      font-size: 21px;
  
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .footer {
      /* padding: 0px 0px; */
      height: 73px;
      background-color: #ffffff;
    }
  
    .el-main {
      padding: 0px;
      background-color: #ffffff;
      color: #333;
      text-align: center;
      height: calc(100vh - 150px);
      font-size: 14px;
      /* font-size:calc(100vw * 100 / 1920); */
    }
  
  
    .dianxiaoer {
      padding: 10px;
      /* border-radius: 10px; */
      margin: 0px 70px 0px 50px;
    }
  
    .user {
      
      padding: 10px;
      /* border-radius: 10px; */
      margin: 0px 50px 0px 70px;
    }
    .input{
      width: 80%;
      height: 100%;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button{
      width: 20%;
      height: 100%;
      float: right;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chatInfo {
      text-align: left;
      padding: 4px;
      border-radius: 8px;
      display: inline-block;
    }
  
    .el-dialog__headerbtn {
      display: none;
    }

    .el-dialog__footer {
        padding: 10px 20px 20px;
        text-align: center;
        box-sizing: border-box;
}
  </style>
  