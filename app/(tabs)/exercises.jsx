import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Exercise() {
    const router = useRouter();

    const exercises = [
        { title: "onLinkPress:", description: "Handles link presses and overrides default behavior." },
        { title: "onLinkLongPress:", description: "Handles long presses on links, default is null." },
        { title: "stylesheet:", description: "Overrides the styles for HTML elements." },
        { title: "bullet:", description: "Text rendered before every list item." },
    ];

    return (
        <ScrollView style={styles.container}>
            {exercises.map((exercise, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.card} 
                    onPress={() => {
                        if (index === 0) router.push("/login"); 
                    }}
                >
                    <Text style={styles.title}>{exercise.title}</Text>
                    <Text style={styles.description}>{exercise.description}</Text>
                </TouchableOpacity>
            ))}
            
            <TouchableOpacity style={styles.stopwatchCard} onPress={() => router.push("/stopwatch")}>
                <Text style={styles.stopwatchTitle}>Stopwatch</Text>
                <Text style={styles.stopwatchDescription}>Track your time with stopwatch.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginCard} onPress={() => router.push("/login")}>
                <Text style={styles.loginTitle}>Login</Text>
                <Text style={styles.loginDescription}>Access your account by logging in.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerCard} onPress={() => router.push("/register")}>
                <Text style={styles.registerTitle}>Register</Text>
                <Text style={styles.registerDescription}>Create an account to get started.</Text>
            </TouchableOpacity>
            
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
        borderWidth: 1,
        borderColor: "#5a4b3b",
    },
    title: {
        fontSize: 20,
        color: "#c0aa6b",
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: "#c0aa6b",
    },
    loginCard: {
        backgroundColor: "#3b2c1a",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#5a4b3b",
    },
    loginTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#e1c16e",
    },
    loginDescription: {
        fontSize: 16,
        color: "#c0aa6b",
    },
    stopwatchCard: {
        backgroundColor: "#2e3b3a",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#4a6b6a",
    },
    stopwatchTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#91c499",
    },
    stopwatchDescription: {
        fontSize: 16,
        color: "#c0aa6b",
    },
    registerCard: {
        backgroundColor: "#2e4b3a",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#5a4b3b",
    },
    registerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#e1c16e",
    },
    registerDescription: {
        fontSize: 16,
        color: "#c0aa6b",
    },
});
