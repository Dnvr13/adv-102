import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: "#c0aa6b", 
                tabBarInactiveTintColor: "#756b5e", 
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => 
                        <MaterialIcons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen 
                name="exercises"
                options={{
                    title: "Exercises",
                    tabBarIcon: ({ color }) => 
                        <MaterialIcons size={28} name="list" color={color} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#1a1a1a",
        borderTopWidth: 1,
        borderTopColor: "#5a4b3b",
        shadowColor: "black",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
    },
});
