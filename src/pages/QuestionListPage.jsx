import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ListaPreguntasPage() {
  const route = useRoute();
  const navigation = useNavigation();
  const { idCuestionario } = route.params;

  const [preguntas, setPreguntas] = useState(null);
  const [cuestionario, setCuestionario] = useState(null);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const res = await fetch(`http://localhost:3000/preguntas?idCuestionario=${idCuestionario}`);
        const data = await res.json();
        setPreguntas(data);
      } catch (err) {
        console.error("Failed to fetch preguntas:", err);
      }
    };

    const fetchCuestionario = async () => {
      try {
        const res = await fetch(`http://localhost:3000/cuestionarios/${idCuestionario}`);
        const data = await res.json();
        setCuestionario(data);
      } catch (err) {
        console.error("Error al cargar el cuestionario:", err);
      }
    };

    fetchPreguntas();
    fetchCuestionario();
  }, [idCuestionario]);

  if (!preguntas || !cuestionario) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>{cuestionario.nombre}</Text>
      <Text style={{ fontSize: 16, color: "#666", marginBottom: 20 }}>{cuestionario.descripcion}</Text>

      {preguntas.map((pregunta) => (
        <TouchableOpacity
          key={pregunta.id}
          onPress={() =>
            navigation.navigate("Pregunta", {
              idCuestionario,
              idPregunta: pregunta.id
            })
          }
          style={{
            padding: 15,
            backgroundColor: "#f0f0f0",
            marginBottom: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ fontSize: 16 }}>{pregunta.titulo}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
