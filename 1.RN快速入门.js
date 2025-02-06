/* 

        安装命令
          npm install -g expo-cli

        创建项目
            npx create-expo-app --template blank
            表示创建一个空白模板的项目

        下载预览工具
            https://expo.dev/tools

        样式与布局
          在RN中，所有组件都接受名为 style 的属性，属性值为一个对象，用来书写css样式。
          如果遇到 background-color 这种写法，则按照驼峰的写法。
          还有在RN中无法使用缩写样式，列如 border: 1px solid 这样的样式是无法使用的，只能分成两条样式来写
           borderWidth: 1, borderStyle: 'solid'
          在RN中提供了一个 StyleSheet.create 方法来集中定义组件的样式

          import { StyleSheet } from 'react-native';

          const stlyes = StyleSheet.create({
             
              content: {
                 样式名: 样式值
              }
          
          });


          <Text style={ styles.content } ></Text>

          标签的style属性值也可以是一个数组，如: [styles.xxx1, styles.xxx2], 数组中位置越靠后优先级越高。

          在RN中设置样式时，如果涉及到尺寸，默认都是不给单位的，表示的是与设备像素密度无关的逻辑像素点。
            比如   width: 50    不添加像px 这些单位。则表示与设备像素密度无关的逻辑点。
            
          在组件样式中，使用flex可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用flex:1来制定某个组件
          扩张以撑满所有剩余空间。

          如果有多个并列的字组件使用了flex:1，则这些子组件会评分父容器中剩余空间。如果这些并列的字组件的flex值不一样，则谁的值
          更大，谁占据剩余空间的比例就更大。

          在进行移动端开发时，最推崇的布局方案就是使用flexbox弹性布局。flexbox可以在不同屏幕尺寸上提供一致的布局结构。
          
          RN中的flexbox的工作原理和web上的css基本一致，当然也存在少许差异，首先是默认值不同
            flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。

            
        图片
          在RN中，提供了一个名为Image的组件来显示图片

          <Image source={require('./my-icon.png)} />   这个是本地图片
          <Image source={{url: 网络图片地址}} />  这个是远程图片
          
          在RN中图片组件的引入地址属性不是src，而是source属性
          require中的图片名字必须是一个静态字符串，不能使用变量，因为require是在编译时期执行，而非运行时期执行。

          本地图片在引入时会包含图片的尺寸信息，但是如果是网络图片，则必须手动指定图片的尺寸。


        文本输入
           RN中提供了一个Textinput组件，该组件是一个允许用户输入文本的基础组件。它有一个名为onChangeText的属性，此属性
           接收一个函数，而此函数会在文本变化时被调用。另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。

        
        按钮
           按钮也是一个应用中最基本的需求，在RN中提供了Button组件来渲染按钮，这是一个简单的跨平台的按钮组件，会调用原生环境中对应的按钮组件。
           在安卓设备中，Button组件显示未一个按钮，而在IOS中则显示为一行文本。
           属性：
             title    为按钮的文本
             onPress  按下时触发
             ....

          由于Button组件是调用原生代码，因此不同的平台显示的外观是不同的，如果想要各个平台显示的外观都相同，则可以使用
          Touchable系列组件。

          TouchableHighlight组件  
              该组件的不透明度会降低，同时会看到视图变暗或者变亮，该标签可以添加style样式属性。

          TouchableOpacity组件
              该组件完全和TouchableHighlight组件相同，只是不可以修改颜色，只能修改透明度。

          TouchableWithoutFeedback组件
              该组件只响应用户的点击事件，不会做任何UI上的改变，所以不用添加style样式属性，加了也没效果

          TouchableNativeFeedback组件
              该组件在TouchableWithoutFeedback所支持的属性的基础上增加了触摸的水波纹效果。
              可以通过background属性来自定义原生触摸操作反馈的背景（只能在安卓上）

          
        滚动视图
           ScrollView 
               该组件是一个通用的可滚动的容器，可以在其中放入多个组件和视图，而且这些组件并不需要时同类型的。
               ScrollView不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）

           FlatList
               该组件用于显示一个垂直的滚动列表，其中元素之间结构类似，仅数据不同
               更适用于长列表数据，且元素个数可以增删。和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
               FlatList组件必须的两个属性是data和renderItem
                data是列表数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

           SectionList
               该组件可以带有分组标签
                renderSectionHeader回调，返回一个分组标签
                
               该组件的属性：
                 sections: 用来渲染的数据类似于FlatList中的data属性
                 renderItem: 用来渲染每一个section中的每一个列表项的默认渲染器。必须返回一个react组件
                 renderSectionHeader: 在每个section的头部渲染。在IOS上，这些headers是默认粘接在ScrollView的顶部的。
                 keyExtractor: 此函数用于为给定的item生成一个不重复的key

           
           网络连接
              在RN中，支持fetchAPI以及传统的Ajax的形式来发送网络请求。
              
              function qinqiu(){
                  fetch('链接').then((res)=>{ return res.json() }).then((res)=>{}).catch((err)=>{})
              }

              RN中默认会阻止所有http协议的网络请求，只能https协议的网络请求
*/