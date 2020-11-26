import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    // alignItems: 'center',
    position: 'absolute',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 4,
    flex: 1,
    backgroundColor: "yellow",
    borderColor:"#D9DBE9",
    borderWidth: 1.5,

  },
  title: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 11,
    fontFamily:"NanumSquareB"
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
