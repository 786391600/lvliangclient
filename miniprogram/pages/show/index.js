// pages/Testpage/OrderNumber/OrderNumber.js


const app = getApp()
const until = require('../../until/index.js')
var WxParse = require('../../until/wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    var article = `<p>
    <br/>
</p>
<section data-id="93923" data-tools="135编辑器" class="_135editor" style="border: 0px none;">
    <section style="width: 100%;">
        <section class="_135editor" style="border: 0px none;">
            <section style="text-align: center;">
                <section style="width: 40%;display: inline-block;margin:0px auto 20px auto;">
                    <img style="width: 100%;display: block;" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9naWYvN1FSVHZrSzJxQzRMQk9qajRVYjR6ZmJoeW9CWE1DMGljeEtuTmhDTGdmRWliMVVnV0lPSHl5WlNHbEUwUlNsRGlhRG9CdVA3bUJId1VCa3dGYUhGem9qU3cvMD93eF9mbXQ9Z2lm"/>
                </section>
                <section style="width:100%;">
                    <img style="width: 100%;display: block;" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvN1FSVHZrSzJxQzRMQk9qajRVYjR6ZmJoeW9CWE1DMGljam9pYm4yMXVwQkxwTlFlejM3eE5DaWNTaE5VdVZJSmRqSURLN0o4eWlhNDczbVhCMFA1bDk0VjFBLzA/d3hfZm10PXBuZw=="/>
                </section>
                <section data-autoskip="1" class="135brush" style="text-align: justify;font-size: 14px;letter-spacing: 1.5px;line-height: 1.75em;color: #181818;padding:1.6em 10px 0px 10px;">
                    <p>
                        
					金九银十，丹桂飘香，中国锦鲤，天选之子。
                    </p>
                    <p>
                        
					135编辑器明天，选择是你。所以，别再转发锦鲤了，转发这条公众号，我们正在找最6的那个，你先来认识下我好吗？
                    </p>
                    <p>
                        
					（不想认识？那我只能使用我的大叉了）
                    </p>
                </section>
            </section>
        </section>
        <section style="height: 2em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="text-align: center;">
                <section style="width:100%;">
                    <img style="width: 100%;display: block;" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9qcGcvN1FSVHZrSzJxQzRMQk9qajRVYjR6ZmJoeW9CWE1DMGljNTF3eVJxVWlhZHVXSjZ0UUZ2SERkVkNqbkY2c2ljMGM5cHRuRWhXZFEyeGljTUJKNzBQTU9KNnVRLzA/d3hfZm10PWpwZWc="/>
                    <section style="text-align: right;font-size: 16px;letter-spacing: 1.5px;color: #181818;margin: 10px auto;">
                        公司前台
                    </section>
                </section>
            </section>
        </section>
        <section style="height: 1em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="width: 100%;">
                <section style="display: flex;justify-content: space-between;align-items: flex-start;">
                    <section style="height: 0px;width: 0px;border-top:0px solid transparent;border-left:28px solid #2dd489;border-bottom:25px solid transparent;z-index: 999;"></section>
                    <section style="width: 25px;height: 28px;border: 3px solid #2dd489;border-left: none;border-bottom: none;"></section>
                </section>
                <section style="width: 6em;margin-left: 1em;margin-top: -0.5em;">
                    <img style="width: 100%;display: block;" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvN1FSVHZrSzJxQzRMQk9qajRVYjR6ZmJoeW9CWE1DMGljOE5PUVhKSnpDaWFTTGJESlFJMEZtalZjd1phNnFPTHlscEpDdGJZSXJ3bXd4Z0pTSExrZlVpY0EvMD93eF9mbXQ9cG5n"/>
                </section>
                <section data-autoskip="1" class="135brush" style="text-align: justify;font-size: 14px;letter-spacing: 1.5px;line-height: 1.75em;color: #181818;padding:1em 10px 0px 10px;">
                    <p>
                        
					135编辑器是一个微信文章美化工具，操作简单方便， 旨在提供丰富的样式，精美的模板。编辑文章时，就像拼积木一样，挑选样式，调整文字，搭配颜色，最后形成排版优质的文章，让读者更赏心悦目。
                    </p>
                </section>
                <section style="display: flex;justify-content: space-between;align-items: flex-start;margin-top: -1em;">
                    <section style="width: 25px;height: 28px;border: 3px solid #2dd489;border-right: none;border-top: none;"></section>
                    <section style="width: 25px;height: 28px;border: 3px solid #2dd489;border-left: none;border-top: none;"></section>
                </section>
            </section>
        </section>
        <section style="height: 1em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="text-align: center;">
                <section style="display: inline-block;margin:20px auto;border: 2px solid #2dd489;border-bottom-style:dashed ;">
                    <section style="text-align: center;padding: 4px 1em;letter-spacing: 1.5px;font-weight: bold;">
                        招聘岗位
                    </section>
                </section>
            </section>
        </section>
        <section class="_135editor" style="border: 0px none;">
            <section style="padding:0px;">
                <section style="margin-bottom: -39px;margin-left:5px;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);">
                    <section style="width:58px;height:58px;margin:20px 0px;background-color:rgb(254,254,254);border-radius:100%;margin-bottom:-35px;margin-left:-4px;"></section>
                    <section style="margin-bottom:-48px;margin-left:4px; width:56px; height:28px; background-color:rgb(254,254,254);border-radius:30px 30px 0 0;border: 2px dashed #2dd489;border-bottom: none;transform: rotate(140deg);-webkit-transform: rotate(140deg);-moz-transform: rotate(140deg);-o-transform: rotate(140deg);"></section>
                    <section class="135brush" data-brushtype="text" style="width:45px;height:45px;background-color:#2dd489;border-radius:100%;font-size: 26px;color: #fff;text-align: center;line-height: 45px;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);">
                        
					聘
                    </section>
                </section>
                <section style="padding-left:0.5em;">
                    <section style="border: 2px dashed #2dd489;border-radius:6px ;padding:0px 1em 1em 1em;">
                        <section class="135brush" data-brushtype="text" style="font-size: 18px;padding:0.7em 0px 20px 2.6em;font-weight: bold;">
                            <strong>前台</strong>
                        </section>
                        <section data-autoskip="1" class="135brush" style="font-size: 14px;text-align: justify;letter-spacing:1.5px;line-height: 1.75em;">
                            <p>
                                
					岗位要求：
                            </p><br/>
                            <p>
                                
					1、18岁以上，高中及以上学历；
                            </p>
                            <p>
                                
					2、具有顾客满意意识，应变能力较好，具有主动性，灵活性，团队协作能力；
                            </p>
                            <p>
                                
					3、身体健康、能承受一定的工作压力；
                            </p>
                            <p>
                                
					4、电脑操作熟练
                            </p><br/>
                            <p>
                                
					工作地点：巴林左旗辽文化产业园区1号新视界国际影城.
                            </p><br/>
                            <p>
                                
					试用期一个月，试用期无工资，达到二星级标准考核 认定的转正，并补发试用期工资。
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <section class="_135editor" style="border: 0px none;">
            <section style="padding:1em 0px;">
                <section style="margin-bottom: -39px;margin-left:5px;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);">
                    <section style="width:58px;height:58px;margin:20px 0px;background-color:rgb(254,254,254);border-radius:100%;margin-bottom:-35px;margin-left:-4px;"></section>
                    <section style="margin-bottom:-48px;margin-left:4px; width:56px; height:28px; background-color:rgb(254,254,254);border-radius:30px 30px 0 0;border: 2px dashed #2dd489;border-bottom: none;transform: rotate(140deg);-webkit-transform: rotate(140deg);-moz-transform: rotate(140deg);-o-transform: rotate(140deg);"></section>
                    <section class="135brush" data-brushtype="text" style="width:45px;height:45px;background-color:#2dd489;border-radius:100%;font-size: 26px;color: #fff;text-align: center;line-height: 45px;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);">
                        
					聘
                    </section>
                </section>
                <section style="padding-left:0.5em;">
                    <section style="border: 2px dashed #2dd489;border-radius:6px ;padding:0px 1em 1em 1em;">
                        <section class="135brush" data-brushtype="text" style="font-size: 18px;padding:0.7em 0px 20px 2.6em;font-weight: bold;">
                            <strong>设计师</strong>
                        </section>
                        <section data-autoskip="1" class="135brush" style="font-size: 14px;text-align: justify;letter-spacing:1.5px;line-height: 1.75em;">
                            <p>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					岗位要求：
                            </p><br/>
                            <p>
                                
					1、大专及以上学历，室内设计、园林、环境艺术设
					计、建筑装饰等相关专业；
                            </p>
                            <p>
                                
					2、应届毕业生，有装饰行业工作经验者优先；
                            </p>
                            <p>
                                
					3、熟练使用CAD、PS、3D等绘图软件及相关办公
					软件；
                            </p>
                            <p>
                                
					4、较强的审美感及平面设计技巧；
                            </p>
                            <p>
                                
					5、敬业踏实，认真负责，细心严谨，有良好的职业
					素质和团队精神及沟通协调能力；
                            </p>
                            <p>
                                
					6、需要具有吃苦耐劳的精神，对设计有浓厚的兴趣
					以及远大的抱负。
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <section style="height: 2em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="text-align: center;">
                <section style="width:100%;">
                    <img style="width: 100%;display: block;" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9qcGcvN1FSVHZrSzJxQzRMQk9qajRVYjR6ZmJoeW9CWE1DMGljNWRwenl0NlNYVmF5R1NUQmRseWlidlFCbjFVVGlhaWFlaWFwQkNhUVYzZFg0ekgyZ3Zra2lib1A4U0EvMD93eF9mbXQ9anBlZw=="/>
                    <section style="text-align: right;font-size: 16px;letter-spacing: 1.5px;color: #181818;margin: 10px auto;">
                        公司办公区
                    </section>
                </section>
            </section>
        </section>
        <section style="height: 1em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="text-align: center;">
                <section style="display: inline-block;margin:20px auto;border: 2px solid #2dd489;border-bottom-style:dashed ;">
                    <section style="text-align: center;padding: 4px 1em;letter-spacing: 1.5px;font-weight: bold;">
                        福利待遇
                    </section>
                </section>
            </section>
        </section>
        <section style="height: 1em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="padding:0px 1em 1em 1em;">
                <section data-autoskip="1" class="135brush" style="font-size: 14px;text-align: justify;letter-spacing:1.5px;line-height: 1.75em;">
                    <p>
                        
			1、培训课程体系完善
                    </p><br/>
                    <p>
                        
			2、大户型游学活动：每年1-2次游学；
                    </p>
                    <p>
                        
			3、员工旅游：公司全员的国内游，设计精英国际
 游；
                    </p>
                    <p>
                        
			4、每月公司举行员工集体生日会，发放生日礼品；
                    </p>
                    <p>
                        
			5、完善的晋升机制：设计岗位具有双向发展路径，包括专业技术发展路径和管理发展路径；
                    </p>
                    <p>
                        
			6、为业绩优秀的设计师配置专属设助。
                    </p>
                </section>
            </section>
        </section>
        <section class="_135editor" style="border: 0px none;">
            <section style="padding: 1em 1em 8px 1em;border-bottom: 3px solid #2dd489;">
                <section data-autoskip="1" class="135brush" style="font-size: 14px;text-align: justify;letter-spacing:1.5px;line-height: 1.75em;font-weight: bold;">
                    <p>
                        请发送个人简历及个人作品至：
                    </p>
                    <p>
                        
			hynsz@hyndesign.com
                    </p>
                    <p>
                        
			（PDF格式不大于10M)并请注明所申请职位和入职时间，我们会在一周之内回复你
                    </p>
                </section>
            </section>
        </section>
        <section style="height: 2em;"></section>
        <section class="_135editor" style="border: 0px none;">
            <section style="padding: 1em 1em 0px 1em;">
                <section data-autoskip="1" class="135brush" style="font-size: 14px;text-align: center;letter-spacing:1.5px;line-height: 1.75em;">
                    <p>
                        文字来源：网络（侵删）
                    </p>
                    <p>
                        
			图片来源：网络（侵删）
                    </p>
                    <p>
                        
			排版：135编辑器
                    </p>
                </section>
            </section>
        </section>
    </section>
</section>
<p>
    <a href="jlkjfkdla">几分老大</a><br/>
</p>`;


    WxParse.wxParse('article', 'html', article, that, 5);

  }
})
