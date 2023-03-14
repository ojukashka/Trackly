import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

interface ICustomButton {
  onPress(): void;
  style: object;
  title: string;
}

const CustomButton = (props: ICustomButton) => {
  const {onPress, style, title = 'Нэвтрэх'} = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: colors.primary,
    width: 298,
    height: 45,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default CustomButton;
