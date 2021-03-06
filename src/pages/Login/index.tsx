import React, {useCallback, useState, useEffect} from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  //TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

import Input from '../../components/Inputs';
import Button from '../../components/Button';
import {loadSing} from '../../store/modules/Auth/actions';

import {Container, Title, TextError} from './styles';
import colors from '../../helpers/colors';
import {AuthState} from '../../store/modules/Auth/types';
import {ApplicationState} from '../../store/';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {error}: AuthState = useSelector<ApplicationState>(state => state.auth);

  const dispatch = useDispatch();

  //const passwordInputRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (__DEV__) {
      setEmail('saviopf22@gmail.com');
      setPassword('6VIGa1$zCUW');
    }
  }, []);

  const handleSignin = useCallback(
    (data: SignInFormData) => {
      try {
        //loadSing({email: 'saviopf22@gmail.com', password: '6VIGa1$zCUW'}),
        dispatch(loadSing({email, password}));
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        );
      }
    },
    [dispatch, email, password],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'android' ? undefined : 'padding'}>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Icon name="hospital" size={30} color={colors.green} />

            <View>
              <Title>Login</Title>
            </View>

            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              returnKeyType="next"
              
            />
            <Input
              value={password}
              onChangeText={setPassword}
              
              placeholder="Senha"
              textContentType="newPassword"
              returnKeyType="send"
              secureTextEntry
              
            />

            <Button principal onPress={handleSignin}>
              Entrar
            </Button>
            <TextError>{error}</TextError>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
