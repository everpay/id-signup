import React from 'react'
import { css } from '@emotion/core'
import { BeatLoader } from 'react-spinners'

const override = css`
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.3);
  padding-top: 25%;
`

const Loader = props => {
  return (
    <BeatLoader
      css={override}
      sizeUnit={'px'}
      size={25}
      color={'#606362'}
      loading={props.loading}
    />
  )
}

export default Loader
