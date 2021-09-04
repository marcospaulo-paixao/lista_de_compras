import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  // Hooks - useState
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  //SPREAD JS
  function handleAdicionarProduto() {
    setProdutos((vetorVelho) => [...vetorVelho, produto]);
    setProduto("");
  }

  function handleRemoverProduto(prodRemover) {
    setProdutos((vetorVelho) =>
      vetorVelho.filter((prod) => prod !== prodRemover)
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.title}>Lista de Compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o produto!"
        value={produto}
        onChangeText={setProduto}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdicionarProduto}>
        <Icon name="plus" size={30} color="#eee" />
        <Text style={styles.labelButtton}>Adicionar</Text>
      </TouchableOpacity>
      <View style={styles.listContent}>
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Produto data={item} onPress={() => handleRemoverProduto(item)} />
          )}
        />
      </View>
    </View>
  );
}

function Produto({ data, onPress }) {
  return (
    <View style={styles.produto}>
      <View style={styles.produtoContent}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.name}>{data}</Text>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={{ marginRight: 20 }} onPress={onPress}>
            <Icon name="trash" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 35,
    margin: 20,
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2975E9",
    width: 150,
    height: 60,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  labelButtton: {
    color: "#eee",
    fontSize: 25,
    marginLeft: 5,
  },
  listContent: {
    marginTop: 15,
  },

  buttonContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  produto: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  produtoContent: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
