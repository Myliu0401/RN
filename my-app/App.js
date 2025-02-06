import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

import logo from './assets/splash-icon.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {
    const [localUri, setLocalUri] = useState('');

    // 异步获取图片
    const openImagePickerAsync = async () => {
        // 首先获取权限
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // 如果权限获取失败
        if (permissionResult) {
            alert('需要访问相机胶卷的权限！');
            return;
        }

        // 没有进入上面的判断，说明权限获取成功
        // 异步打开图片选择器，并且返回用户的图片选择结果
        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        // 如果用户没有选择图片
        if (pickerResult.canceled === true) {
            // 进入这里，说明用户没有选择图片
            return;
        }

        // 没有进入上面的判断，说明用户选择了图片
        setLocalUri(pickerResult.uri);
    };

    // 返回首页
    const goBack = () => {
        setLocalUri('');
    };

    // 分享图片
    const openShareDialogAsync = async () => {
        if (Platform.OS === 'web') {
            alert('此平台为web端');
            return;
        }

        await Sharing.shareAsync(localUri);
    };




    if (localUri) {

        return (<View style={styles.container}>
            <Image source={{ uri: localUri }} style={styles.thumbnail} />
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
                <Text style={styles.buttonText}>分享照片</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goBack} style={styles.button}>
                <Text style={styles.buttonText}>重新选择</Text>
            </TouchableOpacity>
        </View>);

    } else {
        return (<View style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <Text style={styles.instructions}>
                按下按钮，与朋友分享手机中的照片！
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>选择照片</Text>
            </TouchableOpacity>
        </View>);
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        backgroundColor: 'blue',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
});