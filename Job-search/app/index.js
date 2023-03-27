import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
// import { Text } from '../components';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'



const Home =  ( ) => {
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const [showNearby, setShowNearby] = useState(false);

  const handleShowWelcome = () => {
    setShowWelcome(true);
  }

  const handleShowPopular = () => {
    setShowPopular(true);
  }

  const handleShowNearby = () => {
    setShowNearby(true);
  }

  const handleGoBack = () => {
    router.goBack();
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home;