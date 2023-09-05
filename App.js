import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import oBiscoitoAberto from './assets/biscoitoaberto.png';
import oBiscoito from './assets/biscoito.png';

export default function App() {
  const [abrir, setAbrir] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
  ];

  function gerarFrase() {
    setAbrir(true)
    const random = parseInt(Math.random() * frases.length)
    setMensagem(frases[random])
  }
  return (

    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={abrir ? oBiscoitoAberto : oBiscoito}
        />

        <Text style={styles.text}>
          {
            abrir ? mensagem : ''
          }
        </Text>
        <TouchableOpacity 
              style={styles.button}
              onPress={gerarFrase} 
              disabled={abrir}
              >
            <Text style={styles.textButton}>Abrir Biscoito</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.button}
           onPress={() => setAbrir(false)}>
            <Text style={styles.textButton}>Reiniciar Biscoito</Text>
          </TouchableOpacity>


      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 60,
    
  },

  button: {
    backgroundColor: "#B22222",
    borderRadius: 100,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 180,
    marginBottom: 20
  },

  textButton: {
    fontSize: 20,
    color: "#FFDAB9",
    fontWeight: "bold",
    alignSelf: "center",
  },

  text: {
    fontSize: 22,
    color: '#800000',
    marginBottom: 50,
    fontWeight: 'bold',
    // backgroundColor: '#FFF8DC',
    paddingRight: 20,
    paddingLeft: 20
  }
});