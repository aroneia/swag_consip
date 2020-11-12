import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    // alignItems: 'center',
    position: 'absolute',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 2,
    flex: 1,
    backgroundColor: "yellow",
    borderWidth: 0.7,

  },
  title: {
    color: '#5235BB',
    textAlign: 'left',
    fontSize: 11,
  },
  description: {
    color: '#5235BB',
    textAlign: 'left',
    fontSize: 9,
  },
  location: {
    color: '#5235BB',
    textAlign: 'left',
    paddingTop: 4,
    paddingBottom: 2,
    fontSize: 11,
  },
});

export default styles;
