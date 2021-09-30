import dummy from './assets/images/product_dummy.svg';
import './assets/css/app.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardStats from './components/CardStats';
import Container from './components/Container';

function App() {
  let estatisticas = [
    {
      cor: 'primary',
      titulo: 'Produtos no banco de dados',
      valor: '200',
      icone: 'fa-clipboard-list'
    },
    {
      cor: 'success',
      titulo: 'Amount in products',
      valor: '$546.456',
      icone: 'fa-dollar-sign'
    },
    {
      cor: 'warning',
      titulo: 'Users quantity',
      valor: '38',
      icone: 'fa-user-check'
    },
    {
      cor: 'danger',
      titulo: 'Customer churn',
      valor: '100',
      icone: 'fa-bomb'
    }
  ];

  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

          {/* <!-- Topbar --> */}

          <Navbar />

          {/* <!-- End of Topbar --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row --> */}
            <Container>
              {estatisticas.map((estatistica, indice) =>
                <CardStats key={indice} cor={estatistica.cor} titulo={estatistica.titulo} valor={estatistica.valor} icone={estatistica.icone} />
              )}

            </Container>

            {/* <!-- Content Row --> */}
            <Container>
              <div className="row">
                {/* <!-- Last Product in DB --> */}
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src={dummy} alt="dummy" />
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                      <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Categories in DB --> */}
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 01
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 02
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 03
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 04
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 05
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 06
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>

          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2020</span>
            </div>
          </div>
        </footer>
        {/* <!-- End of Footer --> */}

      </div>
      {/* <!-- End of Content Wrapper --> */}

      {/* <!-- End of Page Wrapper --> */}
    </div >
  );
}

export default App;
