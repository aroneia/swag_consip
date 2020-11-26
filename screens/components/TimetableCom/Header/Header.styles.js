import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height:20,
    borderRadius:16,

    
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F5F3FF',
    borderTopWidth: 1,
    width: 30,
  },
  columns: {
    flex: 1,
    flexDirection: 'row',
    

  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffffff',
    borderTopWidth: 1,
    borderLeftWidth: 1,

  },
  text: {
    color: '#4E4B66',
    fontFamily : 'NanumSquareB',

  },
});

export default styles;
