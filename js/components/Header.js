const iconStyle = {
  fill:'#fff'
};

var Header = React.createClass({
  getDefaultProps: function() {
    return {
      path: 'http://google.fr'
    };
  },

  render: function() {
    return (
      <div>
        <div className="header-container">
          <div className="container">
              <div className="row pt-3 pb-3 text-light">
                  <div className="col text-right">
                    <img src="img/menu.svg" width="35"/>
                  </div>
                  <div className="col text-center">
                    <strong>InstaPlus</strong>
                  </div>
                  <div className="col">
                    <img src="img/home.svg" width="35"/>
                  </div>
              </div>
              <div className="row pb-4">
                  <div className="col text-white text-center">
                    <button className="btn btn-outline-light btn-block pt-2 pb-2  btn-rnd">
                      <img src="img/funds.svg" width="35" />
                      <p className="mb-0">125 USD</p>
                    </button>
                  </div>
                  <div className="col text-white text-center">
                  <p>Fawzi_Noual</p>
                  <button className="btn btn-outline-light arb-btn  btn-rnd">
                  ترقية العضوية
                  </button>
                  </div>
              </div>
          </div>

        </div>
        <div className="container">
            <div className="row mt-5 text-center">
              <div className="col">
                <div className="card border-0">
                  <div className="card-body shadow">
                    <img src="img/settings.png" width="45"/>
                      <p className="mt-2 arb-btn">خدماتنا</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0">
                  <div className="card-body shadow">
                    <img src="img/new.png" width="45"/>
                      <p className="mt-2 arb-btn">ما الجديد</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 text-center">
              <div className="col">
                <div className="card border-0">
                  <div className="card-body shadow">
                    <img src="img/call.png" width="45"/>
                      <p className="mt-2 arb-btn">تقرير الطلبات</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0">
                  <div className="card-body shadow">
                    <img src="img/help.png" width="45"/>
                      <p className="mt-2 arb-btn">الدعم الفني</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
    );
  }
});

React.render(<Header path="http://google.fr" />, document.body);
