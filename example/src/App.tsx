import React, { useEffect } from 'react'
import { View } from 'react-native'
import AsiphModuleModule from 'asiph-rn-kit'
import { StyleSheet } from 'react-native'
import { H1, H2, H3, H4, Paragraph, Spacings } from 'asiph-rn-kit'
import { SafeAreaView } from 'react-native'

const App = () => {
  useEffect(() => {
    console.log(AsiphModuleModule)
  })

  return (
    <SafeAreaView style={styles.container}>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      
      <Paragraph>Paragraph</Paragraph>

      <View style={styles.spacingBox}>
        <H4>Spacings.SMALLEST</H4>
        <View style={styles.smallest} />
      </View>

      <View style={styles.spacingBox}>
        <H4>Spacings.SMALLER</H4>
        <View style={styles.smaller} />
      </View>
      
      <View style={styles.spacingBox}>
        <H4>Spacings.SMALL</H4>
        <View style={styles.small} />
      </View>

      <View style={styles.spacingBox}>
        <H4>Spacings.LARGEST</H4>
        <View style={styles.largest} />
      </View>

      <View style={styles.spacingBox}>
        <H4>Spacings.LARGER</H4>
        <View style={styles.larger} />
      </View>

      <View style={styles.spacingBox}>
        <H4>Spacings.LARGE</H4>
        <View style={styles.large} />
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  smallest: {
    width: Spacings.SMALLEST,
    height: Spacings.SMALLEST,
    borderWidth: Spacings.HAIRLINE
  },
  smaller: {
    width: Spacings.SMALLER,
    height: Spacings.SMALLER,
    borderWidth: Spacings.HAIRLINE
  },
  small: {
    width: Spacings.SMALL,
    height: Spacings.SMALL,
    borderWidth: Spacings.HAIRLINE
  },
  largest: {
    width: Spacings.LARGEST,
    height: Spacings.LARGEST,
    borderWidth: Spacings.HAIRLINE
  },
  larger: {
    width: Spacings.LARGER,
    height: Spacings.LARGER,
    borderWidth: Spacings.HAIRLINE
  },
  large: {
    width: Spacings.LARGE,
    height: Spacings.LARGE,
    borderWidth: Spacings.HAIRLINE
  },
  spacingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%'
  },
})
export default App
