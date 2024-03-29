const Notification = ({ notificationData }) => {

  const colors = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue'
  }

  const title = {
    success: 'Correcto',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información'
  }

  const notificationStyle = {
    position: 'absolute',
    top: 100,
    right: 30,
    backgroundColor: colors[notificationData.type],
    color: 'white',
    padding: 20,
    borderRadius: 10
  }

  return (
    <article style={notificationStyle}>
      <h3> { title[notificationData.type] } </h3>
      { notificationData.text }
    </article>
  )
}

export default Notification