import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CatalogItem } from '../components/CatalogItem/CatalogItem'
import { CatalogItemSkeleton } from '../components/CatalogItem/CatalogItemSkeleton'
import { useAuth } from '../hooks/useAuth'
import { getFavorites } from '../serverMethods/getFavorites'
import { getItems } from '../serverMethods/getItems'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 60px 30px;
  row-gap: 60px;
  justify-content: space-evenly;
  align-items: flex-start;
`

export function Catalogpage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems().then(setItems)
  }, [])

  // const { user } = useAuth()
  // const [favorites, setFavorites] = useState([])
  // const [filteredItems, setFilteredItems] = useState([])
  // useEffect(() => {
  //   if (user) {
  //     getFavorites(user).then(setFavorites)
  //   }
  // }, [items])
  // useEffect(() => {
  //   if (user) {
  //     items.forEach((item) => {
  //       if (favorites.find((fav) => fav.id === item.id)) {
  //         setFilteredItems((prev) => [...prev, item])
  //       }
  //     })
  //   }
  // }, [favorites])

  return (
    <CardsWrapper>
      {items.length !== 0 ? (
        items.map((item) => (
          <CatalogItem
            key={item.id}
            id={item.id}
            path={item.img}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <>
          {[...Array(10).keys()].map((i) => (
            <CatalogItemSkeleton key={i} />
          ))}
        </>
      )}
    </CardsWrapper>
  )
}
