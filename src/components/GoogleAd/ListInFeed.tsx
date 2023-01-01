import React from 'react';
import GoogleAd from './GoogleAd';

function ListInFeed() {
  return (
    <GoogleAd
      style={{
        width: '100%',
        height: '100%',
      }}
      format='fluid'
      layoutKey='-fb+5w+4e-db+86'
      client='ca-pub-8674350045956292'
      slot='2871522025'
    />
  );
}

export default ListInFeed;
