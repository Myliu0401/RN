/* 

          基础组件
             Image、TextInput、Button、Switch


             Image组件
                该组件是一个图片展示组件，其作用类似于安卓的ImageView或者IOS的UIImageView组件。
                Image组件支持多种类型的图片显示，包括网络图片、静态资源、base64图片格式。

                要使用Image组件加载图片，只需要设置 source 属性即可，如果加载网络图片，还需要添加url标识以及手动指定图像的尺寸。

                目前该组件支持的图片格式有 PNG、JPG、JPEG、BMP、GIF、Webp以及PSD,
                不过，在默认情况下安卓是不支持GIF和WebP格式图片的。
                如果需要添加这两种图片格式的支持，需要在 android/app/build.gradle文件中添加以下依赖。
                 
                dependencies {
                      implementation 'com.facebook.fresco:animated-base-suppor:1.3.0'

                      implementation 'com.facebook.fresco:animated-gif:2.5.0'

                      implementation 'com.facebook.fresco:animated-webp:2.5.0'
                      implementation 'com.facebook.fresco:webpsupport:2.5.0'

                      implementation 'com.facebook.fresco:webpsupport:2.5.0'
                }

                Image组件常用的属性
                    常用css属性
                   resizeMode
                       cover       在保持图片宽度比的前提下缩放图片，知道宽度和高度都大于等于容器视图的尺寸
                       contain     在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸
                       stretch     拉伸图片且不维持图片的宽度比，直到宽度和高度都刚好填满容器
                       repeat      在维持原始尺寸的前提下，重复平铺图片直到填满容器
                       center      居中不拉伸的显示图片
            
        
            TextInput组件
                 该组件是一个输入框组件，用于将文本内容输入到TextInput组件上，该组件支持自动拼写，自动大小写切换
                 占位默认支付设置以及多种键盘设置功能。


            Button组件
                 该组件是一个最基本的按钮组件，可以在跨平台上很好地呈现，支持最低级别的定制。

            Switch组件
                 该组件是RN提供的一个状态切换的组件，俗称开关组件，主要用来对开和关两个状态进行切换。
                 该组件的用法比较简单，只需要给组件绑定value属性即可，这样它就是一个受控组件，如果需要
                 改变组件的状态，则必须使用 onValueChange方法来更新value的值。                



             View组件
                 该组件支持FlexBox布局、样式、触摸事件处理和一些无障碍功能，它可以被放到其他容器组件里面，也可以包含任意多个子组件。
                 无论IOS还是安卓，View组件都会直接对应平台的原生视图，其作用等同于IOS的UIView或者安卓的ViewGroup

           
             Text组件
                 该组件是一个用来显示文本内容的组件，也是使用频率极高的组件，它支持文本和样式的嵌套以及触摸事件的处理
                 该组件没有类似于CSS行内元素这样的概念，所以单个Text组件也是独占一行，但它属于Flex布局，可以使用FlexDirection属性设置行内并列的效果。
                 该组件相当于网页的P标签
                 该组件的写法有以下问题
                    1.被嵌套组件与位置相关的style样式几乎都不生效。如 margin、padding
                    2.内嵌Text的numberOfLines属性会失效。该属性表示设置文本只显示几行
                    3.如果使用不同的Text组件设置不同的字号，那么对齐的方式仍然是使用Flex布局对齐。
                 不过需要注意的是，由于字号大小不一，小字号文字的上边距会小一点，例如将dlignltems值
                 修改为flex-start,但是由于不同字体大小可以明显的看到上边距是不同的。如果想要不同字体大小的
                 文字边距相同，可以利用padding进行微调。


             ScrollView组件
                 该组件是一个支持横向或者竖向的滚动组件，几乎所有页面都会用到。
                 该组件类似于Web中的html或者body标签，浏览器中的页面之所以能上下滚动，就是因为html或者body标签默认有一个
                  overflow-y:scroll的属性，如果吧标签的属性设置为overflow-y:hidden，页面就不能滚动了。
                 RN的ScrollView组件在安卓的底层实现用的是ScrollView和HorizontalScrollView,在IOS的底层实现用的是UIScrollView
                 使用ScrollView组件时，必须要有一个确定的高度才能正常工作，如果不知道容器的准确高度，可以将ScrollView组件的样式设置为 flex:1 让其自动填充父容器的剩余空间。
                 ScrollView通常包裹在视图的外面，用于控制视图的滚动，并且很多时候我们并不直接给ScrollView设置固定高度或者宽度，而是给其父组件
                 设置固定的高度或者宽度。

               
             Touchable组件
                 在RN中并不是所有的组件都支持点击事件，为了给这些不具备点击响应的组件绑定点击事件，RN提供了Touchable系列组件。


             Pressable组件
                 RN已经提供了Button和Touchable这两个交互组件来处理用户的点击操作。但是官方有提供了新的交互组件Pressable组件。
                 新的交互组件在未来将替代目前可以进行交互的组件 Button、TouchableWithoutFeedback、TouchableHighlight、TouchableOpacity、TouchableNativeFeedback
                 Pressable可以用于检测各种类型的交互。提供的API可以直接访问当前的交互状态，而不必再父组件中手动维护状态。
                 它还可以使用各平台所有功能，包括悬停，模糊，聚焦等。RN希望开发者利用Pressable去设计组件，而不是使用带默认效果的组件 如：TouchableOpacity
                 该组件是一个核心组件的封装，它可以检测到任意子组件的不同阶段的按压交互情况。
                 <Pressable onPress={函数} >
                   <Text>xxxxx</Text>
                 </Pressable>
                 onPressIn在按压时被调用
                 onPressOut在按压动作结束后被调用
                 在按下onPressIn后，将会出现如下两种情况的一种
                   1. 用户移开手指，依次触发onPressOut和onPress事件
                   2. 按压持续500毫秒以上，触发onLongPress事件 (onPressOut在移开手后依旧会触发)
                 关于点按时的样式，是可以自定义的
                  如： 
                    <Pressable
                       
                      style={(e)=>{
                         // 判断手指是否按下
                         if(e.pressed){ 
                             return styles.xxx
                         } else {
                             return styles.xxx
                         }
                      }}
                    >
                       {
                           (e)=>{
                               if(e.pressed){
                                   return  JSX
                               } else {
                                   return  JSX 
                               }
                            }
                       }
                    </Pressable>

                    该组件由一个可触发区域HitRect,默认情况下，可触发区域HitRect就是盒模型中的不透明的可见区域
                    可以通过修改hitSlop的值，直接扩大可触发区域
                    <Pressable  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                    
                    </Pressable>
                    点按事件可保留区域的偏移量（Press Retention Offset）默认是0，也就是说默认情况下可见区域就是保留区域
                    可以通过设置pressRetentionOffset属性，来扩大可保留区域PressRect。

             FlatList组件
                   在该组件出现之前，RN使用ListView组件来实现列表功能，不过在列表数据比较多的情况下，ListView组件的性能并不是很好
                   所以引入了FlatList组件。相比ListView组件，FlatList组件适用于加载长列表数据，而且性能更好。
                   该组件提供了 data和renderItem两个属性
                   <FlatList 
                      data={[{key: 'a'},{ key: 'b }]}
                      renderItem={(e)=>{ return <Text>{ e.key }</Text> }} 
                   >
                   </FlatList>
                
                下拉刷新
                    下拉刷新是一个常见的需求，当用户已经处于列表的最顶端，此时继续往下拉动页面的话，就会有一个数据刷新的操作。
                    在FlatList中，提供了下拉刷新的功能，我们只需要设置 onRefresh 和 refreshing 这两个属性值即可。
                    onRefresh: 下拉刷新操作触发时要进行的动作，对应是一个函数
                    refreshing: 是否显示下拉刷新的等待图标，对应一个布尔值

                上拉加载更多
                    上拉加载也是列表中一个常见的操作，上拉加载就是以前的PC端分页效果。
                    onEndReached: 上拉加载操作触发时要进行的动作，对应是一个函数。
                    onEndReachedThreshold: 表示距离底部多远是触发 onEndReached


             SectionList组件
                   该组件和FlatList一样，SectionList组件也是由VirtualizedList组件扩展来的。不同与FlatList组件，SectionList
                   组件主要用于开发列表分组、吸顶悬浮等功能。
                   该组件提供 renderItem、renderSectionHeader和sections等必要的属性。
                   <SectionList
                      renderItem={(item)=>{ return <ListItem title={item.title} /> }}
                      renderSectionHeader={(section)=>{ return <Header title={ section.key } /> }}
                      sections={[{ data: [...], title: ... }]}
                   >
                   </SectionList>
                   常用的属性如下：
                      keyExtractor: 和FlatList组件一样，表示项目的唯一标识
                      renderSectionHeader: 用来渲染每个section的头部视图
                      renderItem: 用来渲染每一个section中的每一个列表项视图
                      sections: 用来渲染视图的数据源，类似于FlatList中的data属性
                      stickySectionHeadersEnabled: 当section把它前一个section的可视区推离屏幕时，这个section的header是否粘连在屏幕的顶端。


             ActivityIndicator组件
                    该组件常用于发送请求时所显示的等待圆圈，两个常见的属性size和color分别用于设置等待圆圈的尺寸和颜色。

            
             KeyboardAvoidingComponent组件
                    开发时，经常会遇到手机上弹出的键盘常常会挡住当前的视图，所以该组件的功能就是解决这个常见问题，它
                    可以自动根据手机上键盘的位置，调整自身的position或者底部的padding,以避免被遮挡。
                    常见属性：
                       behavior 该参数的可选值为  height、position、padding 来定义自适应的方式
                       contenContainerStyle 如果设定behavior值为position，则会生成一个View作为内容容器。此属性用于指定此内容容器的样式
                       keyboardVerticalOffset 视图离屏幕顶部有一定距离时，利用这个属性来补偿修正这段距离（键盘在竖直方向上的偏移量）

            
             Modal组件
                   该组件用来显示一个弹出框，弹出框常用于用户点击了某一个按钮后弹出一段提示信息。


             RefreshControl组件
                   该组件在ScrollView或ListView中用于添加拉动刷新功能，当ScrollView在scrollY: 0时，向下滑动会触发onRefresh事件。
                   只能用于垂直视图。

            
             StatusBar组件
                   该组件用来控制应用程序状态栏的组件。状态栏是显示当前时间、Wi-Fi和蜂窝网络信息、电池电量等其他图标区域，通常位于屏幕顶部。

             
             由于RN官方提供的组件比较局限，所以可以使用第三方组件库来提高效率。
             如： NativeBase第三方UI组件库

                     
                 
             

                 





*/