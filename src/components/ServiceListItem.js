import { StyleSheet, Text, View } from 'react-native';

export default function ServiceListItem({ service }) {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.tag}>
          <Text style={styles.tagInner}>{service.branch}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#2D3773',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  container: {
    padding: 10,
    display: 'flex'
  },
  title: {
    fontSize: 16,
    color: '#F2F2F2'
  },
  tag: {
    fontSize: 12
  },
  tagInner: {
    fontSize: 12,
    padding: 10,
    borderRadius: 2,
    color: '#F2F2F2',
    backgroundColor: '#252D59'
  }
});
