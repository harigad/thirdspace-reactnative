/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeModules } from 'react-native';

const lock = NativeModules.Lock;
const unlock = () => {
  let lockData = "iLjVg5Fxsw59xJ3t+gEhs+d41cMctlBvejqKvNwCC4JyUvYl1EJXkJYrypn1XRxZSlG5WRv9n38fzsfEewf0eWCe3/4NW/fvSe5O3fadIqEPna0ptOm7/lVwbt1GLdeYCF5qjch7Ck0mdCnrM0OXVhnK+B3FbJsNn4W8yemxXyNK/BcvDSDeiODsueaQX6zMy1Q+xDI93QV4T9PyXp8224TNAIidXZIcEzxnJ8g+56FpsiyBWIRgHLFNON/FgHlHye6gBEn3+LEE/K4g2T8pxqW/53OdXpH0hO4TPZMC9AEGi2JgVH5r+zz7ynlu/y8zgtwXZNWi0GCxUESCwF+I/ekZIVBKHB+Bk+NDRVdmiSlTZjyGRdgeKvoroS3v1raQ3+5cgunKW5I1tKCr5Na2gaBxnr4m6TQ34uYiQELtN0cHT2zjj4NFrXrq6JHy1ZvrzYBXJcJ0o7QbBYHEdMo/+sUGjWJfGkyr5qO6ADH31KqnDStLEMznIcObYzRus9CEmo3yYEtDKWJHW13CYKjb0EG2tfeH6wwIuJ/bxP2ufdijBCJ8l8SSnSkfM/3fS316Ac0W9lWchTXUpEefLNaOv9jCfWhUMmKv7G7TnTCIex83Wqu9Xfn/si/VBLPQaYzG0X/yMg7OnodcrWv/FsNAW/ZDFIShc8ofnZ51/O+GBOFrQNrCRnyBeVaYEt3HWVwsDQ3/T0u3YQDW1CYRyzj8qJCs/koRFjaqGC/DgVdXDrIgFi7XoT/Fmjz3Zt3wxuS4UlQwxcnYsNm9c6SFAKqluec7y35EZriLpA7YeAKnJKY0VlKZl9niAAlC9/zlmFgufzQ0iKRYis/OA+fBbs32TOU5yCrbBoVl3oUIXPtXIEX+Jps+Hy8Nb4YTDrtMZvn5YhPaKfgAFyZXk7RmuMuSRf3+RbGHmr/q3VRDKczu1JUUuknCzmmXv9f7MfBRJLq0ZYk1bfVNYioSj5kan1FhFr8mWJMLYtk744dntjtEDCvucwR1dLeHyYbqSwJhxVy5zM4qQRm7vwh9WYIf5yyzlaXCaWkMfT4W/fO2Gx3qSb9n6PLGW+ZX5cWtPmFmGqcOpgfO/Q5xfMTfM6xOVklEH7BMvc+WCdi7S/uQlWqaIzF8TeL18bdB/NSd9eVMoKWIjyXqQ/ePI+8oOsNQUDh0GZgm8PnDopmpMdXZLJ3nj5V7JJPfeEyhTKCTLJZKFea0IX+Tkj4ez0oxmkI08LvmJlhSAgW4JymsDcAhw+Xiumtz+OewTTQ4MLaqqYCxDIAlaiPBmjYWFdme3mj71HUEv6RW0qcvaDC66PyGMW4xMJkXSis0yBCxNDi6IxxB+NE7uwu7zVHi4PkrkZlATe32tMKRg1amEghFc/LEFpqow81f5dmjrbAezEitToQt9qsw7Th5iguZJ1IPaq6jp4G/srGpQMeSuMq4ukLTxYvM7VQ1ef8KobYSzg5zaMCZFOkG7E/Lcn9+Nnw0fmGxn6sOOLjFkbglrl1AHE2WAcuCp9LOdejB2e5BfejDlBPgyV6+u71RVc8ZaxYgmlRyQ2CyqcEM7F38hNRT5eCTIcqPcjOYUcknYwiW8d5QpRaYbDKi/GY71sYKBvk79pvMDzUNxdu9OT4fJy3coRgkB8IYNlPxhQvacRoH3OvbiD0ZVQEG4JAwnK7jqdtYwYmWSagTZLFQbqaR7UD9PEDiG2frSlbzTHyQNi0PCw1hi/SfrpGebyIrEEv/ZXLJJgtNcz6/e6+RCyTwPuAPv6UtDVYxTm5o6FHWNEq16W9Mculb2MpR4smx0Q+VU8gTR6pPwi8CnSjVfecSRVUIj7FGksISlURQKneWpvTrVu0oAF1biwAe6UzqixpftBhhqMkW3c/8qTw8qCdGQXhsc/j/df1/y6blaafrAJxpX9J4NXFMGeo2CYuRKxHXp9UZzjSbby3Oyp6YRlflDNB2h+lOQhv+8YGPKykdpNIugj4CgOABV0Fe60aE/LbDUPRI3NjRDZ1NzViLmfSOZLgsN3tfiAFHgR/dd+UHc4s=";
  lock.unlock(lockData).then(volume => {
    console.log("got calledback to js ");
  });
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
          <Button
  onPress={unlock}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
