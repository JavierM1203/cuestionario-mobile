import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function PreguntaPage() {
  const route = useRoute();
  const navigation = useNavigation();

  const { idPregunta, idCuestionario } = route.params;

  const [pregunta, setPregunta] = useState(null);
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    const fetchPregunta = async () => {
      try {
        const res = await fetch(`http://localhost:3000/preguntas/${idPregunta}`);
        const data = await res.json();
        setPregunta(data);
      } catch (err) {
        console.error("Error al obtener la pregunta:", err);
      }
    };

    fetchPregunta();
  }, [idPregunta]);

  const handleEnviar = async () => {
    if (!respuesta.trim()) return Alert.alert("Error", "Debes ingresar una respuesta.");

    const nuevaRespuesta = {
      idUsuario: 1, // reemplazar con ID real del usuario
      idPregunta: parseInt(idPregunta, 10),
      respuesta: respuesta
    };

    try {
      await fetch("http://localhost:3000/respuestas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaRespuesta)
      });
      Alert.alert("Éxito", "Respuesta guardada");
      navigation.navigate("Cuestionario", { idCuestionario });
    } catch (err) {
      console.error("Error al guardar la respuesta:", err);
    }
  };

  if (!pregunta) return <Text>Cargando pregunta...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>{pregunta.titulo}</Text>

      {pregunta.tipo === "multiple_opcion" ? (
        pregunta.opciones.map((opcion, idx) => (
          <TouchableOpacity
            key={idx}
            style={{
              padding: 10,
              backgroundColor: respuesta === opcion ? "#d0e0ff" : "#f0f0f0",
              marginBottom: 10,
              borderRadius: 5
            }}
            onPress={() => setRespuesta(opcion)}
          >
            <Text>{opcion}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 5,
            height: 100,
            textAlignVertical: "top",
            marginBottom: 20
          }}
          multiline
          value={respuesta}
          onChangeText={setRespuesta}
        />
      )}

      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
}