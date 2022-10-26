import './wdyr'
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class MyPureComponent extends React.PureComponent {
  static whyDidYouRender = true;
  render() {
    console.log('RENDERED, but where is WDYR?')
    return <View style={{width: 100, height: 100, backgroundColor: 'green' }} />
  }
}

export default function App() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <MyPureComponent dummy={{ test: true }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
