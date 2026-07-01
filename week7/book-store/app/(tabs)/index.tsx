import { ScrollView, View, Text } from "react-native";
import BookCard from "../../components/BookCard";

export default function BookScreen () {
    return (
        <ScrollView>
            <View className="p-5">
                <Text className="text-lg font-bold">Hello World</Text>
                <Text>This is CAPA course</Text>
            </View>
            <BookCard name="Diwan" author="Ahamede Xani" />
            <BookCard name="Another Book" author="Another Author" price="$29.99" />
            <BookCard name="Yet Another Book" author="Yet Another Author" price="$39.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />

        </ScrollView>
    )
}