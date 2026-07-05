import { View, Text, Image } from "react-native";

interface BookCardProps {
    name: string;
    author: string;
    price?: string;
    pictureSource?: string
}

export default function BookCard({ name, author, price = 'N/A', pictureSource }: BookCardProps) {
    return (
        <View className="bg-yellow-500 mb-2">
            // local
            <Image
            source={require('../assets/images/react-logo.png')}
            className="w-16 h-16"
            />
            // online | remote
            {pictureSource &&
            <Image
            source={{uri:pictureSource}}
            className="w-16 h-16 bg-black"
            resizeMode="cover"
            />
            }
            <Text className="text-lg font-bold">{name}</Text>
            <Text>{author}</Text>
            <Text>Price: {price}</Text>
        </View>
    )
}