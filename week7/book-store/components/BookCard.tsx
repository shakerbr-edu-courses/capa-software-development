import { View, Text } from "react-native";

interface BookCardProps {
    name: string;
    author: string;
    price?: string;
}

export default function BookCard({ name, author, price = 'N/A' }: BookCardProps) {
    return (
        <View>
            <Text className="text-lg font-bold">{name}</Text>
            <Text>{author}</Text>
            <Text>Price: {price}</Text>
        </View>
    )
}