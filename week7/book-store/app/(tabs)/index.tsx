import { ScrollView, View, Text } from "react-native";

export default function BookScreen () {
    return (
        <ScrollView>
            <View className="p-5">
                <Text className="text-lg font-bold">Hello World</Text>
                <Text>This is CAPA course</Text>
            </View>
        </ScrollView>
    )
}