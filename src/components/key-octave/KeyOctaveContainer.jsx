import React from 'react'
import PropTypes from 'prop-types';
import * as AppData from '../../AppData'
import clsx from 'clsx';
import { KeyOctavePresenter } from './KeyOctavePresenter'
import { KeyContainer } from '../key/KeyContainer';

export const KeyOctaveContainer = ({object, index, keyNotes, controller, dataLength}) => {

  const keyList = object.tones.map((tone, toneIndex) => {
    return (
      <KeyContainer
        key={`key:${tone.pitchName}${object.octave}`}
        className={clsx(
          object.bKeyIndex.indexOf(toneIndex) >= 0 ? "black-key" : "white-key",
          tone.pitchName,
          // 最高音域の場合は .top を設定
          index === 0 &&'top',
          // 最低音域の場合は、 .bottom を設定
          (dataLength - 1) === index && 'bottom')
        }
        pitchName={`${tone.pitchName}${object.octave}`}
        isPress={keyNotes[index][toneIndex]}
        controller={controller}
        octaveIndex={index}
        toneIndex={toneIndex}
      >
      </KeyContainer>
    )
  })

  return (
    <KeyOctavePresenter
      id={`octave:${object.octave}`}
      className={clsx("octave", AppData.getOctaveClassName(object.tones.length))}
    >
      {keyList}
    </KeyOctavePresenter>
  )
}

KeyOctaveContainer.propTypes = {
  object: PropTypes.object,
  index: PropTypes.number,
  keyNotes: PropTypes.array,
  controller: PropTypes.object,
  dataLength: PropTypes.number
};