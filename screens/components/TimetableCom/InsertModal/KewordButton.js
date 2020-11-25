import React, { Component } from 'react';
import {   
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Animated,
} from 'react-native'
import PropTypes from 'prop-types';

class KeywordButton extends Component {
    static propTypes = {
        value: PropTypes.bool,
        onChangeValue: PropTypes.func,
        activeText: PropTypes.string,
        fontSize: PropTypes.number,
        activeTextColor: PropTypes.string,
        inactiveTextColor: PropTypes.string,
        activeBackgroundColor: PropTypes.string,
        inactiveBackgroundColor: PropTypes.string,
        activeButtonBackgroundColor: PropTypes.string,
        inactiveButtonBackgroundColor: PropTypes.string,
        switchWidth: PropTypes.number,
        switchHeight: PropTypes.number,
        switchBorderRadius: PropTypes.number,
        switchBorderColor: PropTypes.string,
        switchBorderWidth: PropTypes.number,
        animationTime: PropTypes.number,
        padding: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
      };

  static defaultProps = {
    value: false,
    onChangeValue: () => null,
    activeText: '',
    fontSize: 17,
    activeTextColor: '#FFFFFF',
    inactiveTextColor: '#A0A3BD',
    activeBackgroundColor: '#552DEC',
    inactiveBackgroundColor: '#EFF0F6',
    activeButtonBackgroundColor: 'rgba(255, 255, 255, 1)',
    inactiveButtonBackgroundColor: 'rgba(255, 255, 255, 1)',
    switchWidth: 65,
    switchHeight: 35,
    switchBorderRadius: 32,
    switchBorderColor: 'rgba(0, 0, 0, 1)',
    switchBorderWidth: 0,
    animationTime: 150,
    padding: 5,
  }


  constructor(props, context) {
    super(props, context);
    this.padding = props.padding === true ? 5 : (props.padding || 0);
    this.transformValue = (props.switchWidth - props.buttonWidth - this.padding);
    this.state = {
      transformValue: new Animated.Value(props.value ? this.transformValue : this.padding),
      backgroundColor: new Animated.Value(props.value ? 90 : -90),
      textColor: new Animated.Value(props.value ? 90 : -90),
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps) this.startGroupAnimations();
  }

  startGroupAnimations = () => {
    const { animationTime, onChangeValue, value } = this.props;
    Animated.parallel([
      Animated.spring(this.state.transformValue, {
        toValue: value ? this.transformValue : this.padding,
        duration: animationTime,
        useNativeDriver: false, 

      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 90 : -90,
        duration: animationTime,
        useNativeDriver: false, 
      }),
      Animated.timing(this.state.textColor, {
        toValue: value ? 90 : -90,
        duration: animationTime,
        useNativeDriver: false, 
      })
    ]).start();
  }



   render() {
    const {
        transformValue,
        backgroundColor,
        textColor
      } = this.state;
  
      const {
        value,
        onChangeValue,
        activeText,
        fontSize,
        activeTextColor,
        inactiveTextColor,
        activeBackgroundColor,
        inactiveBackgroundColor,
        switchWidth,
        switchHeight,
        switchBorderRadius,
        switchBorderColor,
        switchBorderWidth,
      } = this.props;
  

    const backgroundColorValue = backgroundColor.interpolate({
        inputRange: [-90, 90],
        outputRange: [
          inactiveBackgroundColor,
          activeBackgroundColor,
        ],
      });

      const textColorValue = textColor.interpolate({
        inputRange: [-90, 90],
        outputRange: [
          inactiveTextColor,
          activeTextColor,
        ],
      });
  
      const containerHeight = switchHeight;
      const containerWidth = switchWidth;

    return (
    <TouchableWithoutFeedback
    onPress={onChangeValue}
    >
        <View style={[styles.container,{height: containerHeight,width: containerWidth,}]}
        >
             <Animated.View
            style={{
              backgroundColor: backgroundColorValue,
              height: switchHeight,
              width: switchWidth,
              borderRadius: switchBorderRadius,
              borderWidth: switchBorderWidth,
              borderColor: switchBorderColor,
              zIndex: 1,
              position: 'absolute',
              top: (containerHeight - switchHeight) / 2,
              left: (containerWidth - switchWidth) / 2,
            }}
          >
            <View style={styles.animatedContainer}>
              <View style={styles.textContainer}>
                <Animated.Text 
                style={{ 
                    color: textColorValue, 
                    fontSize: fontSize,
                    fontFamily: 'NanumSquareR', }}>
                  {activeText}
                </Animated.Text>
              </View>

            </View>
          </Animated.View>

        </View>


      </TouchableWithoutFeedback>


    );
}
}

export default KeywordButton

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        marginRight: 10,
      },
      animatedContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
    });