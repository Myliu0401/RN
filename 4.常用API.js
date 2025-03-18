/* 

    Alert
       用于显示一个带有指定标题和消息的警报对话框，Alert.alert方法接收3个参数
       第一个参数是警报对话框的标题
       第二个参数是警报内容
       第三个参数是一个数组，数组的每一项是按钮对象


    StyleSheet
       是一种类似于 CSS StyleSheet的抽象。
       需要注意以下几个点：
         并不是所有的css属性在StyleSheet中都支持
         书写样式时要使用驼峰命名法，例如 backgroundColor

       方法: 
          create 根据对象创建样式表
          flatten 可以把样式对象的数组整合成一个样式对象，重复的样式属性以后一个为准

    
    Transforms
        类似于CSS中的变形，可以帮助我们使用2D或者3D变换来修改组件的外观和位置。
        但是需要注意的是，一旦应用了变换，变换后的组件周围的布局将保持不变，因此它可能会与附近的组件重叠。

 
    Keyboard 
        该模块用来控制键盘相关的事件
        利用 Keyboard 模块，可以监听原生键盘事件以做出相应回应，比如收回键盘。


    AppState
        在RN开发中，经常会遇到前后台切换的场景，为了监控应用的运行状态，RN提供了AppState
        通过AppState开发者可以很容易地获取应用当前的状态。
        在AppState中，应用的状态被分为：
          active: 应用正在前台运行
          background: 应用正在后台运行。用户可能面对以下几种情况 
            1. 在别的应用中
            2. 停留在桌面
            3. 对安卓来说还可能处在另一个active中（即便是由你的应用拉起的）
          IOS特有的inactive: 此状态表示应用正在前后台的切换过程中，或是处在系统的多任务视图，又或者是处在来电状态中。

          要获取当前的状态，你可以使用 AppState.currentState，这个变量会一直保持更新。不过在启动的过程中，currentState可能为 null,
          直到AppState从原生代码得到通知为止。


    Dimensions
          该API主要用于获取设备屏幕的高度，该API的使用比较简单，只需要使用get方法即可获取宽高信息
          Dimensions.get('window').width
          Dimensions.get('window').height

        
    PixelRatio
          该API可以获取到设备的物理像素和css像素比例，也就是DPR。
          如果css像素和设备像素1:1关系，那么DPR值就为1.如果1个css像素对应2个设备像素，那么DPR值就为2。
          说简单点，就是一个css像素要用多少个设备像素来显示，如果DPR值为1，表示用一个设备像素就够了，如果DPR值为2，则表示一个css像素要用2个设备像素来表示。
          以苹果4为例，设备的物理像素为640，为css像素为320，因此PixelRatio值为2。
          在RN中，通过PixelRatio.get()方法即可获取DPR值。

          在RN中所有尺寸都是没有单位的，例如: window: 100, 这是因为RN中尺寸只有一个单位 dp，这是一种基于屏幕密度的抽象单位，默认省略。


    Platform
          该API主要用于获取设备的相关信息
          Platform.OS                  获取设备类型
          Platform.Version             获取版本号
          Platform.isTV.toString()     获取是否是电视
          等等
          
    PlatformColor
         每个平台都有系统定义的颜色，尽管可以通过AppearanceAPI或AccessibilityInfo检测并设置其中的某些样式，
         但是这样的操作不仅开发成本高，而且还局限。
         PlatformColor是一个新的API，可以像RN中的其他任何颜色一样使用
         例如，在IOS上，系统提供一种样式labelColor,可以在RN中这样使用PlatformColor
         <Text style={{ color: PlatformColor('labelColor') }}></Text>
         另一方面，安卓提供像 colorButtonNormal 这样的颜色，可以在RN中这样使用
         <Text style={{ backgroundCOLOR: PlatformColor('?attr/colorButtonNormal') }}></Text>

         
    Appearance 
         该模块主要用于获取用户当前的外观偏好，目前的手机系统一般都可以选择浅色模式和深色模式。
         通过Appearance模块，开发者就可以获取此信息。
         该模块提供了一个getColorScheme的静态方法，该方法可以获取当前用户首选的配色方案，对应的值有3个
         light: 浅色主题
         dark:  深色主题
         null:  没有选择外观偏好


    LayoutAnimation
         该API是RN提供的一套全局布局动画API，只需要配置好动画的相关属性（如：大小、位置、透明度等）
         然后调用组件的状态更新方法引起重绘，这些布局变化就会在下一次渲染时以动画的形式呈现。

         在安卓设备上使用该API，需要通过UIManager手动启用，并且需要放在任何动画代码之前，比如可以放在入口文件App.js中
         if(Platform.OS === 'android'){
            if(UIManager.setLayoutAnimationEnabledExperimental){
               UIManager.setLayoutAnimationEnabledExperimental(true)
            }
               
         }

    
    Animated
        该API是RN提供的另一种动画方式，相较于 LayoutAnimation 它更为精细，可以只作为单个组件的单个属性，也可以更加手势的响应
         来设定动画（例如通过手势放大图片等行为），甚至可以将多个动画变化组合到一起，并可以根据条件中断或者修改。
         
         const [opacity, setOpacity] = useState(new Animated.Value(1));

         const animated = Animated.timing({
             opacity,  // 第一个值是要针对那个属性应用动画
             {
             }
         }); // 定义动画
         animated.start(); // 设置动画

         <Animated.View>  // 必须使用 Animated.View 组件进行包裹
            <view></view>
         </Animated.View>

         Animated中的属性
               decay:  衰减动画，以一个初始速度开始并且逐渐减慢停止
               spring: 弹跳动画，基于阻尼谐振动的弹性动画
               timing: 渐变动画，按照线性函数执行的动画
               parallel: 并行执行
               sequence: 顺序执行
               stagger: 错峰执行，其实就是插入 delay 的 parallel 动画
               查看官网怎么使用

        animated.start(()=>{}); // 设置动画时可以传入一个回调函数，动画结束时执行该回调函数

        例子：
          import React, { useState } from 'react;
          import { Animated, Text, View, StyleSheet, Button, Easing } from 'react-nactive;

          const App = ()=>{
              const [fadeInValue, setFadeInValue] = useState(new Animated.Value(0));
              
              const faDeIn = ()=>{
                  Animated.timing(fadeInValue, {
                     toValue: 1,
                     diration: 2000,
                     easing: Easing.linear,
                     useNativeDriver: true
                  }).start();
              };

              const fadeOut = ()=>{
                 Animated.timing(fadeInValue, {
                   toValue: 0,
                   duration: 3000,
                   useNativeDriver: true
                 }).start();
              };

              return (<View style={styles.container}>
                 <Animated.View style={[
                   styles.fadingContainer,
                   {
                      opacity: fadeInValue
                   }
                 ]}> 
                   <Text style={ styles.fadingText }>Fading View!</Text>
                 </Animated.View>
                 <View style={ styles.fadingText }>
                   <Button title="Fade In View" onPress={fadeIn}/>
                   <Button title="Fade Out View" onPress={fadeOut} />
                 </View>
              </View>)

              样式值必须应用在 Animated.View 组件上
 
          }


         export default class AnimatedTiming extends Component{
           constructor(props){
              super(props);
              this.state = {
                 bounceValue: new Animated.Value(0),
                 rotateValue: new Animated.Value(0)
              }
           }

           onPress(){

             // 顺序执行
             Animated.sequence([
                Animated.spring(this.state.bounceValue, { toValue: 1, useNativeDriver: true }), // 弹性动画
                Animated.delay(500),
                Animated.timing(this.state.rotateValue, {
                     toValue: 1,
                     duration: 800,
                     easing: Easing.out(Easing.quad),
                     useNativerDriver: true
                })
             ]).start(()=>this.onPress); // 开始执行动画
           }

           render(){
              return (<View style={styles.container}>
                <Animated.View>
                     
                </Animated.View>
              </View>)
           }
         }


*/