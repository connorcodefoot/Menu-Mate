import React from "react";
import MenuItem from "./MenuItem";


export default function Menu(props) {

  const items = [
    {
      id: 1, 
      name: "The Local Burger",
      description: "Two grilled patties, melted american cheese, caramelized onions, tomato, shredded lettuce and secret house sauce",
      price_cents: 1925,
      active: true
    },
    {
      id: 2,
      name: "Mexican Fish Tacos",
      description: "Two beer battered fish tacos, garlic aioli and pico de gallo with fries",
      price_cents: 1875,
      active: true
    },
    {
      id: 3, 
      name: "Calabrian Ceasar Salad",
      description: "Calabrian chili-spiked Caesar dressing, whole romaine hearts, panko parmesan, bacon and crispy capers",
      price_cents: 1425,
      active: true
    },
    {
      id: 4,
      name: "Fully Loaded Crispy Potatoes",
      description: "Parmesan and horseradish aioli, bacon, jalapeños and shaved grana padano",
      price_cents: 1325,
      active: true
    }
  ]

  return(
    items.map((item) => {
      return (
        <ul>
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price_cents={item.price_cents}
            status={item.status}
          />
        </ul>
      )
    })
  )
}