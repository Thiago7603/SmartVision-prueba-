import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-semibold': require('./../assets/fonts/Outfit-SemiBold.ttf'),
  });

  return (
    <Stack>
      <Stack.Screen name="Landing" 
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}
