import { Text, View } from 'react-native'
import React from 'react'

import styles from './styles'

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ocorreu um Error, tente novamente amastarde</Text>
    </View>
  )
}

export default Error
