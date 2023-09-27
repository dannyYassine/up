import { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { ServiceListPresenter } from '../presenters/ServiceListPresenter';
import ServiceListItem from './ServiceListItem';

export default function ProjectList() {
  const presenter = new ServiceListPresenter({
    setServices: (services) => {
      setList(services);
    }
  });

  const [list, setList] = useState(null);

  useEffect(() => {
    presenter.load();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {list ? (
        <FlatList
          data={list}
          renderItem={({ item }) => <ServiceListItem service={item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      ) : (
        <Text>loading</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});
