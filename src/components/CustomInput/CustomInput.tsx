import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller, Control} from 'react-hook-form';
import colors from '../../theme/colors';

interface ICustomInput {
  control: Control;
  label: string;
  name: string;
  style: object;
  rules?: object;
}

const CustomInput = ({
  control,
  label,
  name,
  style,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              autoCapitalize="none"
              secureTextEntry={name === 'password' ? true : false}
              style={[
                styles.input,
                {borderColor: error ? colors.accent : colors.lightgrey},
                style,
              ]}
            />
            {error && (
              <Text style={{color: colors.accent}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    height: 40,
    width: 298,
    borderRadius: 5,
    color: colors.black,
    paddingHorizontal: 19,
  },
});

export default CustomInput;
