import { Text, Pressable, StyleSheet} from 'react-native';

export default function Items({ title }) {
    return (
        <Pressable style={styles.item}>
            <Text>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "red",
        padding: 20,
        borderRadius: 12,
        margin: 4,
    },
});