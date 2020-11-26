import {Dimensions, StyleSheet} from 'react-native';

import { ROW_HEIGHT } from '../Events/Events.styles';
import HeaderStyle from '../Header/Header.styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  header: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  timeLabel: {
    flex: -1,
    height: ROW_HEIGHT,
  },
  timeText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#5235BB',
    fontFamily : 'NanumSquareB',
  },
  timeColumn: {
    paddingTop: 4,
    width: HeaderStyle.title.width,
  },
  eventsContainer: {
    flex: 1, width: SCREEN_WIDTH - HeaderStyle.title.width,
  },
});

export default styles;
