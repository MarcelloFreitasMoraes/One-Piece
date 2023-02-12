import React from 'react'
import { Select } from './styles'
import { INumbersProps } from './types'

export function SelectOptionsComponent({ itensPerPage, setItensPerPage }: INumbersProps) {
  return (
    <Select value={itensPerPage} onChange={(event) => setItensPerPage(Number(event.target.value))}>
      <option value={4}>4</option>
      <option value={8}>8</option>
      <option value={12}>12</option>
    </Select>
  )
}
