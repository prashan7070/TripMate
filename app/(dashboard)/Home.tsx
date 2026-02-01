import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, SafeAreaView } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import { getUserTrips, deleteTrip } from '../../services/tripService';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const [trips, setTrips] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTrips = async () => {
    if (auth.currentUser) {
      setRefreshing(true);
      const data = await getUserTrips(auth.currentUser.uid);
      setTrips(data);
      setRefreshing(false);
    }
  };

  useEffect(() => { loadTrips(); }, []);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-blue-600 px-6 pt-12 pb-8 rounded-b-3xl shadow-lg mb-4">
        <Text className="text-blue-100 font-bold uppercase text-xs">Welcome Back</Text>
        <Text className="text-white text-3xl font-bold mt-1">My Trips 🌏</Text>
        <Text className="text-blue-200 mt-2">Upcoming adventures: {trips.length}</Text>
      </View>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadTrips} colors={['#2563eb']} />}
        renderItem={({ item }) => (
          <View className="bg-white p-5 mb-4 rounded-2xl shadow-sm border border-gray-100 flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-800">{item.destination}</Text>
              <Text className="text-gray-500 mt-1">📅 {item.date}</Text>
              <Text className="text-green-600 font-bold mt-1">💰 LKR {item.budget}</Text>
            </View>
            <TouchableOpacity onPress={async () => { await deleteTrip(item.id); loadTrips(); }} className="bg-red-50 p-3 rounded-full">
              <Ionicons name="trash-outline" size={20} color="#ef4444" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text className="text-center text-gray-400 mt-10">No trips yet. Tap "Plan" to add one!</Text>}
      />
    </SafeAreaView>
  );
}