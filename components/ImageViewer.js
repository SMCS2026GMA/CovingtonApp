import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({Placeholder}) {
    return (
        <Image source={Placeholder} style={styles.image} />
    );
  }

  const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 720,
    },
  });
  