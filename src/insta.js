import React from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react'
import { InstagramEmbed } from 'react-social-media-embed';
function ModalExampleModal() {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
  basic
    >
     
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/DP80UlyDOWY/" width={"80%"} style={{maxWidth:550}} />
</div>
    </Modal>
  )
}

export default ModalExampleModal