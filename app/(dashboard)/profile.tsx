import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 items-center justify-center p-6">
      <View className="bg-white w-full p-8 rounded-3xl items-center shadow-sm border border-gray-100">
        <View className="bg-blue-100 p-6 rounded-full mb-4">
            <Ionicons name="person" size={50} color="#2563eb" />
        </View>
        <Text className="text-2xl font-bold text-gray-800">My Profile</Text>
        <Text className="text-gray-500 mt-2 mb-8">{auth.currentUser?.email}</Text>
        
        <TouchableOpacity onPress={() => signOut(auth)} className="bg-red-50 w-full p-4 rounded-xl flex-row items-center justify-center gap-2 border border-red-100">
          <Ionicons name="log-out-outline" size={20} color="#ef4444" />
          <Text className="text-red-500 font-bold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-gray-400 mt-10 text-xs">TripMate App v1.0</Text>
    </SafeAreaView>
  );
}