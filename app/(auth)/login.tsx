import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try { await signInWithEmailAndPassword(auth, email, password); } 
    catch (e: any) { Alert.alert('Login Failed', "Check email & password"); }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 justify-center px-8">
      <View className="items-center mb-10">
        <View className="bg-blue-100 p-4 rounded-full mb-4"><Ionicons name="airplane" size={40} color="#2563eb" /></View>
        <Text className="text-4xl font-extrabold text-blue-600">TripMate</Text>
      </View>
      <View className="space-y-4">
        <TextInput className="bg-white p-4 rounded-2xl border border-gray-200" placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none"/>
        <TextInput className="bg-white p-4 rounded-2xl border border-gray-200" placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
        <TouchableOpacity onPress={handleLogin} className="bg-blue-600 p-5 rounded-2xl items-center shadow-md mt-4">
          <Text className="text-white font-bold text-lg">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/register')} className="mt-4 items-center">
          <Text className="text-gray-500">New? <Text className="text-blue-600 font-bold">Create Account</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}