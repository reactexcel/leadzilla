import React from 'react'
import TopContent from './topcontent';
import CutomerReviews from './cutomerReviews';
import MiddleTopSection from './middleSection';
import FeatureList from './featureList';


const HomePageContainer=()=> {
  return (
    <>
      <TopContent />
      <MiddleTopSection />
      <FeatureList />
      <CutomerReviews />
    </>
  )
}

export default HomePageContainer;