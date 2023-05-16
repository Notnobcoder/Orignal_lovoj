import React, { useState } from 'react'
import { LeftViewOption, MapContainer, MapHolder, RightViewOption, SideBarIcon, ViewContainer } from './styles'
import MapImage from '../../assests/images/mapImage.png'
import SideBar from '../../assests/images/SideBarIcon.png'
import StoreContainer from '../StoreContainer/StoreContainer'
import AnimationModal from '../AnimationModal/AnimationModal'
import ModalStoreCard from '../ModalStoreCard/ModalStoreCard'

export default function MapSection ({ handleSideBar, showSideBar, fullHeight }) {
  const MAP_VIEW = 'Map View'
  const GRID_VIEW = 'Grid View'
  const [viewType, setViewType] = useState(MAP_VIEW)
  const [showModal, setShowModal] = useState(false)
  const isMapView = viewType === MAP_VIEW

  const handleModal = () => {
    setShowModal(false)
  }

  const handler = () => {
    setShowModal(true)
  }
  return (
    <>
      <AnimationModal isOpen={showModal} width='340px' closeModal={handleModal}>
        <ModalStoreCard />
      </AnimationModal>
      <MapContainer fullHeight={fullHeight}>
        {isMapView
          ? <MapHolder src={MapImage} alt='Map' />
          : <StoreContainer modalOpen={showSideBar} handler={handler} />}
        {!showSideBar &&
          <SideBarIcon
            src={SideBar}
            onClick={handleSideBar}
            alt='SideBar Icon'
          />}
        <ViewContainer>
          <LeftViewOption
            onClick={() => setViewType(MAP_VIEW)}
            active={viewType === MAP_VIEW}
          >
            Map View
          </LeftViewOption>
          <RightViewOption
            onClick={() => setViewType(GRID_VIEW)}
            active={viewType === GRID_VIEW}
          >
            Grid View
          </RightViewOption>
        </ViewContainer>
      </MapContainer>
    </>
  )
}
