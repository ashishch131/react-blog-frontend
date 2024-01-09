import "./setting.css"


const Setting = () => {
  return (
      <div className="setting">
          <div className="formWrapper">
          <form className="settingForm">
              <div className="fileUpload">
              <img className="settingImg" src="https://cdn.dribbble.com/userupload/10928093/file/original-8d51431cfa1e2a93f8fe979d93605652.jpg?resize=1024x705" alt="" />
              <label htmlFor="fileInput">
              <i class="fa-regular fa-user"></i>
          </label>
                  <input type="file" style={{display: "none"}} id="fileInput" />
              </div>
              <div className="settingInputBox">
                  <label className="inputText" >Username</label>
                  <input type="text" className="settingInput" autoFocus="true"/>
                  <label className="inputText" >Email</label>
                  <input type="email" className="settingInput"  />
                  <label className="inputText" >Password</label>
                  <input type="password" className="settingInput" />
              </div>
              <button className="updatBtn">Update</button>
              </form>
          </div>
     
    </div>
  )
}

export default Setting