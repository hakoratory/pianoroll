import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { ButtonContainer } from './ButtonContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { useButtonStyles } from '../../hooks/useButtonStyles';

export const StopButtonContainer = ({action, isPlaying = false, isInfo = false}) => {
  const classes = useButtonStyles();

  return (
    <ButtonContainer
      onClick={action}
      disabled={!isPlaying}
      optionalClass={clsx(classes.iconButton, classes.normalHover, isInfo && classes.noSelect)}
    >
        <FontAwesomeIcon icon={faStop}/>
    </ButtonContainer>
  )
}

StopButtonContainer.propTypes = {
  action: PropTypes.func,
  isPlaying: PropTypes.bool,
  isInfo: PropTypes.bool
}