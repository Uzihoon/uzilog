import React from 'react';
import GoogleAd from './GoogleAd';

function PostAd() {
  return (
    <GoogleAd
      style={{ width: '100%', minHeight: '150px', marginTop: '50px' }}
      client='ca-pub-8674350045956292'
      slot='1351352950'
      format='auto'
      responsive='true'
    />
  );
}

export default PostAd;
