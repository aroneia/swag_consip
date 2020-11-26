import { StyleSheet } from 'react-native';

const GREY_COLOR = '#F5F3FF';
const ROW_HEIGHT = 50;
export { ROW_HEIGHT };
export const CONTENT_OFFSET = 0;

const styles = StyleSheet.create({
  container: {
    paddingTop: CONTENT_OFFSET,
  },
  timeRow: {
    flex: 0,
    height: ROW_HEIGHT,
  },
  timeLabelLine: {
    height: 1,
    backgroundColor: "#D9DBE9",
    position: 'absolute',
    right: 0,
    left: 0,
  },
  event: {
    flex: 1,
    overflow: 'hidden',
    borderColor: "#ffffff",
    borderLeftWidth: 1,
  },
  events: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
});

export default styles;
