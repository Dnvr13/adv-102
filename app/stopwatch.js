import { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [start]);

    function handleStartPause() {
        setStart(!start);
    }

    function handleReset() {
        setTime(0);
        setStart(false);
        setLaps([]);
    }

    function handleLap() {
        if (start) {
            setLaps((prevLaps) => [...prevLaps, time]);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>
                00:00:{time < 10 ? `0${time}` : time}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="Reset" onPress={handleReset} color="#a14d3a" />
                <Button title={start ? "Pause" : "Start"} onPress={handleStartPause} color="#5a4b3b" />
                <Button title="Lap" onPress={handleLap} color="#c0aa6b" />
            </View>
            <FlatList
                data={laps}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text style={styles.lapText}>Lap {index + 1}: {item}s</Text>
                )}
                style={styles.lapList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
    },
    timer: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#c0aa6b",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 20,
    },
    lapList: {
        marginTop: 20,
        width: "80%",
    },
    lapText: {
        fontSize: 18,
        color: "#e1c16e",
        textAlign: "center",
        padding: 5,
    },
});
    