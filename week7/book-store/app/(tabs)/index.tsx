import { Alert,Button,TextInput,ScrollView, View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useCallback } from 'react';
import BookCard from "../../components/BookCard";
import { fetchBooks } from "../../services/bookService";

interface Book {
    id: number;
    title: string;
    authors: string;
    formats: string;
}

export default function BookScreen () {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState<string | null>(null)

    const loadBooks = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const books = await fetchBooks();
            setBooks(books);
        } catch (error) {
            setError("Failed to fetch books.");
        } finally {
            setLoading(false);
        }
    }, [])

    if (loading) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        )
    }

    if (error) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center">
                <Text className="text-red-500">{error}</Text>
                <Button title="Retry" onPress={loadBooks} />
            </SafeAreaView>
        )
    }

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


            <BookCard name="Diwan" author="Ahamede Xani" pictureSource="https://picsum.photos/seed/picsum/200/300" />
            <BookCard name="Another Book" author="Another Author" price="$29.99" pictureSource="https://picsum.photos/200/300?grayscale"/>
            <BookCard name="Yet Another Book" author="Yet Another Author" price="$39.99" pictureSource="https://picsum.photos/id/870/200/300?grayscale&blur=2" />
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