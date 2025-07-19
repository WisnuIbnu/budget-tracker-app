import { BackButtonProps } from '@/types';
import { useRouter } from 'expo-router';
import { CaretLeftIcon } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';



const BackButton = ({
  style,
  iconSize = 26,
}: BackButtonProps) => {

  const router = useRouter();
  
  return (
    <TouchableOpacity onPress={() => router.back()} style={[ styles.button , style]}>
      <CaretLeftIcon 
        size={iconSize} 
        color="white"
      />
    </TouchableOpacity>
  );
}

export default BackButton

const styles = StyleSheet.create({
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontWeight: '600',
    backgroundColor: 'transparent', 
  },
})