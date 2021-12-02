import React from 'react'
import { View, Text } from 'react-native'
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

const data = [
  { id: 1, name: 'Bahan 1' },
  { id: 2, name: 'Bahan 2' },
  { id: 3, name: 'Bahan 3' },
  { id: 4, name: 'Bahan 4' },
  { id: 5, name: 'Bahan 5' },
  { id: 6, name: 'Bahan 6' },
  { id: 7, name: 'Bahan 7' },
  { id: 8, name: 'Bahan 8' },
  { id: 9, name: 'Bahan 9' },
  { id: 10, name: 'Bahan 10' },
  { id: 11, name: 'Bahan 11' },
  { id: 12, name: 'Bahan 12' },
  { id: 13, name: 'Bahan 13' },
  { id: 14, name: 'Bahan 14' },
  { id: 15, name: 'Bahan 15' },
  { id: 16, name: 'Bahan 16' },
];

export default function coba() {
  return (
  <BouncyCheckboxGroup
    data={data}
    onChange={({ id }) => onChange(id)}
  />
  )
}
