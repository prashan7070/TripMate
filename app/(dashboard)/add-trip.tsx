import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { addTrip } from '../../services/tripService';
import { useRouter } from 'expo-router';

export default function AddTrip() {
  const [form, setForm] = useState({ destination: '', date: '', budget: '', notes: '' });
  const router = useRouter();

  const handleAdd = async () => {
    if (!form.destination || !form.date) return Alert.alert("Required", "Destination & Date needed");
    try {
      await addTrip({ userId: auth.currentUser!.uid, ...form });
      Alert.alert("Success", "Trip Added!");
      setForm({ destination: '', date: '', budget: '', notes: '' });
      router.push('/(dashboard)/home');
    } catch (e) { Alert.alert("Error", "Failed to save"); }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="p-6">
        <Text className="text-2xl font-bold text-gray-800 mb-6">Plan New Trip</Text>
        <View className="space-y-4">
            <Text className="text-gray-600 ml-1 font-medium">Destination</Text>
            <TextInput className="bg-white p-4 rounded-xl border border-gray-200" placeholder="Where to?" value={form.destination} onChangeText={(t) => setForm({...form, destination: t})} />
            
            <Text className="text-gray-600 ml-1 font-medium">Date</Text>
            <TextInput className="bg-white p-4 rounded-xl border border-gray-200" placeholder="YYYY-MM-DD" value={form.date} onChangeText={(t) => setForm({...form, date: t})} />
            
            <Text className="text-gray-600 ml-1 font-medium">Budget</Text>
            <TextInput className="bg-white p-4 rounded-xl border border-gray-200" placeholder="LKR" value={form.budget} onChangeText={(t) => setForm({...form, budget: t})} keyboardType="numeric" />
            
            <Text className="text-gray-600 ml-1 font-medium">Notes</Text>
            <TextInput className="bg-white p-4 rounded-xl border border-gray-200 h-24" placeholder="Notes..." value={form.notes} onChangeText={(t) => setForm({...form, notes: t})} multiline />
            
            <TouchableOpacity onPress={handleAdd} className="bg-blue-600 p-4 rounded-xl items-center shadow-md mt-4">
            <Text className="text-white font-bold text-lg">Save Trip</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}