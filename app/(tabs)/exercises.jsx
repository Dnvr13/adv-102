import { View, Text, ScrollView, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";

export default function Exercise() {
    const exercises = [
        { title: 'onLinkPress:', description: 'a function which will be called with a url when a link is pressed. Passing this prop will override how links are handled (defaults to calling Linking.openURL(url))' },
        { title: 'onLinkLongPress:', description: 'a function which will be called with a url when a link is long pressed. The default is null.' },
        { title: 'stylesheet:', description: 'a stylesheet object keyed by tag name, which will override the styles applied to those respective tags.' },
        { title: 'bullet:', description: 'text which is rendered before every li inside a ul' },
        { title: 'paragraphBreak:', description: 'text which appears after every p element' },
    ];

    return (
        <ScrollView style={styles.container}>
            {exercises.map((exercise, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.title}>{exercise.title}</Text>
                    <HTMLView value={`<p>${exercise.description}</p>`} stylesheet={htmlStyles} />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
        padding: 20,
    },
    card: {
        backgroundColor: "#2d2d2d",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: "#5a4b3b",
    },
    title: {
        fontSize: 20,
        color: "#c0aa6b",
        fontWeight: "bold",
        marginBottom: 5,
    },
});

const htmlStyles = StyleSheet.create({
    p: { color: "#c0aa6b", fontSize: 16 }, 
});