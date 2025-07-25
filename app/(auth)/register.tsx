import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import * as Icons from 'phosphor-react-native'; // Import icons as needed
import React, { useRef, useState } from 'react'
import { Alert, Pressable, StyleSheet, View } from 'react-native'


const Register = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const nameRef = useRef('');
  const {isLoading, setIsLoading} = useState(false);
  const router = useRouter();

  const handleSubmit = async() => {
    if(!emailRef.current || !passwordRef.current || !nameRef.current) {
    Alert.alert('Register', 'Please fill in all fields');
     return;
    }
    console.log('Email:', emailRef.current);
    console.log('Password:', passwordRef.current);
    console.log('Name:', nameRef.current);
    console.log('Register button pressed');
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton iconSize={28} />

        <View style={{ gap: 5, marginTop: spacingY._20 }} >
          <Typo size={30} fontWeight={"800"} >
            Lets,
          </Typo>
          <Typo size={30} fontWeight={"800"} >
            Get You Started
          </Typo>
        </View>

        {/* Form */}

        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter} >
          Create an account to track all your expenses.
          </Typo>
          {/* Input */}
          <Input 
            placeholder='Enter your name'
            onChangeText={(value) => nameRef.current = value}
            icon={<Icons.User size={verticalScale(26)}
            color={colors.neutral300}
            weight='fill'
              />
            }
          />
          <Input 
            placeholder='Enter your email'
            onChangeText={(value) => emailRef.current = value}
            icon={<Icons.At size={verticalScale(26)}
            color={colors.neutral300}
            weight='fill'
              />
            }
          />
          <Input 
            placeholder='Enter your password'
            secureTextEntry={true}
            onChangeText={(value) => passwordRef.current = value}
            icon={<Icons.Lock size={verticalScale(26)}
            color={colors.neutral300}
            weight='fill'
               />
            }
          />

          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo size={21} fontWeight={"700"} color={colors.black} >
              Sign Up
            </Typo>
          </Button>

        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Typo size={15}>
            Already have an account?
          </Typo>
          <Pressable onPress={() => router.navigate('/(auth)/login')}>
            <Typo size={15} fontWeight={'700'} color={colors.primary}>
              Login
            </Typo>
          </Pressable>
        </View>
      </View >
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});