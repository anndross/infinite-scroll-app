import * as S from './styles'
import { useQuery } from '@apollo/client'
import { GET_APODS, GET_APODS_RESPONSE } from './gql'
import { useContext, useEffect, useState } from 'react'
import { format, subDays } from 'date-fns'
import { Context } from '../context'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text'
import { Card } from './Card'

export const LateralCard = () => {
  const { setData, data: contextData } = useContext(Context)

  const [dates, setDates] = useState({
    startDate: format(new Date(), 'yyyy/MM/dd'),
    endDate: format(subDays(new Date(), 20), 'yyyy/MM/dd')
  })
  const [apods, setApods] = useState<GET_APODS_RESPONSE['getApods']>([])

  const { data, loading } = useQuery<GET_APODS_RESPONSE>(
    GET_APODS,
    { variables: dates }
  )

  useEffect(() => {
    if (data?.getApods) {
      if (Object.keys(contextData)?.length === 0) setData(data.getApods[0])

      setApods(apods => [...apods, ...data.getApods])
    }
  }, [data])

  useEffect(() => {
    if (!loading) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setDates((dates) => (
            {
              startDate: format(subDays(new Date(dates.startDate), 21), 'yyyy/MM/dd'),
              endDate: format(subDays(new Date(dates.endDate), 20), 'yyyy/MM/dd'),
            }
          ))
        }
      })

      const sentinel = document.querySelector('#sentinel')

      intersectionObserver.observe(sentinel!)

      return () => intersectionObserver.disconnect()
    }
  }, [loading])

  return (
    <S.Container>
      {apods.map(apod => {
        return (
          <Card key={apod.id} data={apod} />
        )
      })}
      <div id='sentinel' />
    </S.Container>
  )
}