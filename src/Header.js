import React from 'react'
import {
  Container,
  Menu
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>         
         Todos App
        </Menu.Item>
      </Container>
    </Menu>
    </div>
)

export default FixedMenuLayout