import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 10, elevation: 5, backgroundColor: 'white' }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => <Ionicons name="map-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add-trip"
        options={{
          title: "Plan",
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={32} color="#2563eb" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}