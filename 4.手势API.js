/* 

                           // 创建手势事件
     const panResponder = PanResponder.create({
           // 触摸事件开始
           onStartShouldSetPanResponder(event, gestureState){
              // event 事件对象
              // gestureState 手势信息对象

              return true; // 表示允许触摸开始后面的所有事件生效
           }

           // 手指移动的时候会实时触发
           onPanResponderMove(){
           }

           // 手指抬起时触发
           onPanResponderRelease(){
           }
      })

      // 通过 create 返回的对象的 panHandlers 属性可以拿到整个触摸事件的集合对象
      panResponder.panHandlers 

      // 表示在该标签上绑定创建的手势事件
      <View { ...panResponder.panHandlers }></View>



*/