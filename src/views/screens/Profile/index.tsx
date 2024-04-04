import { View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

import styles from './styles'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: "https://github.com/Thiagolourenco" }}
      />
    </View>
  )
}

export default ProfileScreen

