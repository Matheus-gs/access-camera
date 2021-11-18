function start_camera() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => {
      const video_stream = document.querySelector('#video')
      video_stream.srcObject = stream
    })
    .catch(Error => console.log(Error))
}

document.addEventListener('DOMContentLoaded', start_camera)
