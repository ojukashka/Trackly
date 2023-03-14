import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const LoginScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onSubmit = (data: {}) => {
    console.log('submit', data);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo/logo.png')} />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          name="username"
          control={control}
          rules={{
            required: '*И-мэйлээ бүрэн оруулна уу!',
            pattern: {
              value: EMAIL_REGEX,
              message: 'И-мэйлээ зөв оруулна уу!',
            },
          }}
          label="И-мэйл"
        />
        <CustomInput
          name="password"
          control={control}
          rules={{
            required: '*Нууц үгээ бүрэн оруулна уу!',
            minLength: {
              value: 5,
              message: 'Нууц үг 5-аас дээш үсэгтэй байх ёстой!',
            },
          }}
          secureTextEntry={true}
          label="Нууц үг"
          style={styles.passwordInput}
        />
      </View>

      <CustomButton onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logoContainer: {
    width: 298,
    marginBottom: 48,
  },
  inputContainer: {
    marginBottom: 66,
  },
  passwordInput: {
    marginTop: 23,
  },
});
export default LoginScreen;
