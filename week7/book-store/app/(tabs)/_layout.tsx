import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout () {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Books",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="information-circle" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}