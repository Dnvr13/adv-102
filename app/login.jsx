import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.description}>Enter your credentials to access your account.</Text>

            <TextInput placeholder="Email" placeholderTextColor="#c0aa6b" style={styles.input} />
            <TextInput placeholder="Password" placeholderTextColor="#c0aa6b" style={styles.input} secureTextEntry />

            <TouchableOpacity style={styles.authButton}>
                <Text style={styles.authButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/register")} style={styles.toggleButton}>
                <Text style={styles.toggleButtonText}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#e1c16e",
        textAlign: "center",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#c0aa6b",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#2d2d2d",
        color: "#e1c16e",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#5a4b3b",
    },
    authButton: {
        backgroundColor: "#5a4b3b",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    authButtonText: {
        color: "#e1c16e",
        fontSize: 18,
        fontWeight: "bold",
    },
    toggleButton: {
        marginTop: 15,
        alignItems: "center",
    },
    toggleButtonText: {
        color: "#c0aa6b",
        fontSize: 14,
    },
});
