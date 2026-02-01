import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { useRouter } from 'expo-router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try { await createUserWithEmailAndPassword(auth, email, password); Alert.alert('Success', 'Account created!'); } 
    catch (e: any) { Alert.alert('Error', e.message); }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 justify-center px-8">
      <Text className="text-3xl font-bold text-center mb-8 text-blue-600">Create Account</Text>
      <View className="space-y-4">
        <TextInput className="bg-white p-4 rounded-2xl border border-gray-200" placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none"/>
        <TextInput className="bg-white p-4 rounded-2xl border border-gray-200" placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
        <TouchableOpacity onPress={handleRegister} className="bg-green-600 p-5 rounded-2xl items-center shadow-md mt-4">
          <Text className="text-white font-bold text-lg">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} className="mt-4 items-center">
          <Text className="text-blue-600">Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}