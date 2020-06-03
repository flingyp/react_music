import React, { Component } from 'react';
import { Player } from 'video-react';
import '../css/pages/MvDetail.less'


// http://vodkgeyttp8.vod.126.net/cloudmusic/obj/core/2737663940/59978b9a672675be19022e12df61ef2d.mp4?wsSecret=ca8e46d1008ed97787e727244a12d275&wsTime=1591187326

class MvDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="mv">
                {/* mv 详情部分 */}
                <div className="mv_wrap">
                    <h3 className="title">MV详情</h3>
                    {/* 播放器 */}
                    <div className="video">
                        <Player class="video_player" src="http://vodkgeyttp8.vod.126.net/cloudmusic/obj/core/2737663940/59978b9a672675be19022e12df61ef2d.mp4?wsSecret=ca8e46d1008ed97787e727244a12d275&wsTime=1591187326"></Player>
                    </div>
                    {/* 相关信息 */}
                    <div className="info">
                        {/* 歌手信息 */}
                        <div className="info_singer">
                            <div className="avatar_wrap">
                                <img src="https://p1.music.126.net/oKwDyLY63SW11OD73RXQuA==/109951163320727532.jpg" alt=""/>
                            </div>
                            <span>吴克群</span>
                        </div>
                        {/* mv信息 */}
                        <div className="info_mv">
                            <h2 className="title">你说我听着呢 学会和抑郁相处</h2>
                            <span className="date">发布：2020-06-03</span>
                            <span className="number">播放：5592次</span>
                            <div className="desc">学会和抑郁相处 也许一杯喜欢的珍珠奶茶 一部期待已久的电影 支撑着抑郁症患者活到了一个又一个的明天 让他们觉得有活下去的意义，感受到自己是真是存在。 当谢震廷、H拿出一封求救的信，缓缓念出其实内心深处希望得到解脱的事实，还有一直也走不出童年的阴影和青春期身边的人造成的伤害，在学校同学的攻击回到家也没有人关心；在低谷时期来自母亲的不理解与家庭的压力，才发现原来一直在不断向前奔跑追逐的我们，往往丢失掉最重要的东西：活下去的希望和获得快乐的能力； 人生可以示弱 但没有应该 如果有 那就是应该爱自己 应该活下去 要相信，我们在生活中遇到的困难，过不去的黑暗时刻，一样有很多很多人都在面临着，希望我们都是跨过黑暗的人，也希望正在面对痛苦的人们可以感受到你不是孤身一人面对所有，总有人在陪伴你 等风停 一首歌、一个拥抱、一个眼神 不是炙热的鼓励 而是我就在你身旁 感受同一阵风 这里是吴克群 这里是你说我听着呢</div>
                        </div>
                    </div>
                </div>


                {/* mv 推荐部分 */}
                <div class="mv_recommend">
                    <h3 class="title">相关推荐</h3>
                    <div class="mvs">
                        <div class="items">
                            <div class="item">
                                <div class="img_wrap">
                                    <img src="http://p4.music.126.net/eO6M4aUUDBNMubVWyuO2xw==/503576325556496.jpg" />
                                </div>
                                <div class="info_wrap">
                                    <div class="name">超级面对面 第9期 吴克羣：说我江郎才尽的人不懂我</div>
                                    <div class="singer">吴克群</div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="img_wrap">
                                    <img src="http://p4.music.126.net/eO6M4aUUDBNMubVWyuO2xw==/503576325556496.jpg" />
                                </div>
                                <div class="info_wrap">
                                    <div class="name">超级面对面 第9期 吴克羣：说我江郎才尽的人不懂我</div>
                                    <div class="singer">吴克群</div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="img_wrap">
                                    <img src="http://p4.music.126.net/eO6M4aUUDBNMubVWyuO2xw==/503576325556496.jpg" />
                                </div>
                                <div class="info_wrap">
                                    <div class="name">超级面对面 第9期 吴克羣：说我江郎才尽的人不懂我</div>
                                    <div class="singer">吴克群</div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="img_wrap">
                                    <img src="http://p4.music.126.net/eO6M4aUUDBNMubVWyuO2xw==/503576325556496.jpg" />
                                </div>
                                <div class="info_wrap">
                                    <div class="name">超级面对面 第9期 吴克羣：说我江郎才尽的人不懂我</div>
                                    <div class="singer">吴克群</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MvDetail;