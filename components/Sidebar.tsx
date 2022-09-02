function Sidebar() {
  return (
    <div className="s_components">
        <div className="s_component__logo">
            <i className="uil uil-chart-bar"></i>
        </div>

        <div className="s_component__menu">
            <div className="s_component__menu__item active_bar">
                <i className="uil uil-apps"></i>
            </div>
            <div className="s_component__menu__item">
                <i className="uil uil-bolt-alt"></i>
            </div>
            <div className="s_component__menu__item">
                <i className="uil uil-wallet"></i>
            </div>
            <div className="s_component__menu__item">
                <i className="uil uil-chart-pie-alt"></i>
            </div>
        </div>

        <div className="s_component__logout">
            <i className="uil uil-signout"></i>
        </div>
    </div>
  )
}

export default Sidebar