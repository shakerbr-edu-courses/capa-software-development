import { Alert,Button,TextInput,ScrollView, View, Text } from "react-native";
import {useState} from 'react';
import BookCard from "../../components/BookCard";

export default function BookScreen () {
    const [search, setSearch] = useState('')
    return (
        <ScrollView>
            <View className="p-5 bg-red-500">
                <Text className="text-lg font-bold">Hello World</Text>
                <Text>This is CAPA course</Text>
            </View>
            <TextInput 
            placeholder="Search books"
            onChangeText={(text) => setSearch(text)}
            className="bg-gray-300 border border-gray-200 p-2 m-2 rounded-lg"
            />

            <Button title="Search" 
            onPress={() => Alert.alert("Search", search)}/>


            <BookCard name="Diwan" author="Ahamede Xani" />
            <BookCard name="Another Book" author="Another Author" price="$29.99" />
            <BookCard name="Yet Another Book" author="Yet Another Author" price="$39.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />
            <BookCard name="One More Book" author="One More Author" price="$49.99" />

        </ScrollView>
    )
}