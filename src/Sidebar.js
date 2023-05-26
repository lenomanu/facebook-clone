import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';


function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow src = {user.photoURL} title = {user.displayName}/>
      <SidebarRow Icon = {LocalHospitalIcon} title = 'COVID-19 INFORMATION'/>
      <SidebarRow Icon = {ChatBubbleIcon} title = 'Messanger'/>
      <SidebarRow Icon = {VideoLibraryIcon} title = 'Watch'/>
      <SidebarRow Icon = {SportsEsportsIcon} title = 'Gaming'/>
      <SidebarRow Icon = {StorefrontIcon}  title= 'Market Place'/>
      <SidebarRow Icon = {ExpandMoreIcon}  title= 'More'/>
    </div>
  )
}

export default Sidebar
