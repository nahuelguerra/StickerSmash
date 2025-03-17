import { Modal, View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";

type Props = {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void
}

export default function EmojiPicker ({isVisible, children, onClose}: Props){
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons
                            name="close"
                            size={22}
                            color="rgb(104, 252, 195)"
                        />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#191919",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "rgb(104, 252, 195)",
        fontSize: 16
    }
});