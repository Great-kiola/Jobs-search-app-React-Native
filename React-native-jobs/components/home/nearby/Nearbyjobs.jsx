import { useState } from 'react'
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native'

import { useRouter } from "expo-router";

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'; 
import PopularjobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from '../../../Hook/useFetch';


const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch
  ('search', {
    query: 'React developer',
    num_pages: 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator Sizes="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={( item )=> (
              <PopularjobCard
                item={item}
              />
            )}

            keyExtractor={item =>item ?.job_id}
            contentContainerStyle={{columGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs