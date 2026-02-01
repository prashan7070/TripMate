import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { View, ActivityIndicator } from 'react-native';
import "../global.css"; 

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;
    const inAuthGroup = segments[0] === '(auth)';
    if (user && !inAuthGroup) {
      
    } else if (!user && !inAuthGroup) {
      // Not logged in, redirect to login
      router.replace('/(auth)/login');
    } else if (user && inAuthGroup) {
       router.replace('/(dashboard)/home');
    }
  }, [user, initializing, segments]);

  if (initializing) {
    return <View className="flex-1 justify-center items-center bg-white"><ActivityIndicator size="large" color="#2563eb" /></View>;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}