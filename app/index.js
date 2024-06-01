import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

import ImageViewer from '../components/ImageViewer';
import DraggableImage from '../components/DraggableImage';

const BusLoop = require('../assets/TemporaryBusLoop.png');
const Bus = require('../assets/BusIcon.png');
const PHSLogo = require('../assets/PHSLogo.png');

const LoopScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={PHSLogo} style={styles.logo} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer Placeholder={BusLoop} />
      </View>
      <DraggableImage imageUrl={Bus} />
      <Link href="/substitutionBus" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkLabel}>Substitution Bus</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  linkContainer: {
    width: 200,
    height: 78,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  link: {
    borderRadius: 20,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  linkIcon: {
    paddingRight: 8,
  },
  linkLabel: {
    color: '#E3B04B',
    fontSize: 16,
  },
});

export default LoopScreen;
