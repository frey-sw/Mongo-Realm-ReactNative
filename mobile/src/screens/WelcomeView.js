import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthProvider, useAuth} from '../contexts/AuthProvider';

export function WelcomeView({navigation}) {
  const {signUp,signIn} = useAuth();

  const sign = () => {
    signUp('frey@switch.com.uy', '123456');
  };

  const signin = () => {
    signUp('frey@switch.com.uy', '123456');
  };

  return (
    <View>
      <Text>TEST</Text>
      <Button title={'Sign in'} onPress={sign} />
    </View>
  );
}
