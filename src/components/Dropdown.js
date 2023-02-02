import React from 'react';

export default function Options(){
  const amounts = []

  for (let i = 0; i <= 50; i++) {
    amounts.push(i);
  }

  return (
    amounts.map(amount => {
      return <option value={amount}>{amount}</option>})
      )
}
