import { ActivityIndicator, View } from 'react-native'
import React from 'react'

import styles from './style'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  )
}

export default Loading