import React from 'react'
import styles from './index.module.css'
import store from './store'
class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    store.getUsrInfo()
  }
  render() {
    return (
      <div className={styles.container_Box}>
        <ul>
          <li>{`wellcome JSTemplete`}</li>
          <li>{`you can use mobx and get the remote data`}</li>
          <li>{store.userlist}</li>
        </ul>
      </div>
    )
  }
}
export default Index
