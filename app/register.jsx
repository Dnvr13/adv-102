import { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Register() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    function handleRegister() {
        console.log("Registering with:", { name, email, password, image });
        alert("Registered Successfully!");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Text style={styles.imageText}>Select Image</Text>
                )}
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#c0aa6b"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#c0aa6b"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#c0aa6b"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Register" onPress={handleRegister} color="#c0aa6b" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#e1c16e",
        marginBottom: 20,
    },
    imagePicker: {
        width: 120,
        height: 120,
        backgroundColor: "#3b2c1a",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
        marginBottom: 20,
    },
    imageText: {
        color: "#c0aa6b",
        fontSize: 14,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    input: {
        width: "100%",
        backgroundColor: "#2d2d2d",
        color: "#c0aa6b",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#5a4b3b",
    },
});
