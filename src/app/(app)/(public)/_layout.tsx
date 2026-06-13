import { Stack } from 'expo-router';
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        // ovde mi je ispod bio index u zagradi i zato je se video na strani onako
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' },
        }}
      />
    </Stack>
  );
};
export default Layout;
